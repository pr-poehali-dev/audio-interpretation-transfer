import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-white to-turquoise/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/img/e526dec5-59a2-4fe8-a462-979b463decd8.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="text-2xl font-bold text-darkGray">LoveStream</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-darkGray hover:text-coral">
              <Icon name="User" size={20} className="mr-2" />
              Войти
            </Button>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              Начать знакомства
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-darkGray mb-6">
            Знакомства.<br />
            <span className="text-coral">Стримы.</span><br />
            <span className="text-turquoise">Подарки.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Многосервисное приложение для современных знакомств. Найди любовь, смотри стримы, дари подарки — всё в одном месте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg">
              <Icon name="Heart" size={24} className="mr-2" />
              Скачать приложение
            </Button>
            <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-4 text-lg">
              <Icon name="Play" size={24} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-darkGray mb-4">Всё для знакомств в одном приложении</h2>
          <p className="text-gray-600 text-lg">Откройте новые возможности для встреч и общения</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Dating Feature */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/20 transition-colors">
                <Icon name="Heart" size={32} className="text-coral" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Умные знакомства</CardTitle>
              <CardDescription className="text-base">
                Современный алгоритм подбора по интересам и совместимости
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <img src="/img/36e40754-a04b-4c28-a78b-1fb0c4d70302.jpg" alt="Dating interface" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Свайпы</Badge>
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Лайки</Badge>
                <Badge className="bg-coral/10 text-coral hover:bg-coral/20">Супер-лайки</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Streaming Feature */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple/20 transition-colors">
                <Icon name="Video" size={32} className="text-purple" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Живые стримы</CardTitle>
              <CardDescription className="text-base">
                Создавай контент, знакомься через стримы и зарабатывай подарками
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <img src="/img/0f316f97-5df4-4795-8abf-4250ffd86b8d.jpg" alt="Streaming interface" className="w-full h-40 object-cover rounded-lg mb-4" />
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">HD стримы</Badge>
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">Чат</Badge>
                <Badge className="bg-purple/10 text-purple hover:bg-purple/20">Эффекты</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Gifts Feature */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-turquoise/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-turquoise/20 transition-colors">
                <Icon name="Gift" size={32} className="text-turquoise" />
              </div>
              <CardTitle className="text-2xl text-darkGray">Виртуальные подарки</CardTitle>
              <CardDescription className="text-base">
                Выражай симпатию через уникальные подарки и эмоции
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-gradient-to-br from-coral to-purple p-4 rounded-lg text-white text-2xl">💝</div>
                <div className="bg-gradient-to-br from-turquoise to-purple p-4 rounded-lg text-white text-2xl">🌹</div>
                <div className="bg-gradient-to-br from-purple to-coral p-4 rounded-lg text-white text-2xl">💎</div>
                <div className="bg-gradient-to-br from-coral to-turquoise p-4 rounded-lg text-white text-2xl">🔥</div>
                <div className="bg-gradient-to-br from-purple to-turquoise p-4 rounded-lg text-white text-2xl">⭐</div>
                <div className="bg-gradient-to-br from-turquoise to-coral p-4 rounded-lg text-white text-2xl">💫</div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Стикеры</Badge>
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Анимации</Badge>
                <Badge className="bg-turquoise/10 text-turquoise hover:bg-turquoise/20">Эксклюзив</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-coral via-purple to-turquoise p-[1px] rounded-2xl">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-darkGray mb-8">Нас уже выбрали тысячи пользователей</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="animate-scale-in">
                <div className="text-4xl font-bold text-coral mb-2">50K+</div>
                <div className="text-gray-600">Активных пользователей</div>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-bold text-purple mb-2">25K+</div>
                <div className="text-gray-600">Пар нашли любовь</div>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-bold text-turquoise mb-2">100K+</div>
                <div className="text-gray-600">Часов стримов</div>
              </div>
              <div className="animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold text-coral mb-2">1M+</div>
                <div className="text-gray-600">Подарков отправлено</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-darkGray mb-6">
            Готов найти <span className="text-coral">любовь</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Присоединяйся к сообществу, где каждый день происходят настоящие чудеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-coral to-purple hover:from-coral/90 hover:to-purple/90 text-white px-8 py-4 text-lg">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать для iOS
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-turquoise to-purple hover:from-turquoise/90 hover:to-purple/90 text-white px-8 py-4 text-lg">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать для Android
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkGray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/img/e526dec5-59a2-4fe8-a462-979b463decd8.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
                <span className="text-xl font-bold">LoveStream</span>
              </div>
              <p className="text-gray-300">
                Современное приложение для знакомств с уникальными возможностями
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Функции</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Знакомства</li>
                <li>Стримы</li>
                <li>Подарки</li>
                <li>События</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Помощь</li>
                <li>Безопасность</li>
                <li>Конфиденциальность</li>
                <li>Условия использования</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-coral cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-300 hover:text-turquoise cursor-pointer" />
                <Icon name="Youtube" size={24} className="text-gray-300 hover:text-purple cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 LoveStream. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;