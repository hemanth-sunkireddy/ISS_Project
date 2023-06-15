
from flask import Flask, render_template, request, json
from flask import redirect

import sqlite3 



app = Flask(__name__)


def create_table():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS songs
             (id INTEGER PRIMARY KEY,
              name TEXT,
              duration TEXT)''')
    conn.commit()
    conn.close()

create_table()

@app.route('/add_to_database', methods=['POST', 'GET'])
def add_to_database():
    if request.method=="POST":
        name=request.json['name']
        duration=request.json['song_duration']
        conn = sqlite3.connect('example.db')
        c = conn.cursor()
        c.execute("SELECT * FROM songs WHERE name=?", (name,))
        name_exist=c.fetchall()
        if not name_exist:
            c.execute("INSERT INTO songs (name, duration) VALUES (?, ?)", (name, duration))
            conn.commit()
            return render_template('/playlist.html', message="Song added to playlist successfully")

        else:
            print("Already added")
        conn.close()
 
    return render_template('/playlist.html')

@app.route('/playlist.html')
def show_playlist():
    conn = sqlite3.connect('example.db')
    c = conn.cursor()
    songs_list=c.execute("SELECT * FROM songs")
    print(type(songs_list))
    return render_template('playlist.html', message=songs_list) 


@app.route('/remove_from_database', methods=['POST', 'GET'])
def remove_song():
    if request.method == "POST":
                
       # retrieves the value of the "song_name" key as a string
        name = request.json["name"]
        print(type(name))
        conn=sqlite3.connect('example.db')
        c=conn.cursor()
        print(name)
        c.execute("SELECT * FROM songs WHERE name='{}'".format(name))
        songs_list=c.fetchall()
        print(songs_list)
        c.execute("DELETE FROM songs WHERE name = ?", (name,))    
        conn.commit()
        conn.close()
        return redirect('playlist.html')



@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/arijit-singh-01.html')
def arijit_1():
    return render_template('arijit-singh-01.html')


@app.route('/arijit-singh-02.html')
def arijit_2():
    return render_template('arijit-singh-02.html')


@app.route('/arijit-singh-03.html')
def arijit_3():
    return render_template('arijit-singh-03.html')


@app.route('/arijit-singh-04.html')
def arijit_4():
    return render_template('arijit-singh-04.html')


@app.route('/arijit-singh-05.html')
def arijit_5():
    return render_template('arijit-singh-05.html')


@app.route('/arijit-singh-06.html')
def arijit_6():
    return render_template('arijit-singh-06.html')


@app.route('/arijit-singh.html')
def arijit():
    return render_template('arijit-singh.html')

@app.route('/artists.html')
def artists_page():
    return render_template('artists.html')


@app.route('/about.html')
def about():
    return render_template('about.html')


@app.route('/ed-sheeran-01.html')
def ed_1():
    return render_template('ed-sheeran-01.html')


@app.route('/ed-sheeran-02.html')
def ed_2():
    return render_template('ed-sheeran-02.html')


@app.route('/ed-sheeran-03.html')
def ed_3():
    return render_template('ed-sheeran-03.html')


@app.route('/ed-sheeran-04.html')
def ed_4():
    return render_template('ed-sheeran-04.html')


@app.route('/ed-sheeran-05.html')
def ed_5():
    return render_template('ed-sheeran-05.html')


@app.route('/ed-sheeran-06.html')
def ed_6():
    return render_template('ed-sheeran-06.html')



@app.route('/ed-sheeran.html')
def ed():
    return render_template('ed-sheeran.html')


@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/lata-mangeshkar-01.html')
def lata_1():
    return render_template('lata-mangeshkar-01.html')


@app.route('/lata-mangeshkar-02.html')
def lata_2():
    return render_template('lata-mangeshkar-02.html')


@app.route('/lata-mangeshkar-03.html')
def lata_3():
    return render_template('lata-mangeshkar-03.html')


@app.route('/lata-mangeshkar-04.html')
def lata_4():
    return render_template('lata-mangeshkar-04.html')


@app.route('/lata-mangeshkar-05.html')
def lata_5():
    return render_template('lata-mangeshkar-05.html')


@app.route('/lata-mangeshkar-06.html')
def lata_6():
    return render_template('lata-mangeshkar-06.html')


@app.route('/lata-mangeshkar.html')
def lata():
    return render_template('lata-mangeshkar.html')


@app.route('/searchpage.html')
def search():
    return render_template('searchpage.html')


@app.route('/shreya-ghoshal-01.html')
def shreya_1():
    return render_template('shreya-ghoshal-01.html')


@app.route('/shreya-ghoshal-02.html')
def shreya_2():
    return render_template('shreya-ghoshal-02.html')


@app.route('/shreya-ghoshal-03.html')
def shreya_3():
    return render_template('shreya-ghoshal-03.html')


@app.route('/shreya-ghoshal-04.html')
def shreya_4():
    return render_template('shreya-ghoshal-04.html')


@app.route('/shreya-ghoshal-05.html')
def shreya_5():
    return render_template('shreya-ghoshal-05.html')


@app.route('/shreya-ghoshal-06.html')
def shreya_6():
    return render_template('shreya-ghoshal-06.html')


@app.route('/shreya-ghoshal.html')
def shreya():
    return render_template('shreya-ghoshal.html')


@app.route('/sp-balu-01.html')
def balu_1():
    return render_template('sp-balu-01.html')


@app.route('/sp-balu-02.html')
def balu_2():
    return render_template('sp-balu-02.html')


@app.route('/sp-balu-03.html')
def balu_3():
    return render_template('sp-balu-03.html')


@app.route('/sp-balu-04.html')
def balu_4():
    return render_template('sp-balu-04.html')


@app.route('/sp-balu-05.html')
def balu_5():
    return render_template('sp-balu-05.html')


@app.route('/sp-balu-06.html')
def balu_6():
    return render_template('sp-balu-06.html')


@app.route('/sp-balu.html')
def balu():
    return render_template('sp-balu.html')

@app.route('/spotLight.html')
def spotlight():
    return render_template('spotLight.html')




@app.route('/submit_data', methods=['POST', 'GET'])
def submit_data():
    if request.method == "POST":
        return "HELLO"



if __name__ == '__main__':
    app.run(debug=True)
    