function Calendar(input) {
    this.now = new Date();
    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.year = this.now.getFullYear();

    this.input = input;
    this.divCnt = null;
    this.divHeader = null;
    this.divTable = null;
    this.divDateText = null;
    this.divButtons = null;

    this.toggleShow = function () {
        this.divCnt.classList.toggle('calendar-show');
    }

    this.show = function () {
        this.divCnt.classList.add('calendar-show');
    }

    this.hide = function () {
        this.divCnt.classList.remove('calendar-show');
        this.createDateText = function () {
            const monthNames = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];

            this.divDateText.innerHTML = monthNames[this.month] + ' ' + this.year;
        };

    }
    this.init = function () {

        //dodanie klasy input-calendar dla kalendarza
        this.input.classList.add('input-calendar');

        //dodanie div kontenera dla kalendarza
        this.divCnt = document.createElement('div');
        this.divCnt.classList.add('calendar');

        //dodanie przycisków prev next
        this.divButtons = document.createElement('div');
        this.divButtons.className = "calendar-prev-next";


        //tworzenie diva z nazwa miesiaca i roku 
        this.divDateText = document.createElement('div');
        this.divDateText.classList = 'date-name';
        this.createDateText();

        this.divHeader = document.createElement('div');
        this.divHeader.classList.add('calendar-header');

        this.divHeader.appendChild(this.divButtons);
        this.divHeader.appendChild(this.divDateText);
        this.divCnt.appendChild(this.divHeader);

        this.divTable = document.createElement('div');
        this.divTable.className = 'calendar-table-cnt';
        this.divCnt.appendChild(this.divTable);

        this.calendarWrapper = document.createElement('div');
        this.calendarWrapper.classList.add('input-calendar-cnt');
        this.input.parentElement.insertBefore(this.calendarWrapper, this.input);
        this.calendarWrapper.appendChild(this.input);

        this.input.addEventListener('click', function (e) {
            this.divCnt.classList.toggle('calendar-show');
            this.toggleShow();
        }.bind(this));

        this.input.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
        });

        this.divCnt.addEventListener('click', function (e) {
            e.stopImmediatePropagation();
        });

        document.addEventListener('click', function () {
            this.hide();
        }.bind(this));
    }

    const myinp = document.querySelector(".input");
    const calend  = new Calendar(myinp);
    calend.init();
}