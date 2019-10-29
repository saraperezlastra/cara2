let mic;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();

}



function draw() {
    background('#B2DAEA');
    noStroke();
    push();
    translate(width / 2, height / 2);
    rectMode(CENTER);

    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 500)




    //cara
    fill('#FFE25F');
    rect(0, -30, width / 2.2, height / 2);
    //huecos d cara
    fill('#D9D000');
    ellipse(width / -7, height / -4.3, width / 18, height / 15);
    fill('#D9D000');
    ellipse(width / -5.4, height / -6, width / 24, height / 21);
    fill('#D9D000');
    ellipse(width / 6, height / -4.3, width / 18, height / 15);
    fill('#D9D000');
    ellipse(width / 7, height / 15, width / 18, height / 15);
    fill('#D9D000');
    ellipse(width / 5.4, height / 8, width / 24, height / 21);
    ellipse(width / -5.5, height / 8, width / 18, height / 15);
    fill('#D9D000');
    ellipse(width / -7.5, height / 15, width / 24, height / 21);




    //pestaña derecha 1
    fill('#000000')
    quad(width / 12 + 40, -170, width / 12 + 55, -165, width / 12 + 35, -100, width / 12 + 15, -80);

    //pestaña derecha 2
    fill('#000000');
    rect(width / 12, (height / -9) - 45, 18, 90);


    //ojo derecho
    fill('#ffffff');
    ellipse(width / 12, height / -9, width / 9 + mov, height / 8 + mov);
    //ojo derecho color
    fill('#87C5FF');
    ellipse(width / 12, height / -9, width / 18 + mov, height / 15 + mov);
    //ojo derecho pupila
    fill('#000000');
    ellipse(width / 12, height / -9, width / 30, height / 25);
    //brillo ojo 1
    fill('#ffffff');
    ellipse(width / 13, height / -8.5, width / 70, height / 60);



    //pestaña iz 1
    fill('#000000')
    quad(width / -12 - 40, -170, width / -12 - 55, -165, width / -12 - 35, -100, width / -12 - 15, -80);

    //pestaña iz 2
    fill('#000000');
    rect(width / -12, (height / -9) - 45, 18, 90);


    //ojo izquierdo
    fill('#ffffff');
    ellipse(width / -12, height / -9, width / 9 + mov, height / 8 + mov);
    //ojo iz color
    fill('#87C5FF');
    ellipse(width / -12, height / -9, width / 18 + mov, height / 15 + mov);
    //ojo iz pupila
    fill('#000000');
    ellipse(width / -12, height / -9, width / 30, height / 25);
    //brillo ojo 2
    fill('#ffffff');
    ellipse(width / -11, height / -8.5, width / 70, height / 60);





    //brazo derecho
    fill('#FFE25F');
    rect(width / 4, (height / 4) - 45, 23, 200 + mov);

    //brazo iz
    fill('#FFE25F');
    rect(width / -4, (height / 4) - 45, 23, 200 + mov);

    //camisa
    fill('#ffffff');
    rect(0, 175, width / 2.2, height / 8);
    fill('#ffffff');
    rect(width / 4, height / 10, width / 19, height / 9 + mov);
    fill('#ffffff');
    rect(width / -4, height / 10, width / 19, height / 9 + mov);


    //corbata
    fill('#EC0000');
    rect(width / 400, height / 4.3, width / 25, height / 9);
    fill('#ffffff');
    rect(width / 35, height / 4.4, width / 30, height / 16);
    fill('#ffffff');
    rect(width / -45, height / 4.4, width / 30, height / 16);



    //pantalones
    fill('#8A3F00');
    rect(0, 250, width / 2.2, height / 7 + mov);
    fill('#8A3F00');
    rect(80, 330, width / 15, height / 10 + mov);
    fill('#8A3F00');
    rect(-80, 330, width / 15, height / 10 + mov);
    

    //cinturon
    fill('#000000');
    rect(width / 250, height / 3.4, width / 10, height / 50);
    fill('#000000');
    rect(width / 7, height / 3.4, width / 10, height / 50);
    fill('#000000');
    rect(width / -7, height / 3.4, width / 10, height / 50);


    //boca
    fill('#410000');
    stroke('#000000');
    strokeWeight(5);
    arc(width / 200, height / 30, 180 + mov, 160 + mov, radians(1), radians(180));

    //fondo boca
    noStroke();
    fill('#000000')
    ellipse(width / 200, height / 9.5, 100 + mov, 70)

    //lengua
    noStroke();
    fill('#FFD0E3');
    arc(width / 200, height / 7, 80 + mov, 60 + mov, radians(190), radians(350));


    //dientes
    noStroke();
    fill('#ffffff');
    rect(width / 30, height / 20, width / 35, height / 29);

    noStroke();
    fill('#ffffff');
    rect(width / -40, height / 20, width / 35, height / 29);

    //nariz
    noFill();
    stroke('#000000');
    strokeWeight(5);
    arc(width / 200, height / -300, 40, 70, radians(210), radians(330));

}

pop()

function touchStarted() {
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
