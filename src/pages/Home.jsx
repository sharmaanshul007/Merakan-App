import React, { useState } from 'react'
import Sidebarcategory from '../components/Sidebar'
import Listing from '../components/Listing'
const Home = () => { 

  const allProducts = [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 99.99,
      "image": "https://via.placeholder.com/200",
      "description": "These high-quality wireless headphones are designed to provide superior sound with advanced noise-cancellation technology. Whether you're working, exercising, or traveling, they offer a distraction-free listening experience. The headphones feature comfortable over-ear cushions, long-lasting battery life, and Bluetooth connectivity for easy pairing with your devices. With a sleek and stylish design, these headphones are perfect for anyone who values both performance and style. The intuitive controls allow you to adjust volume, skip tracks, and take calls with ease. Whether you're a music lover, gamer, or podcast enthusiast, these wireless headphones are a must-have accessory."
    },
    {
      "id": 2,
      "name": "Smart Watch",
      "category": "Electronics",
      "price": 199.99,
      "image": "https://via.placeholder.com/200",
      "description": "Stay connected on the go with this stylish and functional smart watch. Equipped with a variety of health and fitness tracking features, including heart rate monitoring, step counting, and sleep tracking, it’s the perfect companion for an active lifestyle. The watch syncs seamlessly with your smartphone, allowing you to receive notifications, answer calls, and track your progress without having to pull out your phone. With a sleek design, customizable straps, and a large, vibrant display, it offers both practicality and style. Whether you’re at the gym, at work, or running errands, this smart watch helps you stay on top of your schedule while maintaining a fashionable look."
    },
    {
      "id": 3,
      "name": "LED Television",
      "category": "Electronics",
      "price": 399.99,
      "image": "https://via.placeholder.com/200",
      "description": "Upgrade your home entertainment experience with this 50-inch LED television. With crystal-clear picture quality and vibrant colors, this TV is perfect for movie nights, gaming, or watching your favorite shows. Equipped with smart TV functionality, it allows you to stream content from platforms like Netflix, Hulu, and YouTube. The sleek design and thin bezel provide a modern look, while the built-in speakers deliver powerful sound. Whether you're watching in HD or 4K, this television brings your content to life with exceptional clarity and detail."
    },
    {
      "id": 4,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "image": "https://via.placeholder.com/200",
      "description": "Take your music wherever you go with this portable Bluetooth speaker. Designed for outdoor use, it features a rugged, waterproof exterior that can withstand splashes, rain, and dust. The speaker offers high-quality sound with deep bass and clear highs, ensuring a great listening experience no matter the environment. With Bluetooth 5.0 technology, it pairs easily with your smartphone, tablet, or laptop, providing wireless connectivity up to 100 feet. The built-in rechargeable battery provides hours of uninterrupted playtime, making it the perfect companion for outdoor adventures, beach days, or backyard parties."
    },
    {
      "id": 5,
      "name": "Gaming Laptop",
      "category": "Electronics",
      "price": 1499.99,
      "image": "https://via.placeholder.com/200",
      "description": "This high-performance gaming laptop is designed for serious gamers who demand the best. Powered by an Intel i7 processor and equipped with an NVIDIA RTX graphics card, it delivers smooth gameplay, even on the most demanding games. The 16GB of RAM and fast SSD storage ensure quick loading times and seamless multitasking. The 15.6-inch full HD display offers stunning visuals with high refresh rates, while the RGB backlit keyboard provides an immersive gaming experience. Whether you're playing AAA titles, streaming, or working, this laptop offers the power and performance you need."
    },
    {
      "id": 6,
      "name": "Leather Jacket",
      "category": "Fashion",
      "price": 199.99,
      "image": "https://via.placeholder.com/200",
      "description": "Made from premium quality leather, this jacket is both stylish and durable. The sleek design features a classic biker style with a zip-up front, multiple pockets, and a comfortable fit. Perfect for both casual and semi-formal occasions, it’s versatile enough to pair with jeans, chinos, or dress pants. The soft inner lining ensures comfort, while the high-quality leather ages beautifully, developing a rich patina over time. Whether you're heading out for a night on the town or just want to add an edgy touch to your outfit, this leather jacket is a must-have."
    },
    {
      "id": 7,
      "name": "T-Shirt",
      "category": "Fashion",
      "price": 29.99,
      "image": "https://via.placeholder.com/200",
      "description": "This classic t-shirt is made from 100% cotton, ensuring softness and comfort all day long. It features a simple yet stylish design with a crew neckline and short sleeves, making it the perfect piece for layering or wearing on its own. Available in a variety of colors, it’s easy to pair with jeans, shorts, or leggings for a casual, laid-back look. The durable fabric holds up well after multiple washes, maintaining its shape and color. Whether you're lounging at home, going for a run, or out with friends, this t-shirt is a versatile wardrobe essential."
    },
    {
      "id": 8,
      "name": "Denim Jeans",
      "category": "Fashion",
      "price": 49.99,
      "image": "https://via.placeholder.com/200",
      "description": "These classic denim jeans are a wardrobe staple for any casual occasion. Crafted from high-quality denim, they provide a comfortable and flattering fit, with just the right amount of stretch for all-day wear. The slim-fit design is both modern and versatile, pairing well with t-shirts, shirts, and jackets. The jeans feature a traditional five-pocket design, with reinforced stitching and sturdy zippers for durability. Whether you're dressing up for a casual outing or dressing down for a laid-back day, these denim jeans are the perfect choice."
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 89.99,
      "image": "https://via.placeholder.com/200",
      "description": "These stylish sunglasses provide the perfect balance of fashion and function. With UV400 protection, they shield your eyes from harmful UV rays while keeping you looking sharp. The lightweight frame ensures comfort, while the classic design suits a variety of face shapes. Available in several lens colors, including polarized options, these sunglasses are ideal for outdoor activities, driving, or just adding a touch of flair to your everyday outfit. Whether you're heading to the beach or strolling through the city, these sunglasses are a must-have accessory."
    },
    {
      "id": 10,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 79.99,
      "image": "https://via.placeholder.com/200",
      "description": "These running shoes are designed for maximum comfort and performance. Featuring a breathable mesh upper, cushioned midsole, and flexible sole, they provide a lightweight, supportive fit for every stride. Whether you're running long distances, training for a race, or just enjoying a jog, these shoes will help you perform at your best. The durable outsole provides traction on a variety of surfaces, ensuring stability and grip. Available in a range of sizes and colors, they’re the perfect addition to any athlete’s wardrobe."
    },
    {
      "id": 11,
      "name": "Air Purifier",
      "category": "Appliances",
      "price": 149.99,
      "image": "https://via.placeholder.com/200",
      "description": "Breathe cleaner air with this advanced air purifier. Equipped with a HEPA filter, it captures up to 99.97% of airborne particles, including dust, pollen, pet dander, and smoke. The multi-stage filtration system also includes activated carbon to eliminate odors, leaving your home smelling fresh and clean. With a modern, sleek design, this air purifier fits seamlessly into any room, and the quiet operation ensures it won’t disturb your daily activities. Ideal for people with allergies, asthma, or those living in areas with high pollution levels, this air purifier helps improve indoor air quality and create a healthier living environment."
    },
    {
      "id": 12,
      "name": "Coffee Maker",
      "category": "Appliances",
      "price": 79.99,
      "image": "https://via.placeholder.com/200",
      "description": "Start your day right with this high-quality coffee maker. Featuring a programmable timer, it allows you to wake up to fresh, brewed coffee every morning. The machine is compatible with ground coffee or pods, offering versatility depending on your preference. The sleek, modern design fits into any kitchen, and the large water reservoir means fewer refills throughout the day. With multiple brewing strength settings, it lets you customize your coffee just the way you like it. Whether you prefer a strong espresso or a smooth cup of joe, this coffee maker delivers every time."
    },
    {
      "id": 13,
      "name": "Blender",
      "category": "Appliances",
      "price": 59.99,
      "image": "https://via.placeholder.com/200",
      "description": "This powerful blender is perfect for smoothies, soups, sauces, and more. Equipped with a 500-watt motor, it effortlessly blends fruits, vegetables, and ice to create smooth, creamy textures. The stainless steel blades ensure durability and long-lasting performance. The easy-to-clean design makes it convenient to use every day, and the compact size ensures it fits in any kitchen without taking up too much space. Whether you're preparing a quick breakfast or creating gourmet meals, this blender is a versatile and reliable kitchen appliance."
    },
    {
      "id": 14,
      "name": "Refrigerator",
      "category": "Appliances",
      "price": 899.99,
      "image": "https://via.placeholder.com/200",
      "description": "This modern refrigerator offers ample storage space and a range of convenient features to keep your food fresh. With adjustable shelves and door compartments, you can easily organize your groceries. The energy-efficient design helps reduce electricity consumption, while the built-in ice maker provides fresh ice on demand. The sleek stainless steel finish adds a contemporary look to your kitchen, and the quiet operation ensures that it won't disrupt your daily activities. Whether you're storing fresh produce, leftovers, or frozen goods, this refrigerator provides the perfect solution for your home."
    },
    {
      "id": 15,
      "name": "Microwave Oven",
      "category": "Appliances",
      "price": 129.99,
      "image": "https://via.placeholder.com/200",
      "description": "This versatile microwave oven is designed to make cooking and reheating easier than ever. With a variety of preset functions, including popcorn, defrost, and reheat, it offers convenience at the touch of a button. The spacious interior can accommodate larger dishes, while the sleek exterior adds a modern touch to your kitchen. The microwave's energy-efficient design ensures quick cooking times without compromising on power. Whether you're preparing a quick snack or cooking a full meal, this microwave oven is a reliable addition to your kitchen."
    },
    {
      "id": 16,
      "name": "Smart Thermostat",
      "category": "Appliances",
      "price": 119.99,
      "image": "https://via.placeholder.com/200",
      "description": "Control the temperature of your home from anywhere with this smart thermostat. With Wi-Fi connectivity and compatibility with voice assistants like Alexa and Google Assistant, you can easily adjust your home’s climate using your smartphone or voice commands. The energy-efficient design helps reduce heating and cooling costs by learning your preferences and adjusting automatically. The sleek touchscreen display makes it easy to set and monitor temperatures, while the modern design blends seamlessly with any home decor. Ideal for anyone looking to save energy and improve comfort, this smart thermostat is a must-have for the modern home."
    },
    {
      "id": 17,
      "name": "Portable Heater",
      "category": "Appliances",
      "price": 69.99,
      "image": "https://via.placeholder.com/200",
      "description": "This portable heater is perfect for keeping your space warm and cozy during the colder months. With adjustable heat settings and an energy-efficient design, it provides quick warmth without running up your electricity bill. The compact size allows it to fit easily in any room, and the built-in safety features, including overheat protection, give you peace of mind. Whether you're using it in your office, bedroom, or living room, this portable heater delivers reliable performance and comfort whenever you need it."
    },
    {
      "id": 18,
      "name": "Electric Kettle",
      "category": "Appliances",
      "price": 39.99,
      "image": "https://via.placeholder.com/200",
      "description": "Boil water quickly and efficiently with this sleek electric kettle. Featuring a rapid-boil function, it heats water in just a few minutes, saving you time and energy. The ergonomic handle and cordless design make it easy to pour, while the automatic shut-off feature ensures safety once the water reaches the boiling point. With a large capacity, it's perfect for making tea, coffee, or instant soups. The modern design and stainless steel body add a touch of elegance to your kitchen, making this kettle a must-have for any home."
    },
    {
      "id": 19,
      "name": "Cordless Vacuum Cleaner",
      "category": "Appliances",
      "price": 199.99,
      "image": "https://via.placeholder.com/200",
      "description": "This cordless vacuum cleaner offers powerful suction and a lightweight design, making it ideal for cleaning floors, carpets, and upholstery. With a long battery life, you can clean your entire home without needing to recharge. The detachable handheld unit allows for easy spot cleaning and above-floor vacuuming, while the HEPA filter captures dust and allergens, improving indoor air quality. Whether you’re cleaning up after pets or tackling everyday messes, this vacuum cleaner provides a convenient, efficient cleaning solution."
    },
    {
      "id": 20,
      "name": "Dishwasher",
      "category": "Appliances",
      "price": 499.99,
      "image": "https://via.placeholder.com/200",
      "description": "This efficient dishwasher is designed to save you time and energy while providing sparkling clean dishes. With multiple wash cycles and adjustable racks, it accommodates everything from delicate glassware to heavy-duty pots and pans. The quiet operation ensures it won’t disturb your household, and the energy-efficient design reduces your utility bills. The sleek stainless steel exterior adds a modern touch to your kitchen, and the intuitive controls make it easy to select the right cycle for your needs. Whether you're cleaning a small load or a full set of dinnerware, this dishwasher ensures that your dishes come out clean and ready to use."
    }
  ]
  
  const allCategories = ["Electronics","Fashion","Appliances"]


  return (<div className='flex md:flex-row flex-col justify-between '>
    <Sidebarcategory allCategories={allCategories}></Sidebarcategory>
    <Listing></Listing>
  </div>
  )
}

export default Home
