const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // Кто родился в 1500-х

    // Применяет условие к каждому элементу, если true - элемент проходит

    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) );

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    // Массив имен ученых

    // Перебирает элементы, применяет функцию к каждому, и возвращает их

    const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // Кто раньше родился

    // Перебирает массив и сортирует их (по-умолчанию по символам unicode), можно задать функцию сортировки, которая возвращает 1, -1, или 0
    // Функция принимает два параметра a и b, и сортирует их: 1 - у элема индекс ниже, -1 - у элема индекс выше, 0 - индекс не изменин

    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    // Сколько прожитых лет в сумме

    // Сложно объяснить лучше доку почитать, но если в двух словах, метод берет значение одного элемента и второго элемента, выполняет над
    // ними фунцию, затем получившийся результат использует со значением третьего элемента, и т.д. как только он доходит до конца
    // он возвращает получившийся результат
    // второго аргумент метода reduce это значение по умолчанию, оно при первой интерации присваевается аргументу 'a', при переборе массива
    // объектов он необходим, в остальных случаях аргументу 'a' будет присвоено значение первого элемента

    const totalYears = inventors.reduce((a, b) => a + (b.passed - b.year), 0);



    // 5. Sort the inventors by years lived
    // Сортировка кто дольше прожил

    const oldest = inventors.sort(function(a,b){
    	const lastGuy = a.passed - a.year;
    	const nextGuy = b.passed - b.year;

    	return lastGuy > nextGuy ? -1 : 1;
    });
    console.table(oldest)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // Создать массив бульваров в Париже, которые содержат «де» в любом месте имени

    // Код писать на странице
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // const category = document.querySelector('.mw-category');
    // const links = category.querySelectorAll('a');
    // const arrayLinks = [...links];

    // // Or Array.from(links);

    // const de = arrayLinks
    // 				.map(link => link.textContent)
    // 				.filter(streetName => streetName.includes('de'));


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    // Сортировать людей в алфавитном порядке

    const alpha = people.sort(function(lastOne, nextOne){
    	const [aLast, aFirst] = lastOne.split(', ')
    	const [bLast, bFirst] = nextOne.split(', ')

    	return aLast > bLast ? 1 : -1;
    });

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    // Подсчет сколько раз элемент встречается в массиве
    // obj = {}, если в массиве нет item он создается, затем obj[item]++

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const transportation = data.reduce(function(obj, item){
    	if(!obj[item]){
    		obj[item] = 0;
    	}
    	obj[item]++;
    	return obj;
    }, {})

    console.log(transportation);