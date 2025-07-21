import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TranscriptionResult {
  original: string;
  cleaned: string;
  removedWords: string[];
}

const AudioTranscriber = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transcription, setTranscription] = useState<TranscriptionResult | null>(null);
  const [editedText, setEditedText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fillerWords = [
    'аа', 'ээ', 'мм', 'эм', 'гм', 'хм', 'ну', 'вот', 'как бы', 'типа', 'блин',
    'короче', 'в общем', 'это самое', 'ну это', 'так сказать', 'в принципе',
    'понимаешь', 'знаешь', 'слушай', 'смотри', 'это', 'там', 'тут', 'здесь'
  ];

  const cleanText = (text: string): TranscriptionResult => {
    let cleanedText = text;
    const removedWords: string[] = [];

    // Удаляем междометия и слова-паразиты
    fillerWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      const matches = cleanedText.match(regex);
      if (matches) {
        removedWords.push(...matches);
        cleanedText = cleanedText.replace(regex, '');
      }
    });

    // Очищаем лишние пробелы и знаки препинания
    cleanedText = cleanedText
      .replace(/\s+/g, ' ')
      .replace(/\s*,\s*/g, ', ')
      .replace(/\s*\.\s*/g, '. ')
      .replace(/\s*!\s*/g, '! ')
      .replace(/\s*\?\s*/g, '? ')
      .trim();

    // Исправляем заглавные буквы после точек
    cleanedText = cleanedText.replace(/\.\s*([а-я])/g, (match, letter) => 
      `. ${letter.toUpperCase()}`
    );

    // Делаем первую букву заглавной
    if (cleanedText.length > 0) {
      cleanedText = cleanedText.charAt(0).toUpperCase() + cleanedText.slice(1);
    }

    return {
      original: text,
      cleaned: cleanedText,
      removedWords: [...new Set(removedWords)]
    };
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type.startsWith('audio/') || file.type === 'video/mp4')) {
      setAudioFile(file);
      setTranscription(null);
      setEditedText('');
    }
  };

  const simulateTranscription = async (file: File): Promise<string> => {
    // Симуляция процесса транскрипции
    const sampleTexts = [
      "Аа, привет! Ну, это самое, хочу рассказать тебе про новый проект. Ээ, короче, мы делаем приложение для знакомств, понимаешь? Там будут стримы, подарки, вот это все. Ну как бы современный подход к дейтингу, знаешь?",
      "Мм, слушай, вчера был на конференции. Ээ, там рассказывали про новые технологии в IT. Ну вот, особенно интересно было про искусственный интеллект. Аа, блин, забыл упомянуть - там еще говорили про блокчейн!",
      "Это самое, хотел спросить насчет нашего проекта. Ну как дела с версткой? Ээ, все ли в порядке с компонентами? Аа, да, и еще - нужно будет добавить анимации, понимаешь?"
    ];
    
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    
    // Симулируем прогресс
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    return randomText;
  };

  const handleTranscribe = async () => {
    if (!audioFile) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // В реальном приложении здесь был бы вызов API для транскрипции
      const originalText = await simulateTranscription(audioFile);
      const result = cleanText(originalText);
      setTranscription(result);
      setEditedText(result.cleaned);
    } catch (error) {
      console.error('Ошибка транскрипции:', error);
    } finally {
      setIsProcessing(false);
      setProgress(0);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadTranscription = () => {
    if (!transcription) return;
    
    const blob = new Blob([editedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcription-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Mic" size={24} className="text-coral" />
            Транскрипция аудио в текст
          </CardTitle>
          <CardDescription>
            Загрузите аудиофайл и получите чистый текст без междометий и слов-паразитов
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Загрузка файла */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-coral transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*,video/mp4"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Icon name="Upload" size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-700 mb-2">
              Выберите аудиофайл для транскрипции
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Поддерживаются форматы: MP3, WAV, M4A, MP4
            </p>
            <Button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-coral hover:bg-coral/90"
            >
              <Icon name="FolderOpen" size={20} className="mr-2" />
              Выбрать файл
            </Button>
          </div>

          {/* Информация о файле */}
          {audioFile && (
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="Music" size={20} className="text-coral" />
                    <div>
                      <p className="font-medium">{audioFile.name}</p>
                      <p className="text-sm text-gray-500">
                        {(audioFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleTranscribe}
                    disabled={isProcessing}
                    className="bg-turquoise hover:bg-turquoise/90"
                  >
                    {isProcessing ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      <>
                        <Icon name="Play" size={20} className="mr-2" />
                        Начать транскрипцию
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Прогресс */}
          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Обработка аудио...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Результаты */}
          {transcription && (
            <div className="space-y-6">
              {/* Статистика очистки */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-green-800">Результаты очистки</h3>
                    <Badge className="bg-green-100 text-green-800">
                      Удалено: {transcription.removedWords.length} слов
                    </Badge>
                  </div>
                  {transcription.removedWords.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-green-700">Удаленные слова-паразиты:</p>
                      <div className="flex flex-wrap gap-1">
                        {transcription.removedWords.map((word, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {word}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Оригинальный текст */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-700">Оригинальный текст</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(transcription.original)}
                  >
                    <Icon name="Copy" size={16} className="mr-2" />
                    Копировать
                  </Button>
                </div>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 whitespace-pre-wrap">{transcription.original}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Очищенный текст для редактирования */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-700">Очищенный текст</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(editedText)}
                    >
                      <Icon name="Copy" size={16} className="mr-2" />
                      Копировать
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={downloadTranscription}
                    >
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </div>
                <Textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  placeholder="Отредактируйте текст при необходимости..."
                  className="min-h-[200px] resize-y"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AudioTranscriber;