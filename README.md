

# **Working repository for the Internet Music Database website:**

### About the project-

    To design a web portal for an Internet Music Database that contains information about various artists, albums, and songs, with features like search, the ability to rate songs and 	view existing ratings, to comment on songs and view existing comments, etc.

#### How to test the website locally:

##### Summary:

1. Create an account on github if you don’t already have one.
2. Clone to computer ( git clone https://github.com/CS6-201-ISS-S23/project-mini_flow.git )
3. Don’t forget to cd into your repo: (cd project_mini_flow/ )
4. Run app.py from terminal, you will enter to index.html(home page).
5. In home you can see top artist, top songs, top albums, and also navigation bar. click on the icons to enter specific page(of top artist,songs,and albums), and use navigation bar for going to other pages(likes artist page, spotlight page, playist page, search page, home page, about page).
6. In artist page you can get albums of particular artist, on clicking particular album you can get songs of that album and you will have an add to playlist option beside each song to add your favorite songs to the playist.
7. In spotlight page you will get update of top artist( i.e upcoming song of top artist), and you will have option to give review to the artist and you can alsp see the past reviews.
8. In playist page you can see all your favorite songs which you have add to the playlist, and you will have remove option beside each song to remove the song from the playlist.
9. In search page you can search you can search your favorite songs.
10. In about us page you can know the page and also know about us.

team meambers:

hemanth sunkireddy:
github id: hemanth-sunkireddy

Gajawada Bharath:
github id: bharath-gajawada.
```
.
├── app.py
├── example.db
├── README.md
├── static
│   ├── css
│   │   ├── about.css
│   │   ├── albums.css
│   │   ├── all-artist-page.css
│   │   ├── artists.css
│   │   └── index.css
│   ├── images
│   │   ├── album-images
│   │   │   ├── arijit-singh-album
│   │   │   │   ├── chander-pahar.jpeg
│   │   │   │   ├── chokher-bahire.jpeg
│   │   │   │   ├── golop-holeo-sotti.jpeg
│   │   │   │   ├── khaad.jpeg
│   │   │   │   ├── pagglait.jpeg
│   │   │   │   └── shudhu-tomari-jonyo.jpeg
│   │   │   ├── ed-sheeran-album
│   │   │   │   ├── all-of-the-stars.png
│   │   │   │   ├── castle-on-the-hill.png
│   │   │   │   ├── divide.png
│   │   │   │   ├── Ed Sheeran_2.png
│   │   │   │   ├── plus.png
│   │   │   │   └── x.png
│   │   │   ├── lata-mangeshkar-album
│   │   │   │   ├── diamonds.jpeg
│   │   │   │   ├── jaadgi.jpg
│   │   │   │   ├── jagraata.jpg
│   │   │   │   ├── meera-bajans.jpeg
│   │   │   │   ├── saare-jahan-se-acchhha.jpg
│   │   │   │   └── safar.jpeg
│   │   │   ├── shreya-ghoshal-album
│   │   │   │   ├── banomali-re.jpg
│   │   │   │   ├── bendhechhi-beena.jpg
│   │   │   │   ├── humnasheen-ghazals.jpg
│   │   │   │   ├── hum-tum.jpg
│   │   │   │   ├── mukhor-porag.jpg
│   │   │   │   └── rupasi-raate.jpg
│   │   │   └── sp-balu-album
│   │   │       ├── bakthi-majari.jpg
│   │   │       ├── love-struck.jpg
│   │   │       ├── pranamami-gananayakam.jpg
│   │   │       ├── saibaba-mahatyam.jpg
│   │   │       ├── sangeetha-uttsavam.jpeg
│   │   │       └── shivarpanam.jpg
│   │   ├── artist-images
│   │   │   ├── arijit-singh.png
│   │   │   ├── ed-sheeran.jpg
│   │   │   ├── Lata-Mangeshkar.jpg
│   │   │   ├── shreya-ghoshal.jpg
│   │   │   └── sp-balu.jpeg
│   │   ├── home_page_background_1.jpg
│   │   ├── home_page_background.jpg
│   │   ├── other_pages_background.jpg
│   │   └── web-creator-images
│   │       ├── bharath.jpeg
│   │       └── hemanth-kumar-reddy.jpeg
│   ├── js
│   │   ├── playlist.js
│   │   ├── searchpage.js
│   │   ├── spotLight.js
│   │   └── typing_effect.js
│   └── logo-images
│       ├── Facebook.png
│       ├── Instagram.png
│       ├── Linkedin.png
│       ├── Music.png
│       ├── Twitter.png
│       └── Web_logo.jpeg
└── templates
    ├── about.html
    ├── arijit-singh-01.html
    ├── arijit-singh-02.html
    ├── arijit-singh-03.html
    ├── arijit-singh-04.html
    ├── arijit-singh-05.html
    ├── arijit-singh-06.html
    ├── arijit-singh.html
    ├── artists.html
    ├── ed-sheeran-01.html
    ├── ed-sheeran-02.html
    ├── ed-sheeran-03.html
    ├── ed-sheeran-04.html
    ├── ed-sheeran-05.html
    ├── ed-sheeran-06.html
    ├── ed-sheeran.html
    ├── index.html
    ├── lata-mangeshkar-01.html
    ├── lata-mangeshkar-02.html
    ├── lata-mangeshkar-03.html
    ├── lata-mangeshkar-04.html
    ├── lata-mangeshkar-05.html
    ├── lata-mangeshkar-06.html
    ├── lata-mangeshkar.html
    ├── playlist.html
    ├── searchpage.html
    ├── shreya-ghoshal-01.html
    ├── shreya-ghoshal-02.html
    ├── shreya-ghoshal-03.html
    ├── shreya-ghoshal-04.html
    ├── shreya-ghoshal-05.html
    ├── shreya-ghoshal-06.html
    ├── shreya-ghoshal.html
    ├── sp-balu-01.html
    ├── sp-balu-02.html
    ├── sp-balu-03.html
    ├── sp-balu-04.html
    ├── sp-balu-05.html
    ├── sp-balu-06.html
    ├── sp-balu.html
    └── spotLight.html
    ```

14 directories, 99 files
