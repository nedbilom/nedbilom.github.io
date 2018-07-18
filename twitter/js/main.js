$(document).ready(function(){
	// Дата
	var getDate = function() {
		var d = new Date(),
			hrs = d.getHours(),
			min = d.getMinutes(),
			day = d.getDate(),
			month = d.getMonth(),
			year = d.getFullYear();

		var monthArray = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря");
		var actualDate = `${day} ${monthArray[month]} ${year} года`;
		return actualDate;
	}

	var countTweets = function(){
		var tweetCounter = $(".tweet-card").length;
		$('#tweetsCounter').text(tweetCounter);
	}



	// Создание твита
	var createTweet = function(date, text){
		var $tweetBox = $('<div class="card tweet-card">'); // Создаем обертку для твита
		var $tweetDate = $('<div class="tweet-date">').text(date); // Создаем дату
		var $tweetText = $('<div class="tweet-text">').text(text).wrapInner('<p></p>'); // Создаем контент с Твитом


		var additionalClassName;
		if ( text.length < 100) {
			additionalClassName = 'font-size-large';
		} else if ( text.length > 150) {
			additionalClassName = 'font-size-small';
		} else {
			additionalClassName = 'font-size-normal';
		}
		$tweetText.addClass(additionalClassName);

		$tweetBox.append($tweetDate).append($tweetText); // Получаем разметку Твита с датой и текстом Твита
		$('#tweetsList').prepend($tweetBox);
	 	countTweets();
	}

		var tweetsBase = [ 
		{
			date: '14  августа 2017 г.',
			text: 'ЧИКА ЧИКА ЧИКА ЧИКА'
		},
		{
			date: '13 августа 2017 г.',
			text: 'Че за тупые псевдонимы нынч'
		},
		{
			date: '11 июля 2017 г.',
			text: 'Я 2 часа тупо ее слушал, мне даже рофлянку вставить негде было, еще и в хату не пустила, говорит выселят если соседка грымза наступит что она кого то привела, короче впизду школьницу окончательно'
		},
		{
			date: '28 фереля 2017 г.',
			text: 'Ващеееее такое не гостеприимное поколение ростет.'
		}
	 ];

	 tweetsBase.forEach( function(tweet){
	 	//console.log(tweet.date);
	 	//console.log(tweet.text);
	 	createTweet(tweet.date, tweet.text);
	 })


	// Форма отправки Твитта
		$('#postNewTweet').on('submit', function(e){
			e.preventDefault(); // Отменяем отправку формы
			var tweetText = $('#tweetText').val(); // Получаем текст твита = Привет мир!
			createTweet( getDate(), tweetText);

			$('#tweetText').val('');

		});



});