import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import AudioTranscriber from "@/components/AudioTranscriber";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-white to-turquoise/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="FileAudio" size={32} className="text-coral" />
            <span className="text-2xl font-bold text-darkGray">AudioText</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-darkGray hover:text-coral">
              <Icon name="HelpCircle" size={20} className="mr-2" />
              Помощь
            </Button>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              <Icon name="Upload" size={20} className="mr-2" />
              Загрузить аудио
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-darkGray mb-6">
            Аудио в<br />
            <span className="text-coral">чистый</span><br />
            <span className="text-turquoise">текст</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Преобразуйте аудиозаписи в четкий текст без междометий и слов-паразитов. 
            Профессиональная транскрипция с умной очисткой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg">
              <Icon name="Mic" size={24} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-4 text-lg">
              <Icon name="Play" size={24} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Main Feature - Audio Transcriber */}
      <section className="container mx-auto px-4 py-16">
        <AudioTranscriber />
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkGray mb-4">Возможности сервиса</h2>
          <p className="text-gray-600 text-lg">Профессиональная обработка аудио с вниманием к деталям</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Clean Transcription */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/20 transition-colors">
                <Icon name="FileText" size={32} className="text-coral" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Чистая транскрипция</CardTitle>
              <CardDescription className="text-base">
                Автоматическое удаление междометий, слов-паразитов и лишних звуков
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Без "аа", "ээ"</Badge>
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Умная очистка</Badge>
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Готовый текст</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Multiple Formats */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple/20 transition-colors">
                <Icon name="Music" size={32} className="text-purple" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Все форматы</CardTitle>
              <CardDescription className="text-base">
                Поддержка MP3, WAV, M4A, MP4 и других популярных форматов
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">MP3</Badge>
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">WAV</Badge>
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">M4A</Badge>
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">MP4</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Export Options */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-turquoise/20 transition-colors">
                <Icon name="Download" size={32} className="text-turquoise" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Экспорт и редактирование</CardTitle>
              <CardDescription className="text-base">
                Редактируйте результат и экспортируйте в удобном формате
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Копирование</Badge>
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Скачивание</Badge>
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Редактор</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-coral via-purple to-turquoise p-[1px] rounded-2xl">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-darkGray mb-8">Как это работает</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="animate-scale-in">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="font-semibold text-darkGray mb-2">Загрузите файл</h3>
                <p className="text-gray-600 text-sm">Выберите аудиофайл с вашего устройства</p>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="font-semibold text-darkGray mb-2">Обработка</h3>
                <p className="text-gray-600 text-sm">ИИ анализирует аудио и создает транскрипцию</p>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="font-semibold text-darkGray mb-2">Очистка</h3>
                <p className="text-gray-600 text-sm">Автоматическое удаление междометий и мусора</p>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="font-semibold text-darkGray mb-2">Готовый текст</h3>
                <p className="text-gray-600 text-sm">Получите чистый текст для использования</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-darkGray mb-6">
            Превратите <span className="text-coral">аудио</span> в <span className="text-turquoise">текст</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Начните использовать профессиональную транскрипцию уже сегодня
          </p>
          <Button size="lg" className="bg-gradient-to-r from-coral to-turquoise hover:from-coral/90 hover:to-turquoise/90 text-white px-8 py-4 text-lg">
            <Icon name="Zap" size={24} className="mr-2" />
            Начать транскрипцию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="FileAudio" size={24} className="text-coral" />
                <span className="text-xl font-bold">AudioText</span>
              </div>
              <p className="text-gray-300">
                Профессиональная транскрипция аудио в чистый текст
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Возможности</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Транскрипция аудио</li>
                <li>Очистка текста</li>
                <li>Редактирование</li>
                <li>Экспорт файлов</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Руководство</li>
                <li>FAQ</li>
                <li>Техподдержка</li>
                <li>Обратная связь</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Форматы</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MP3</li>
                <li>WAV</li>
                <li>M4A</li>
                <li>MP4</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 AudioText. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;