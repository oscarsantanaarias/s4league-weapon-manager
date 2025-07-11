    
function MakePlasmaSwordDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Plasma ID not defined at Make Plasma Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Plasma Sword'}" spa="${ItemName || 'Plasma Sword'}"/>`,

        TipDesc: `<string key="TIP${DescID}" eng="Close range weapon with plasma cracker installed. It deals high damage and allows you to use the sprint ability and stun several enemies with a jump attack." spa="Arma de corto alcance con plasma cracker instalado. La función es daño grave y habilidad sprint también aturde a varios enemigos con el jump attack" ita="Arma a distanza ravvicinata con un plasma cracker. Provoca un ingente danno, permette lo sprint e stordisce molti nemici durante il salto." />`
    }
 
}

function MakeCounterSwordDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Counter Sword ID not defined at Make Counter Sword Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Counter Sword'}" spa="${ItemName || 'Counter Sword'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="근접 무기의 공격을 가드해 공격 찬스를 만드는 무기." ger="Eine Waffe, die dir zusatzliche Angriffsmoglichkeiten bietet, indem sie Angriffe von Nahkampfwaffen abwehrt." eng="Weapon that increases attack chance by guarding the attack of an enemy using a close range weapon" tur="Yakın mesafe silahı kullanan bir düşmanın saldırısını savunarak saldırı şansını arttıran bir silah" fre="Arma que realiza ataques defendiendo el ataque de arma de corta distancia" spa="Arma que realiza ataques defendiendo el{N}ataque de arma de corta distancia" ita="Arma con cui attaccare e difendersi{N}dai colpi delle armi a distanza ravvicinata" rus="Универсальный меч для блокировки{N}атак холодного оружия." ame="Weapon that increases attack chance by guarding the attack of an enemy using a close range weapon{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Weak attack.{N}Hold left mouse button: Strong attack.{N}Click left mouse button while jumping: Hack down.{N}Hold right mouse button: Guard.{N}Left click while holding right button: Counter attack." cns="保护自身不被近战武器攻击，并通过防御来创造攻击机会的武器。" tha="อาวุธที่เพิ่มโอกาสโจมตี โดยช่วยป้องกันการโจมตีของศัตรูไปด้วยอาวุธระยะประชิด {N}{CB-0,255,0,255}[Operation]{N}กดปุ่มเมาส์ซ้าย: Weak attack.{N}Hold left mouse button: Strong attack.{N}กดปุ่มเมาส์ซ้าย while jumping: Hack down.{N}Hold right mouse button: Guard.{N}Left click while holding right button: Counter attack." twn="防衛近距離武器的攻擊，同時可製造攻擊機會的武器。" jap="近接武器の攻撃をガードし、攻撃チャンスを作る事ができる武器。" idn="Senjata yang meningkatkan kemungkinan serangan dengan menangkis serangan musuh dengan menggunakan senjata melee."/>`
    }

}


function MakeBatDesc(NameID, DescID, ItemName){
    if(!NameID || !DescID || !ItemName){
    console.error('Storm Bat ID not defined at Make Storm Bat Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Storm Bat'}" spa="${ItemName || 'Storm Bat'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="야구 배트의 타격 기능을 강화하여 대전에  적합하게 튜닝한 근거리 무기. 강력한 스윙 대미지가 동반된 회전 공격이 특징이다." ger="Eine getunte Nahkampfwaffe mit der verstarkten Schlagfunktion eines Baseballschlagers. Mit dem Storm Bat kannst du starke Schwungattacken ausfuhren." eng="Tuned close range weapon with the strength of a baseball bat. It features a spin attack for extra damage to nearby opponents." tur="Bir beyzbol sopasının gücüne sahip ayarlı yakın mesafe silahı. Yakındaki rakiplere ekstra hasar vermek için spin saldırısı da vardır." fre="Arme de combat rapproché customisée avec la puissance de frappe d'une batte de baseball. La fonction principale est l'attaque tourbillon qui fait de gros dégâts" spa="Arma sincronizada de corto alcance con la función de intensificar el poder de golpe de un bate de baseball. La función es spin attack con graves daños." ita="Precisa arma a distanza ravvicinata con un potente attacco. La sua peculiarità è lo spin attack." rus="Мечта бейсболиста стала грозным оружием в S4 League. Особенность этой биты - сильные удары во вращении." ame="Tuned close range weapon with the strength of a baseball bat. It features a spin attack for extra damage to nearby opponents.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Strong attack.{N}Click left mouse button while jumping: Hack down.{N}Click right mouse button: Spin attack." cns="通过强力的挥棒动作来攻击敌人的近战武器，还可以发动旋转攻击。" tha="Tuned close range weapon with the strength of a baseball bat. It features a spin attack for extra damage to nearby opponents.{N}{CB-0,255,0,255}[Operation]{N}กดปุ่มเมาส์ซ้าย: Strong attack.{N}กดปุ่มเมาส์ซ้าย while jumping: Hack down.{N}กดปุ่มเมาส์ขวา: Spin attack." twn="強化棒球球棒的打擊功能，是能夠適當地在對戰中進行調整的近距離武器，會伴隨強烈的晃動傷害為其攻擊特徵。" jap="野球バットの打撃機能を強化し、対戦で活躍できるようにチューニングされた近接武器。強力なスイングダメージを伴う回転攻撃が特徴だ。" idn="Senjata melee dengan kekuatan pemukul baseball. Menampilkan serangan berputar untuk kerusakan tambahan pada musuh didekatmu."/>`
    }

}




function MakeDaggerDesc(NameID, DescID, ItemName){
    if(!NameID || !DescID || !ItemName){
    console.error('Spy Dagger ID not defined at Make Spy Dagger Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Spy Dagger'}" spa="${ItemName || 'Spy Dagger'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="강력한 근접 대미지와 기동력을 자랑하는 기습용 근접무기. 착용 시 캐릭터의 움직임이 더욱 빠르고 민첩해진다." ger="Die ultimative Hochgeschwindigkeits melee waffe. Macht deine Bewegungen schneller." eng="The ultimate high-speed melee weapon. Makes you move faster." tur="Son derece hızlı muhteşem bir yakın dövüş silahı. Daha hızlı hareket etmeni sağlar." fre="L'arme de corps à corps à grande vitesse ultime. Vous permet d'aller plus vite." spa="La última Arma Melee de alta velocidad. Te hace mover más rapido." ita="La migliore arma nei rapidi combattimenti corpo a corpo. Ti permette di essere più veloce." rus="Универсальное быстрое ближнее оружие. С ним вы бегаете быстрее." ame="The ultimate high-speed melee weapon. Makes you move faster.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Weak attack.{N}Click right mouse button: Sprint attack." cns="有着强大的近战伤害，赋予玩家更高的机动力。使用时，玩家的动作会变得更敏捷。" tha="สุดยอดอาวุธประชิดลมกรด เพิ่มความเร็วให้คุณกันแบบสุดๆ" twn="強調具有強烈近距離傷害和機動力的突襲用近距離武器。著裝時角色的移動會變得更快且敏捷。" jap="強力な近接ダメージと機動力を持つ奇襲用近接武器。着用すると、キャラクターの動きが素早くなる。" idn="Senjata melee dengan kecepatan yang luar biasa. Membuatmu bergerak lebih cepat."/>`
    }

}


function MakeExoDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Exo Scyther ID not defined at Make Exo Scyther Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Exo Scyther'}" spa="${ItemName || 'Exo Scyther'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="릴리트에 의해 바이러스로 감염된 넷 스피어에 새롭게 생겨난 근접 무기. 경량화 된 사이드로 상대에게 빠르게 접근할 수 있으며, 적을 공중으로 띄워 제압이 가능하다." ger="Eine neu erschaffene Nahkampfwaffe vom Lilith Virus: EXO Scythe. Stürze dich schnell wie der Wind auf dein Ziel und überwältige es." eng="A newly created melee weapon by Lilith Virus &quot;EXO Scythe.&quot; Approach your target fast like a wind and dominate it." tur="Lilith Virus'den yeni yaratılmış yakın dövüş silahı ''EXO Scythe''. Hedefinize rüzgar kadan hızlı yaklaşın ve hakim olun." fre="Une nouvelle arme de mêlée créée à partir du Virus Lilith, la &quot;EXO Scythe&quot;. Glissez aussi vite que le vent vers votre ennemi pour l'éliminer." spa="Una nueva arma melee creada por Lilith Virus &quot;EXO Scythe.&quot; Acércate a tu objetivo tan rápido como el viento y derrota a tu adversario." ita="Un'arma melee &quot;EXO Scythe&quot; appena creata dal virus Lilith. Avvicinati al bersaglio rapido come il vento e sottomettilo." rus="Новое оружие ближнего боя - Lilith Virus &quot;EXO Scythe&quot;. Подберитесь к вашей цели быстро, как ветер и нанесите решающий удар." cns="莉莉丝病毒感染极限战网后，艾斯波科技通过研究被感染的数据，发明了一种全新的武器。{N}持有该武器可以快速接近敌人，并把他们扔向空中后收割其生命。"/>`
    }

}


function MakeFistDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Fist ID not defined at Make Metallic Fist Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Metallic Fist'}" spa="${ItemName || 'Metallic Fist'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="해커 G가 만든 새로운 무기. 진 오필리아를 부활 시키며 그녀를 위한 단 하나의 무기를 만들어 냈으며, 파워즈에서 사용하는 아이언 부츠에 대항하기 위해 만들었다고 전해진다." ger="Eisenstiefel? Verteidigungswaffe? Ich lasse meine Fäuste sprechen! - Hacker G" eng="Iron boots? A Defensive weapons?{N}I'll speak with my fists!{N}- Hacker G-" tur="Demir botlar? Defansif silahlar? Ben yumruklarımla konuşurum! - Hacker G" fre="Des bottes en métal ? Des armes de défense ? Je parle la langue des poings ! - Hacker G" cns="黑暗男爵为了复仇而特别制作的武器，可攻可守的巨大金属臂铠，可以轻易将敌人撕碎。"/>`
    }

}



function MakeIronBootsDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('IronBoots ID not defined at Make IronBoots Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Iron Boots'}" spa="${ItemName || 'Iron Boots'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="파워즈에 의해 강탈된 아이언부츠에 초광속 입자 타키온을 주입하여 완성시킨 파워즈 커스텀 아이언 부츠. 파워즈 슈트와의 상호작용으로 부스트사용 및 공격에 사용되는 SP를 크게 줄이는 것이 가능하다." ger="Maßgefertigte Iron Boots, die Tachyon enthalten. Werden sie zusammen mit dem Powerz Suit getragen, kann sich der SP-Verbrauch verringern." eng="Customized Iron Boots with Tachyon inside. Can decrease the use of SP if you wear it together with Powerz Suit." tur="İçinde Tachyon olan özelleştirilmiş Iron Boots. Powerz Suit ile birlikte giyerseniz SP kullanımını azaltabilir." fre="Des Iron Boots personnalisées qui contiennent du Tachyon. Elle vous permettront de diminuer l'utilisation des SP si vous les portez avec le Powerz Suit." spa="Iron Boots personalizados con Tachyon en su interior. Puede reducir el uso de SP si lo usas junto con Powerz Suit." ita="Iron Boots personalizzati con Tachyon all'interno. Può diminuire l'uso di SP se li indossi con il Powerz Suit." rus="Модернизированные Iron Boots с эффектом Tachyon. Замедляется потребление SP, если использовать вместе с Powerz Suit." cns="注入超光速粒子后制造而成的特典浮空战靴。速度越快的物体惯性越大，杀伤力越强。想想与一架飞机相撞会是什么后果。"/>`
    }

}



function MakeKatanaDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Katana ID not defined at Make Katana Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Katana'}" spa="${ItemName || 'Katana'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="야구 배트의 타격 기능을 강화하여 대전에  적합하게 튜닝한 근거리 무기. 강력한 스윙 대미지가 동반된 회전 공격이 특징이다." ger="Japan Do' ist falsch! 'Katana' ist richtig!" eng="Japan Do' is wrong!. 'Katana' is right" tur="Geliştirilmiş bir beyzbol sopasının vuruş gücünün bir yakın dövüş silahına dönüştürülmüş hali. Güçlü bir savurma saldırısının eşlik ettiği spin saldırısı, bu silahın en özel gücüdür." fre="C'est Japonais' n'est pas exact! 'Katana' est exact." spa="Japan Do' es incorrecto! 'Katana' es correcto" ita="Japan Do' è sbagliato! 'Katana' è corretto." rus="Это все, что необходимо ниндзя S4 League." ame="Japan Do' is wrong!. 'Katana' is right" cns="通过强力的挥棒动作来攻击敌人的近战武器，还可以发动旋转攻击。" tha="ในญี่ปุ่น' หากมันผิด!. 'Katana' จะเป็นคำตอบ" twn="強化棒球球棒的打擊功能，是能夠適當地在對戰中進行調整的近距離武器，會伴隨強烈的晃動傷害為其攻擊特徵。" jap="野球バットの打撃機能を強化し、対戦で活躍できるようにチューニングされた近接武器。強力なスイングダメージを伴う回転攻撃が特徴だ。" idn="Jepang salah! 'Katana' yang benar."/>`
    }

}



function MakeSigmaBladeDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('SigmaBlade ID not defined at Make Sigma Blade Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'SigmaBlade'}" spa="${ItemName || 'SigmaBlade'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="봉인이 풀리면 거대한 힘을 얻게 된다는 전설이 있는 검. 거대한 힘을 버티지 못하면 독이 될 수 있으니 함부로 봉인을 풀지 말것" ger="In der Klinge ist die ultimative Kraft gebannt. Wer kann den Bann lösen?" eng="The blade seals the ultimate power. Who can reveal its power?" tur="Bıçakta üst düzey bir güç mühürlü. Bu gücü kim ortaya çıkarabilir?" fre="La lame renferme le vrai pouvoir. Qui pourra révéler ce pouvoir ?" spa="La espada sella el poder definitivo. ¿Quién puede revelar su poder?" ita="La lama cela un potere incredibile. Chi può svelarlo?" rus="Каждый меч хранит в себе запечатанную силу.  Вызволят ли эту силу наружу?" cns="传说中的神剑，一旦解开封印就可以获得巨大的力量。如果承受不住巨大的力量，就会付出惨重的代价。不可随意解开封印！" twn="傳說解除封印後將聚合強大之力的刀。這巨大力量撐不住時將會變成毒素，切勿隨意解除封印。" idn="Pedang ini menyegel kekuatan yang besar. Siapa yang bisa mengeluarkan kekuatannya?"/>`
    }

}



function MakeTwinBladesDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('TwinBlades ID not defined at Make Twin Blades Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Twin Blades'}" spa="${ItemName || 'Twin Blades'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="양전하와 음전하의 칼날로 전기장을 형성하는 무기. 넓은 범위를 자랑하며, 강력한 전기장으로 적의 가드를 부술 수 있다." ger="Erzeugt ein Magnetfeld mit einer (+)- und einer (-)-Klinge. Weite Entfernung und weiträumig." eng="Creates a magnetic field with a (+) blade and (-) blade. Long and wide range." tur="Pozitif ve negatif bir bıçakla manyetik alan oluşturur. Menzili uzundur." fre="Crée un lame accompagnée d'un champ magnétique. Longue et courte portée." spa="Crea un campo magnético con una cuchilla (+) y una cuchilla (-). Un rango Ancho y Largo." ita="Genera un campo magnetico con una lama (+) e una (-). Ampio raggio." rus="Создает магнитное поле с помощью (+) меча и (-) меча. Длинный и широкий радиус поражения." ame="Creates a magnetic field with a (+) blade and (-) blade. Long and wide range." cns="利用正负离子相互碰撞产生电磁场进行攻击的武器，强大的电磁场可以打破敌人的防御。" tha="สร้างสนามแม่เหล็กด้วยใบมีดขั้วบวกและขั้วลบในบริเวณกว้าง {N}{CB-0,255,0,255}[Control]{N}Left Click: Slash {N}Left click while jump: Air Attack {N}Right Click: Wide Attack (Charge, Nullify Guard)" twn="由陽電子和陰電子的電磁場所形成刀鋒的武器。具有廣大的攻擊範圍，可以透過強烈的電磁場來破壞敵人的防護。" jap="＋と－の刃で電場を形成する武器。広い範囲を持ち,強力な電気で敵のガードを崩す事ができる。" idn="Menciptakan medan magnet dengan pedang (+) dan pedang (-). Jarak dekat dan jauh."/>`
    }

}



function MakeVitalClawDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Vital Shock ID not defined at Make Vital Shock Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Vital Shock'}" spa="${ItemName || 'Vital Shock'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="상대에게 근접하여 강한 충격파로 기습공격을 할 수 있는 무기 기습에 성공했을때 강력한 데미지로 일격필살을 노릴 수 있으나 기습 딜레이가 길어 자칫 반격을 당할 수 도 있으니 주의" ger="not trans" eng="not trans" tur="Yakın dövüşte güçlü bir şok dalgasıyla tek bir ölümcül darbe indirmek için kullanılan bir silah. Saldırının uzun bir bekleme süresi olduğu için karşı saldırılara dikkat et." fre="not trans" spa="not trans" ita="not trans" rus="not trans" ame="not trans" cns="用强烈的冲击波来袭击敌人的武器，成功袭击时可以造成强烈的伤害或一击致命，但是偷袭后产生的延迟较长，小心敌人的反击。" tha="not trans" twn="能對敵人進行近距離攻擊，利用強烈的衝擊波可進行突襲的武器，當突襲成功時，可透過強烈的傷害產生一擊必殺的威力，但是突襲的冷卻時間長，自己也會有可能受到反擊，因此要特別注意" jap="相手に接近し、衝撃波で奇襲攻撃ができる武器。奇襲を行い、一撃必殺を狙えるが、奇襲後のディレイが長く、反撃される恐れがあるので注意。" idn="Tidak bisa ditransaksikan"/>`
    }

}



function MakeAirGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('AirGun ID not defined at Make AirGun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'AirGun'}" spa="${ItemName || 'AirGun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="압축된 공기를 폭발시켜 전방의 적을 날려버리는 무기. 강력한 공격을 위해서는 에너지를 모아야 하며 에너지 축적시 이동 속도가 현저하게 떨어진다." ger="Diese Waffe verwandelt Druckluft in Explosionen. Vor einem Schuss muss Energie aufgeladen werden. Während des Aufladens ist die Bewegungsgeschwindigkeit verringert." eng="This gun works by compressed air, turned into explosions. The energy needs to be chared before the blast. Movement speed is reduced during the charge." tur="Bu silah, sıkıştırılmış havayı patlamaya dönüştürerek çalışır. Patlamadan önce enerjinin doldurulması gerekir. Doldurma sırasında hareket hızı düşer." fre="Ce pistolet fonctionne grâce à de l'air compressé, transformé en explosions. L'énergie nécessaire doit être chargées avant le tir. La vitesse de déplacement est réduite pendant le chargement." spa="Esta arma funciona con aire comprimido, que hace explosión. La energía necesita ser compartida antes del disparo. La velocidad de Movimiento se reduce al cargar." ita="E' una pistola ad aria compressa che provoca esplosioni. L'energia deve essere prima caricata. La velocità di movimento è ridotta durante la ricarica." rus="Это оружие работает на сжатом воздухе, преобразовывая его в взрывы. Перед взрывом требуется зарядить. Скорость передвижение уменьшается в процессе зарядки." ame="This gun works by compressed air, turned into explosions. The energy needs to be chared before the blast. Movement speed is reduced during the charge.{N}{CB-0,255,0,255}[Operation]{N} Mouse Left Button : Fire" cns="压缩空气以达到爆炸效果，可以炸飞前方的敌人。蓄力越久，伤害越大，蓄力时移动速度明显降低。" tha="ปืนกระบอกนี้ ทำงานด้วยแรงกดดันอากาศที่บีบอัดจนก่อเกิดการระเบิด ต้องมีการสะสมพลังงานที่เพียงพอก่อนจะก่อให้เกิดการระเบิดได้ ในช่วงระหว่างการชาร์จ ความเร็วในการเคลื่อนที่จะลดลง" twn="壓縮空氣對前方的敵人發射的武器。 為進行強烈的攻擊，需要聚集能量，凝聚能量時移動速度會顯著地下降。" jap="圧縮した空気を爆発させ、前方の相手を吹き飛ばす武器。攻撃力を上げるためには、エネルギーをためる必要があり、エネルギーをためると、移動速度が遅くなる。" idn="Senjata ini bekerja dengan menekan udara, berubah menjadi ledakan. Perlu dikumpulkan energi sebelum ditembakkan. Kecepatan gerak berkurang selama pengisian energi."/>`
    }

}



function MakeAssaultDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Assault ID not defined at Make Assault Rifle Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Assault Rifle'}" spa="${ItemName || 'Assault Rifle'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="빠르게 이동하여 적진 깊숙이 파고들 수 있게 설계된 라이플. 강한 화력을 가지고 있지만 공격 시간이 길어질수록 집탄률이 하락한다." ger="Ermöglicht rasend schnelles Angreifen. Die Angriffsrate is hoch. Je länger der Angriff aber dauert, desto ungenauer wird er." eng="Fast and Furious to attack the enemy. It has high attack, but low accurate as increased the attack time." tur="Düşmanı hızlı ve öfkeli saldırır. Yüksek saldırı gücüne sahiptir fakat saldırı süresi uzun olduğu için isabet oranı düşüktür." fre="Possède une attaque  rapide et puissante, mais une précision faible." spa="Fast and Furious to attack the enemy. It has high attack, but low accurate as increased the attack time." rus="Быстрая и яростная атака врага. Сильная мощь и слабая прицельная способность." cns="攻击的同时也能迅速移动，适合用来突围的武器。但攻击时间越长，命中率下降的越厉害。" twn="攻擊同時也能迅速移動，適合用來突破戰線的步槍。雖然擁有強大火力，但是攻擊時間越長命中率會隨著下降。" jap="素早く敵陣の奥に移動し、襲撃できるように設計されたライフル。強い火力を誇るが、攻撃時間が長くなるほど、集弾率が悪くなる。" idn="Cepat dan kuat untuk menyerang musuh. Mempunyai serangan yang tinggi, tapi akurasinya makin rendah ketika serangannya meningkat."/>`
    }

}



function MakeCannonDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Cannon ID not defined at Make Cannonade Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Cannonade'}" spa="${ItemName || 'Cannonade'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="본체에 삽입된 거대 레일을 회전해 막강한 에너지를 응축, 발사한다. 응축된 에너지는 발사 지점에서 폭발해 주위의 적들까지 모두 공격한다." ger="Waffe, die mit kondensierter Energie von einer{N}rotierenden Schiene in ihrem Inneren angreift. Die explodierende Energie am Ziel greift Gegner in der Nahe des Einschlagsorts an." eng="Weapon that condenses and launches strong energy from a spinning rail inside the weapon. The energy explodes at the target and damages opponents nearby." tur="Silahın içindeki dönen bir raydan gelen güçlü enerjiyi yoğunlaştıran ve ateşleyen bir silah. Enerji hedefin üzerinde patlar ve yakındaki rakiplere hasar verir." fre="Arme qui concentre et envoie une énergie puissante{N}grâce au rail tournoyant à l'intérieur. L'énergie explose à l'endroit ciblé et attaque les ennemis qui sont proches" spa="Arma que condensa y dispara energía poderosa del riel giratorio dentro del arma. La energía explota en el punto objetivo y ataca al enemigo cercano" ita="Arma che raccoglie energia e la usa per attaccare grazie alla sua turbina interna. L'energia confluisce in un punto e attacca il nemico nelle vicinanze" rus="Благодаря конденсации энергии внутри катушки, выстрелы этого оружия обладают разрушительной мощью. Попадание производит локальный взрыв, задевая противников находящихся рядом." ame="Weapon that condenses and launches strong energy from a spinning rail inside the weapon. The energy explodes at the target and damages opponents nearby.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Fire weapon.{N}Click right mouse button: Zoom in." cns="将能量冷凝压缩成弹药，发射出的能量爆炸后，周围的敌人都会受到攻击。" tha="อาวุธที่ควบแน่นพลังงาน และปลดปล่อยพลังทำลายจากรางเล็งยิงในตัวอาวุธ พลังงานจะระเบิดเมื่อตกกระทบเป้าหมายและสร้างความเสียหายให้กับรอบๆ" twn="凝聚巨大的能量後從武器內部的軌道發射。能量會在目標處爆發並對周圍的敵人造成傷害。" jap="本体の巨大レールを回転させ、莫大なエネルギーをチャージし発射する。ためたエネルギーは、発射地点で爆発し、周辺の敵を全部攻撃する。" idn="Senjata yang menyimpan dan meluncurkan energi yang kuat dari rail yang berputar dalam senjata. Energi akan meledak pada target dan menghasilkan kerusakan pada lawan disekitar."/>`
    }

}



function MakeDualMagnumDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Dual Magnum ID not defined at Make Dual Magnun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Dual Magnum'}" spa="${ItemName || 'Dual Magnum'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="넷스피어의 누적된 전투데이터를 바탕으로 상대방의 사격궤도를 회피하며 발사하는 총탄으로 적에게 최대의 피해를 입힐 수 있도록 디자인된 두정의 총기{N}SP를 소모하며 점프나 회피중 발사가 가능한 신개념 발사무기" ger="Speziell für die Netsphere entworfene Doppelpistole. Mit dieser Waffe kämpfst du so stylish wie in einem Eastern! {N}Du kannst deine Gegner angreifen, während du in der Luft bist oder ausweichst, wenn du einige deiner SP benutzt!" eng="Specially designed dual handguns for the Netsphere. With this weapon, you fight as stylish as in Eastern action flics. {N}By using some of your SP, you can attack your opponent while being in the air or when dodging!" tur="Netsphere'de ikili tabancalar için özel olarak tasarlandı. Bu silahla, Doğu aksiyon filmlerindeki kadar tarz sahibi bir şekilde savaşın. {N} SP'nizden biraz harcayarak, rakibinize havada ya da kaçarken saldırın." fre="Ces deux pistolets ont été conçu spécialement pour la Netsphere. Avec ces armes, vos mouvements deviendront encore plus stylés. {N}En utlisant des SP, vous pourrez attaquer un ennemi pendant qu'il est dans les airs ou qu'il tente une esquive !" spa="Especialmente diseñado para pistolas duales para la Netsphere. Con esta arma, pelearás con estilo como en las películas de acción orientales. {N}Adquiérela usando algo de tu SP, ¡podrás atacar a tu adversario mientras estás en el aire o evadiendo!" ita="Pistole doppie progettate appositamente per la Netsphere. Con quest'arma, ti sembrerà di combattere in un film d'azione asiatico. {N}Utilizzando un po' del tuo SP, puoi attaccare il tuo avversario in aria o mentre schivi i colpi!" rus="Специально разработанные двойные пистолеты для Netsphere. Вы будете сражаться также стильно, как и в восточных боевиках. {N}Используя немного SP, вы сможете атаковать в воздухе и в уклонении!" ame="Speziell für die Netsphere entworfene Doppelpistole. Mit dieser Waffe kämpfst du so stylish wie in einem Eastern! {N}Du kannst deine Gegner angreifen, während du in der Luft bist oder ausweichst, wenn du einige deiner SP benutzt!" cns="可以自动调整子弹的射击轨道，使发射的子弹对敌人产生更大伤害。{N}只要消耗能量，即便在跳跃或闪避中也能发射子弹的概念型武器。"/>`
    }

}



function MakeEarthBombDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('EarthBomb ID not defined at Make Earth Bomb Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Earth Bomb'}" spa="${ItemName || 'Earth Bomb'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="탄의 추락과 동시에 주변의 에너지를 모으다가 임계점에 이르게 되면 이를 팽창시켜 강한 폭발을 일으키는 무기. 적군은 물론 아군과 자신에게까지 타격을 입히기 때문에 사용에 주의를 요한다." ger="Große Energieimplosion für eine gewaltige Druckwelle. Achtung: Die Druckwelle kann in der Nähe befindliche Verbündete verletzen!" eng="Big energy implosion for a huge blast. Attention: The blast can damage allies nearby!" tur="Devasa bir patlama yaratmak için içe doğru gerçekleşen büyük bir enerji patlaması. Dikkat: Patlama, yakındaki müttefiklere zarar verebilir!" fre="Provoque une grosse explosion qui peut également toucher les alliés proches." spa="Gran implosión de energía para un gran estallido Atención: el estallido puede dañar a aliados cercanos!" ita="La sua esplosione provoca una grande onda d'urto. Attenzione: può ferire anche gli alleati vicini!" rus="Большая энергетическая имплозия для большой взрывной волны. Внимание: Взрывная волна может нанести урон союзникам!" ame="Большая энергетическая имплозия для большой взрывной волны. Внимание: Взрывная волна может нанести урон союзникам!{N}{CB-0,255,0,255}[Управление]{N}Левая Кнопка Мыши: Кинуть Earth Bomber." cns="将巨大的能量压缩成球形，极具破坏力的武器。无论是对敌人还是自己都具有巨大的破坏力，使用的时候要注意隐蔽哦！" tha="พลังงานขนาดมหาศาล ระเบิดขึ้นภายในก่อเกิดแรงทำลายมหาศาล  โปรดระวัง! แรงระเบิดของมันสามารถทำร้ายพวกพ้องเราได้" twn="在投彈的同時會凝聚周遭的能量，在當到達臨界點時，會產生強烈爆炸的武器。 除了敵軍以外，我軍以及自己也會受到傷害，因此使用時要特別小心。" jap="墜落した弾が周辺のエネルギーを集め、強力な爆発を発生させる。範囲内の対象はランダムなダメージを受ける。味方と敵を区分しないため、使用時には要注意。" idn="Energi besar yang menghasilkan ledakan. Perhatian: ledakan bisa melukai semua orang disekitarnya!"/>`
    }

}



function MakeGaussDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Gauss ID not defined at Make Gauss Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Gauss Rifle'}" spa="${ItemName || 'Gauss Rifle'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="한발씩 발사가 가능한 연사형 라이플. 연사할수록 집탄율이 떨어지므로 적당히 연사 횟수를 조절하며 발사하는 컨트롤이 중요하다. 중장거리에 적합한 무기" ger="Streugewehr fur Einzelschusse und Automatik. Je mehr du schießt, desto mehr verringert sich die Genauigkeit. Schieße also kontrolliert! Fernkampfwaffe" eng="Single and automatic burst rifle. The longer you fire the more the accuracy drops. To keep a high accuracy, carefully balance the length of your bursts." tur="Yarı otomatik ve otomatik tüfek. Ne kadar uzun süre ateş edersen isabet oranı o derecede düşer. Yüksek bir isabet oranı sağlamak için seri atışlarının uzunluğunu iyi dengelemelisin." fre="Une arme coup par coup et automatique. Plus tu tires plus la précision baisse. Tire en contrôlant la fréquence. Arme permettant des attaques à longue portée" spa="Rifle de explosión simple y automático. Cuanto más dispares, mayor precisión. Dispara mientras controlas la frecuencia de disparo.{Armas a larga distancia" ita="Fucile automatico a canna singola. Più spari, meno precisione hai. Spara controllando la frequenza. Arma a lunga distanza." rus="Одиночный и автоматический режимы огня. Чем больше выстрелов сделано, тем ниже точность. Необходим постоянный контроль за частотой выстрелов." ame="Single and automatic burst rifle. The longer you fire the more the accuracy drops. To keep a high accuracy, carefully balance the length of your bursts.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Fire weapon." cns="可点射可连射的步枪，连射会使命中率下降，需要适当调节射击频率，适用于中长距离的武器。" tha="ไรเฟิลระเบิดทั้งแบบปกติและแบบอัตโนมัติ ยิ่งใช้มันยิงมากเท่าไหร่ ความแม่นยำยิ่งตกลงเท่านั้น ถ้าจะหวังผลให้มันแม่นๆ หน่อย ต้องรักษาระดับสมดุลของระยะระเบิดไว้ให้ดี." twn="可單發式發射的連射型步槍，但是越是進行連射，命中率就會下降的關係，因此要適當地調整控制連射的次數，是適合進行中距離攻擊的武器" jap="一発ずつ発射できる連射型ライフル。連射するほど、集弾率が悪くなるため、連射回数のコントロールが重要だ。中～長距離に適した武器。" idn="Burst Rifle tunggal dan otomatis. Selama kamu menembak maka akurasi akan semakin berkurang. Untuk tetap mejaga kestabilan akurasi, berhati-hatilah dalam mengatur tembakanmu."/>`
    }

}




function MakeHandGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('HandGun ID not defined at Make HandGun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'HandGun'}" spa="${ItemName || 'HandGun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="빠른 공격속도와 간편한 사용감이 특징인 발사무기. 착용 시 캐릭터의 움직임이 더욱 빠르고 민첩해진다." ger="Diese Schusswaffe ist einfach zu nutzen und besitzt eine hohe Angriffsgeschwindigkeit. Wenn du sie tragst, kannst du dich{N}schneller bewegen und reagieren." eng="An easy to use shooting weapon with fast attack speed. When equipped, the character's movement would become faster and quicker." tur="Yüksek saldırı hızıyla kullanımı kolay bir ateşli silah. Donatıldığında karakterin hareketi daha çabuk ve kıvrak olur." fre="Une arme de tir facile à utiliser qui permet d'attaquer rapidement. Une fois équipée, les déplacements du personnage deviennent plus rapides et plus vifs." spa="Un arma de disparo fácil de usar con gran velocidad de ataque. Cuando está equipada, el movimiento del personaje se volverá más rápido." ita="Una shooting weapon semplice da usare, dall'elevata velocità di attacco. Equipaggiandola, i movimenti del personaggio risulteranno più fluidi e rapidi." rus="An easy to use shooting weapon with fast attack speed. When equipped, the character's movement would become faster and quicker." ame="An easy to use shooting weapon with fast attack speed. When equipped, the character's movement would become faster and quicker.{N}{CB-0,255,0,255}[Operation]{N}Left mouse click: Shooting" cns="攻击速度快，操作简单，角色装备该武器时，行动会变得更为迅速、敏捷。" tha="เป็นอาวุธที่ยิงง่าย พร้อมความรวดเร็วในการโจมตี. เมื่อใช้, ตัวละครจะเคลื่อนที่ได้เร็วขึ้น." twn="具有快速攻擊速度和便利使用性的發射武器。著裝時角色的移動會變得更快且敏捷。" jap="素早い攻撃速度と、使いやすい使用感が特徴な発射武器。着用すると、より機敏な動きができる。" idn="Mudah untuk menggunakan senjata tembak dengan kecepatan serangan tinggi. Ketika digunakan, kecepatan gerak karakter akan menjadi lebih cepat."/>`
    }

}


function MakeHeavyMachineGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Heavy Machine Gun ID not defined at Make Heavy Machine Gun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Heavy Machine Gun'}" spa="${ItemName || 'Heavy Machine Gun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="다수의 적을 효과적으로 공격하기 위한 개틀링건. 장탄량이 높고 공격 범위가 넓어 팀원들을 엄호하는데 좋은 효과를 발휘한다. 단, 다른 무기와 달리 사격 전에 예열 시간이 있어 급박한 상황에 대처하기는 어렵다." ger="Eine Gatling Gun, die zeitgleich mehrere Feinde angreifen kann, um so mit ihrem ausreichenden Magazin und ihrer breiten Angriffsreichweite Teammitglieder zu beschutzen. In dringenden Situationen ist sie allerdings schwer zu handhaben, da sie, anders als andere Waffen eine Aufwarmzeit hat." eng="Gatling gun which can attack several enemies. It is useful to guard team players, with a large magazine and wide attack range. But it is difficult to manage in a desperate situation because it has a warm-up time unlike other weapons." tur="Birkaç düşmana birden saldırabilen mitralyöz. Şarjörünün geniş mermi kapasitesi ve uzun saldırı menziliyle takım oyuncularını korumak için kullanışlıdır. Fakat diğer silahların aksine bir ısınma süresi olduğu için acil bir durumda kullanması zordur." fre="Le gatling gun peut attaquer plusieurs ennemis. Il est très utile pour protéger les coéquipiers avec une grande autonomie et une longue distance d'attaque. Mais il est très difficile de s'en servir dans les situations urgentes. car le temps de chargement est plus long que pour les autres armes" spa="Arma Gatling que puede atacar varios enemigos Es útil para proteger a los jugadores del equipo con un cargador suficiente y un ataque de amplio rango. Pero es{N}difícil de operar en una situación urgente porque tiene mayor tiempo de precalentamiento que otra armas" ita="Mitragliatrice che può attaccare molti nemici. E' utile per proteggere il team con le munizioni e l'ampio raggio d'azione. E' penalizzata in caso di emergenza, visto che deve caricarsi." rus="Пулемет позволяющий атаковать сразу нескольких противников. Незаменим для защиты базы благодаря емкости магазина и широкому углу атаки. Однако, замедляет передвижения и сложен в управлении, так как требует времени на раскрутку." ame="Gatling gun which can attack several enemies. It is useful to guard team players, with a large magazine and wide attack range. But it is difficult to manage in a desperate situation because it has a warm-up time unlike other weapons."/>`
    }

}


function MakeHomingDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Homing ID not defined at Make Homing Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Homing'}" spa="${ItemName || 'Homing'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="발사 시 탄착군을 보정하는 무기. 거리와 공격 시간이 길어질수록 보정 수치가 낮아진다." ger="Hilft beim Zielen, ist bei Angriffen über weite Entfernungen aber weniger genau." eng="Helps to aim, but it is less accurate at long-distance attacks." tur="Nişan almada iyidir fakat uzun mesafe saldırılarda isabet oranı daha düşüktür." fre="Aide à mieux viser, mais s'avère moins précis pour les attaques de longue portée." spa="Ayuda a tu puntería, Pero es menos exacta en ataques a larga distancia." ita="Aiuta a prendere la mira, ma è meno preciso nelle lunghe distanze." rus="Помогает прицелится, но имеет малую точность на дальних расстояниях." ame="This rifle hits within a certain range around the aiming point. Basic damage is weak but there is a chance to get additional random damage. The max ammo is limited.{N}{CB-0,255,0,255}[Operation]{N} Mouse left button : Fire" cns="射击时会自动修正弹道的武器。但攻击距离越远、攻击时间越长，修正准确率越低。" tha="ช่วยในเรื่องการเล็ง แต่ประสิทธิภาพจะลดลงสำหรับระยะไกล" twn="發射時能夠協助命中的武器。距離與攻擊時間越長，輔助校正的數值就會降低。" jap="発射時、命中精度を補正する武器。距離が遠くなったり、攻撃時間が長くなると、補正効果がどんどん弱くなる。" idn="Membantu dalam membidik, tapi akurasi rendah pada serangan jarak jauh."/>`
    }

}




function MakeLightBombDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Lightning Bomber ID not defined at Make Lightning Bomber Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Lightning Bomber'}" spa="${ItemName || 'Lightning Bomber'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="탄의 추락과 동시에 주변의 에너지를 모으다가 임계점에 이르게 되면 강한 번개를 일으키는 무기. 범위 내 대상에게 랜덤한 데미지를 입힌다. 아군 및 자신도 타격을 입을 수 있기 때문에 사용에 주의를 요한다." ger="Feuert eine Spezialkugel aus konzentrierter Energie ab und schlägt wie ein Blitz ein. Schadet allen Spielern in der Nähe der Explosion, selbst Verbündeten!" eng="Fires a special bullet out of concentrated energy and hits with a huge lightning explosion. It damages all players nearby the detonation, even allies!" tur="Yoğunlaştırılmış enerjiden oluşan özel bir mermi ateşler ve büyük bir şimşek patlamasıyla birlikte hedefini vurur. Patlamanın yakınındaki tüm oyunculara, hatta müttefiklere bile hasar verir!" fre="Cette arme tire une munition spéciale qui relache une énergie concentrée, provoquant une immense explosion. Elle peut toucher les ennemis autour, mais aussi les alliés !" spa="Dispara una bala especial de energía concentrada y golpea con una gigantesca explosión de Luz. Daña a todos los players cerca de la detonación, incluso aliados!" ita="Spara una munizione speciale con un concentrato d'energia che provoca un'esplosione. Danneggia tutti i giocatori vicini, compresi gli alleati!" rus="Стреляет особыми патронами концентрированной энергии и наносит удар крупным взрывом молнии, которое наносит урон всем игрокам в зоне поражения, даже союзникам!" cns="将巨大的能量压缩成球形，极具破坏力的武器。无论是对敌人还是自己都具有巨大的破坏力，使用的时候要注意隐蔽哦！" tha="ยิงกระสุนพิเศษจากพลังงานที่ก่อรูปขึ้นมา จะก่อให้เกิดระเบิดสายฟ้าฟาดเมื่อตกกระทบ พร้อมสร้างความเสียหายให้กับผู้เล่นที่อยู่ใกล้ๆ จุดระเบิด ไม่เว้นแม้แต่พวกเดียวกัน!" twn="在投彈的同時會凝聚周遭的能量，在當到達臨界點時，會產生強烈雷擊的武器。會讓範圍內的敵人隨機受到傷害，我軍以及自己也會受到傷害，因此使用時要多加小心。" jap="墜落した弾が周辺のエネルギーを集め、強い稲妻を発生させる。範囲内の対象はランダムなダメージを受ける。味方と敵を区分しないため、使用時には要注意。" idn="Menembakkan peluru khusus dari energi yang terkonsentrasi dan membuat ledakan halilintar yang besar. Puluru ini menyerang semua pemain yang berada di dekat ledakan, termasuk teman!"/>`
    }

}




function MakeLightMachineGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Light Machine Gun ID not defined at Make Light Machine Gun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Light Machine Gun'}" spa="${ItemName || 'Light Machine Gun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="요인 암살을 위해 중국에 파견된 해커집단이 우산속에 몰래 숨겨 반입한 무기, 평화롭게 우산을 펼치고 있다가도 순식간에 소나기와 같은 총알을 쏟아내는 라이트 머신건 유니크." ger="Dieses einzigartige Maschinengewehr wurde von einer Gruppe Hacker heimlich nach China gebracht. Ursprünglich sollten mit ihr Agenten ausgeschaltet werden." eng="This unique machinegun was secretly imported to China by the group of hackers. It was orginally designed to assasinate agents." tur="This unique machinegun was secretly imported to China by the group of hackers. It was orginally designed to assasinate agents." fre="Ce Machine Gun unique a été importé en Chine illégalement par un groupe de hackers. Il fut à l'origine crée pour assassiner des agents." spa="Esta exclusiva ametralladora fue importada en secreto a China por un grupo de hackers. Fue originalmente diseñada para asesinar agentes." ita="Questa Machine Gun unica è stata importata in segreto in Cina dal gruppo di hacker. In origine, era stata ideata per assassinare degli agenti." rus="Этот уникальный пулемет был разработан хакерами и тайно ввезен в Китай. Его изначальное предназначение это истребление агентов." cns="功夫少女使用的特典轻机枪。{N}既可以拗造型，又可以在危急关头向敌人倾泻子弹。{N}伞下的少女……想想就让人心动。" twn="為了暗殺重要人物，而讓駭客集團藏匿在傘中偷渡進中國的武器。將傘打開便能瞬間發射出如驟雨般的子彈，是十大暗器之一。"/>`
    }

}




function MakeMindHealDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Mind Heal ID not defined at Make Mind Heal Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Mind Heal'}" spa="${ItemName || 'Mind Heal'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="아군의 회복을 담당하는 정신 무기. 벽이나 엄폐물을 관통해 아군을 회복할 수 있다." ger="Mentale Waffe, die die Lebenskraft deines Teams wiederherstellt. Sie reicht auch durch Wande und Hindernisse." eng="Mental weapon that can recover your teams health. It can penetrate through walls or obstacles." tur="Takımının sağlığını yenileyebilen zihinsel bir silah. Duvarların ve engellerin ardına geçebilir." fre="Mental Weapon qui régénère l'énergie des coéquipiers. Cela peut pénétrer les murs et les obstacles." spa="Arma psíquica que recupera la salud de tu equipo. Puede atravesar una pared u obstáculo." ita="Arma che ripristina le condizioni del team. Può superare muri e ostacoli." rus="Ментальная установка, восстанавливающая здоровье союзникам. Проникает через препятствия и стены." ame="Mental weapon that can recover your teams health. It can penetrate through walls or obstacles.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Heal." cns="能恢复队友生命的武器，可以穿透遮蔽物为队友恢复。" tha="อาวุธจิตภาพ ที่ช่วยฟื้นฟูพลังกายให้ทีมของคุณได้ มันสามารถทะลุผ่านกำแพงและสิ่งกีดขวางไปได้" twn="負責恢復我軍的精神武器，可貫通牆壁或是掩蔽物以對我軍進行恢復。" jap="味方の回復を担当する精神武器。壁やオブジェクトを貫通し、味方を回復できる。" idn="Senjata mental yang bisa menyembuhkan anggota tim. Bisa menembus melalui dinding atau hambatan."/>`
    }

}




function MakeMindShockDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Mind Shock ID not defined at Make Mind Shock Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Mind Shock'}" spa="${ItemName || 'Mind Shock'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="아군의 회복을 담당하는 정신 무기. 벽이나 엄폐물을 관통해 아군을 회복할 수 있다." ger="Mentale Waffe, die die Lebenskraft deines Teams wiederherstellt. Sie reicht auch durch Wande und Hindernisse." eng="Mental weapon that can recover your teams health. It can penetrate through walls or obstacles." tur="Takımının sağlığını yenileyebilen zihinsel bir silah. Duvarların ve engellerin ardına geçebilir." fre="Mental Weapon qui régénère l'énergie des coéquipiers. Cela peut pénétrer les murs et les obstacles." spa="Arma psíquica que recupera la salud de tu equipo. Puede atravesar una pared u obstáculo." ita="Arma che ripristina le condizioni del team. Può superare muri e ostacoli." rus="Ментальная установка, восстанавливающая здоровье союзникам. Проникает через препятствия и стены." ame="Mental weapon that can recover your teams health. It can penetrate through walls or obstacles.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Heal." cns="能恢复队友生命的武器，可以穿透遮蔽物为队友恢复。" tha="อาวุธจิตภาพ ที่ช่วยฟื้นฟูพลังกายให้ทีมของคุณได้ มันสามารถทะลุผ่านกำแพงและสิ่งกีดขวางไปได้" twn="負責恢復我軍的精神武器，可貫通牆壁或是掩蔽物以對我軍進行恢復。" jap="味方の回復を担当する精神武器。壁やオブジェクトを貫通し、味方を回復できる。" idn="Senjata mental yang bisa menyembuhkan anggota tim. Bisa menembus melalui dinding atau hambatan."/>`
    }

}



function MakeMineGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Mine Gun ID not defined at Make Mine Gun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Mine Gun'}" spa="${ItemName || 'Mine Gun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="볼 형태로 압축된 폭발성 에너지를 원하는 타이밍에 투척할 수 있도록 제작한 무기. 신체와 물체에 닿을 시 폭발하도록 설계되어 있다. 포물선으로 날아가는 에너지 볼의  궤적을 연구할 필요가 있다." ger="Waffe, die zur gewunschten Zeit mit konzentrierter Energie in Ballform angreift. Eingerichtet, um bei physischem Kontakt zu explodieren. Die Flugformation des Energieballs ist noch unerforscht." eng="Weapon with compressed explosive energy in ball form for carefully timed sniping. It is made to explode on physical contact. Research into the flight of the ball is essential." tur="İyi zamanlanmış bir pusu için top şeklinde sıkıştırılmış patlayıcı enerjisi taşıyan bir silah. Fiziksel temas sırasında patlar. Topun uçuşunun geliştirilmesi önemli bir konu." fre="Arme avec de l'énergie explosive compressée sous la forme d'une balle pour tirer selon un timing précis. Elles sont faites pour exploser au contact physique. Des recherches sur le comportement de l'energyball sont nécessaires." spa="Weapon with compressed explosive energy in ball form for sniping on desired timing. It is made to explode on physical contact. Research of the energyball flight formation is needed." ita="Arma ad energia compressa in una sfera che esplode in un momento preciso. Esplode a contatto. Fai attenzione alla sua traettoria." rus="Оружие со спресованной в шар взрывной энергией для точных выстрелов с учетом поправки на траекторию. Взрывается при физическом контакте с противником." ame="Weapon with compressed explosive energy in ball form for carefully timed sniping. It is made to explode on physical contact. Research into the flight of the ball is essential.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Fire weapon.{N}{CB-255,0,0,255}This is a temporary weapon{N}which can only be used by acquiring a weapons license.{N}Balance adjustment might be required afterwards." cns="将爆炸能量压缩成球形，一旦触碰到敌人或物体就会爆炸。使用的时候要注意隐蔽哦！" tha="อาวุธที่อัดรวมพลังงานระเบิดไว้ในรูปบอลพลังงาน เพื่อให้สามารถเล็งยิงได้สะดวก มันถุกออกแบบให้ระเบิดเมื่อกระทบกับวัตถุทางกายภาพ การศึกษาทิศทางการบินของกระสุนลูกบอลเป้นหัวใจสำคัญของมัน" twn="將爆發性的能量以球的型態投擲出去。當碰觸到身體或是物體時會進行爆炸，但是需要研究以拋物線飛出的能量球的行走軌跡。" jap="ボールの形で圧縮された爆発性エネルギーを投げられるように開発された武器。人の体や物体に接触したら爆発するようになっている。放物線で飛ぶ為、目標したものを当てるためには、十分な練習が必要だ。" idn="Senjata dengan energi ledakan yang ditekan dalam bentuk bola untuk waktu tembakan dengan hati-hati. Akan meledak dengan kontak fisik, perhatikan arah terbangnya bola itu."/>`
    }

}



function MakeRescueGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('RescueGun ID not defined at Make RescueGun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'RescueGun'}" spa="${ItemName || 'RescueGun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="다수를 회복 할 수 있는 투척 무기. 직접 맞추거나 떨어진 탄을 먹을 수 있으며, 자신이 던진 탄은 먹어도 회복이 되지 않는다." ger="Wurfgeschoss, mit dem mehrere Spieler geheilt werden. Du kannst dich jedoch nicht selbst heilen." eng="Throwing weapon for healing multiple players. But, you can't heal yourself." tur="Birden fazla oyuncuyu iyileştirmek için kullanılan fırlatmalı silah. Ama kendini iyileştiremezsin." fre="Arme de jet ayant pour but de guérir plusieurs joueurs. Vous pouvez aussi vous guérir." spa="Arma de Lanzamiento para sanar múltiples jugadores. Pero, no puedes sanarte a tí mismo." ita="Arma da lancio usata per curare diversi giocatori. Non puoi utilizzarla su di te." rus="Метательное оружие для лечение множественных игроков. Но вы не можете лечить себя." ame="Throwing weapon for curing the multiple players. Player can hit directly the others or get the dropped one, but you can't be healed by your drops." cns="可恢复生命的武器，只要吃掉发射出的子弹就可以恢复生命，但对自己无效。" twn="可恢復多數的投擲武器，可以直接配合或是吃下掉落下來的子彈，就算是吃下自己丟出的子彈也不會恢復。" jap="一度に複数を回復できる投擲武器。直接当てるか、落ちた弾丸に触れることで回復できる。自分が発射した弾丸は、触れても回復されない。" idn="Senjata lempar untuk menyembuhkan beberapa pemain sekaligus. Tapi, tidak bisa menyembuhkan dirimu sendiri."/>`
    }

}




function MakeRevolverDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Revolver ID not defined at Make Revolver Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Revolver'}" spa="${ItemName || 'Revolver'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="근거리에서 큰 효력을 발휘하는 무기. 큰 구경에서 나오는 강력한 공격으로 상대방을 밀어낼 수 있어 근접 무기를 쉽게 상대할 수 있다. 단, 집탄률이 낮아 먼 거리의 적에게는 비효율적이다." ger="Eine Waffe, die sehr stark im Nahkampf ist. Sie erleichtert den Zweikampf mit einer Nahkampfwaffe, da die Gegner durch das starke Kaliber weggeschleudert werden. Aufgrund ihrer schwachen Genauigkeit ist sie jedoch schlecht gegen Feinde mit Fernkampfwaffen." eng="This weapon has massive power in close range.{N}It is perfect for attacks against close range opponents{N}because it has a knock back effect. But it is inefficient{N}against long range opponents because of low accuracy." tur="Bu silah, yakın mesafede muazzam bir etkiye sahiptir.{N}Yakın mesafedeki rakiplere karşı mükemmeldi{N}çünkü devirme etkisi bulunmaktadır. Fakat düşük isabet oranı sebebiyle{N}uzak mesafedeki rakiplere karşı etkisizdir." fre="against long range opponents because of low accuracy." spa="Muy potente arma en combate cuerpo a cuerpo. Es excelente para utilizar contra un rival con armamento cuerpo a cuerpo, pero es ineficiente en el uso a larga distancia debido a su escasa precisión." ita="Arma molto potente a distanza ravvicinata. Con il suo piccolo calibro riesce a respingere l'avversario dalla potenza di attacco più elevata. E' quasi inutile a lungo raggio a causa della poca precisione." rus="Arma molto potente a distanza ravvicinata. Con il suo piccolo calibro riesce a respingere l'avversario dalla potenza di attacco più elevata. E' quasi inutile a lungo raggio a causa della poca precisione." ame="This weapon has massive power in close range. It is perfect for attacks against close range opponents{N}because it has a knock back effect. But it is inefficien" cns="善于对付近距离的敌人，有几率将敌人击飞。但是对抗远距离敌人的效果比较差。" tha="อาวุธนี้มีพลังทำลายรุนแรงในระยะใกล้.{N}มันจะทำลายศัตรูได้อย่างรุนแรงในระยะประชิด{N}เพราะตีแล้วกระเด็น. แต่มีความโจมตีรุนแรง{N}หากเจอศัตรูระยะไกลจะมีความแม่นยำต่ำ." twn="在近距離中可以發揮很大效用的武器，透過大口徑的攻擊可以將對方推開，可輕鬆對抗近距離武器，但是執彈率低對於攻擊遠方的敵人比較沒有效果。" jap="近距離で最も力を発揮する武器。大きい口径で生み出す強力な攻撃は、攻撃された相手を押し出すことができ、近接武器も相手できる。ただし集弾率が悪く、遠距離攻撃には適していない。" idn="Senjata ini memiliki kekuatan besar dalam jarak dekat.{N}Sempurna untuk menyerang lawan dalam jarak dekat{N}karena memiliki efek untuk memukul mundur. Tapi tidak efisien{N}melawan tipe jarak jauh karena akurasi rendah."/>`
    }

}




function MakeRocketLauncherDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Rocket Launcher ID not defined at Make Rocket Launcher Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Rocket Launcher'}" spa="${ItemName || 'Rocket Launcher'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="S4 리그의 수수께끼에 가려진 해커 집단 Mad 'M'. 항상 강력한 무기를 만들어내는 그들이 새롭게 개발한 탄두형 무기. 연사와 강력한 한방 모두가 가능하다. 또한 Mad 'M' 의 취향대로 특별한 기능이 여러가지 추가 되어 있다." ger="Der Rocket Launcher wurde von einer ominösen Hackergruppe namens Mad 'M' entwickelt. Schnelle Raketensalven oder konzentrierte Feuerstöße – Diese Waffe kann haut richtig rein! Dazu kommen noch spezielle Sonderfunktionen - typisch Mad 'M' eben." eng="Newly invented weapon by enigmatic hacker group, Mad 'M', of S4 League. Can use for rapid fires and a big strong shot. Also, has various special functions according to the style of Mad 'M'." tur="S4 League'in esrarengiz hacker grubu Mad 'M' tarafından yeni icat edilmiş bir silah. Sürekli ateş ve büyük güçlü atışlar için tasarlandı. Aynı zamanda Mad 'M' tarzına uygun olarak çeşitli özelliklere de sahip." fre="Nouvelle arme inventée par le mystérieux groupe de hackers de S4 League, Mad 'M'. Possibilité d'effectuer un tir en rafale ou un tir puissant. Dispose également d'une multitude de fonctions spéciales à la Mad 'M&quot;." cns="神秘黑客根据现实中的火箭发射器进行仿制的武器。{N}可以进行弹道预测，也可以对敌人进行范围打击。"/>`
    }

}



function MakeRailGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('RailGun ID not defined at Make RailGun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'RailGun'}" spa="${ItemName || 'RailGun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="중력 에너지를 고밀도로 모아 공격하는 스나이핑 무기. 강력한 공격을 위해서는 에너지를 모아야 하며 에너지 축적시 이동 속도가 현저하게 떨어진다." ger="Scharfschutzenwaffe, die mit hochkomprimierter Schwerkraft angreift. Fur eine starke{N}Attacke musst du zunachst Energie sammeln. Deine Bewegungsgeschwindigkeit verringert sich, wahrend du Energie sammelst." eng="Sniping weapon which attacks with high density gravity energy. You have to gather energy for stronger attacks. But your movement speed is decreased while you gather the energy." tur="Yüksek yoğunluklu yer çekimi enerjisiyle saldırı düzenleyen sniping weapon. Daha güçlü saldırılar için enerji toplaman gerekir. Fakat enerji toplarken hareket hızın azalır." fre="Arme de tir à distance qui attaque avec une forte{N}densité d'énergie gravitationnelle. Tu dois concentrer l'énergie pour effectuer une attaque plus puissante. Mais ta vitesse va diminuer pendant que tu concentres l'énergie" spa="Arma sniper que ataca con energía gravitatoria de alta densidad. Tienes que obtener energía para ataques poderosos. Pero la velocidad de tus movimientos disminuye mientras obtienes la energía." ita="Arma molto precisa dall'attacco gravitazionale ad alta densità. Devi prendere energia per colpire più forte. La velocità di movimenti diminuisce mentre prendi energia." rus="Снайперское оружие, стреляющее гравитационной энергией высокой плотности. Перед выстрелом необходимо накопить энергию для более сильной атаки, но в этот период снижается скорость передвижения." ame="Sniping weapon which attacks with high density gravity energy. You have to gather energy for stronger attacks. But your movement speed is decreased while you gather the energy.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Fire weapon.{N}Click right mouse button: Zoom in." cns="蓄力攻击可以产生更高的伤害，但蓄力时移动速度会变慢。" tha="อาวุธไรเฟิลที่ยิงโจมตีด้วยพลังงานแรงดึงดูดที่อัดแน่น คุณต้องสะสมรวมพลังงานให้มาก ถ้าต้องการพลังทำงายที่รุนแรง แต่ความเร็วในการเคลื่อนที่ของคุณจะลดลง ระหว่างคุณสะสมพลังงาน" twn="凝聚高密度的重力能量進行攻擊的狙擊武器。 為進行強烈的攻擊，需要聚集能量，凝聚能量時移動速度會顯著地下降。" jap="重力エネルギーをためて攻撃するスナイプ武器。強力な攻撃のためには、エネルギーをためる必要があり、エネルギーをためると移動速度が遅くなる。" idn="Senjata Snipe bisa menyerang dengan kepadatan energi gravitasi tinggi. Kamu harus mengumpulkan energi untuk serangan yang lebih kuat. Tapi kecepatan gerakmu akan berkurang sementara sewaktu kamu mengumpulkan energi."/>`
    }

}



function MakeSemiRifleDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Semi Rifle ID not defined at Make Semi Rifle Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Semi Rifle'}" spa="${ItemName || 'Semi Rifle'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="높은 집탄률과 반 줌인 기능으로 장거리 견제에 큰 효력을 발휘하는 무기." ger="Sie hat eine geringere Schussgeschwindigkeit als die Submachine Gun,{N}ist aber sehr effektiv im Fernkampf{N}mit hoherer Genauigkeit im Halb-Zoom-Modus." eng="It has a lower fire rate than the Submachine Gun but makes up for this with a much higher accuracy while zoomed in half-way." tur="Submachine Gun'a kıyasla daha düşük bir atış hızına sahiptir fakat bu açığı yakınlaştırma yapılarak sağlanan yüksek isabet oranıyla kapatır." fre="Une arme possédant une vitesse de tir moins élevée que le Submachine gun. Mais qui est très utile à longue distance grâce à la plus grande précision avec le zoom." spa="Tiene menor velocidad de disparo que Submachine Gun. Pero tiene gran efecto a larga distancia con mayor precisión en modo zoom-in." ita="E' più lenta della Submachine Gun. Ottimo è l'effetto a lunga distanza grazie all'alta precisione." rus="Менее скорострельно, чем Автоматические Пистолеты, но гораздо точнее на больших расстояниях засчет зума." ame="It has a lower fire rate than the Submachine Gun but makes up for this with a much higher accuracy while zoomed in half-way." cns="具有高射速和变焦功能的高效率远程武器" tha="มันมีอัตราการยิงที่ต่ำกว่า Submachine Gun แต่มีความแม่นยำที่สูงโดยใช้การ zoom." twn="透過高執彈率和半縮放功能，在對牽制長距離攻擊時可發揮極大效果的武器。" jap="高い集弾率と半ズームイン機能を持ち、長距離けん制で本領を発揮する武器。" idn="Senjata ini memiliki tingkat tembakan yang rendah dari Submachine Gun tapi memiliki akurasi yang lebih tinggi jika di zoom."/>`
    }

}



function MakeSentryGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Sentry Gun ID not defined at Make Sentry Gun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Sentry Gun'}" spa="${ItemName || 'Sentry Gun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="전방의 적을 찾아 공격하는 설치형 무기. 설치한 방향을 기준으로 공격하며 설치한 방향 반대편은 공격하지 않는다." ger="Eine Installationswaffe, die Gegner aufspurt und sie dann angreift. Die Angriffsrichtung richtet sich nach der Installationsrichtung, sie kann nicht in die entgegengesetzte Richtung schießen." eng="Installation weapon that finds and attacks an enemy. It only attacks enemies in front of it, and doesn't change to the opponents direction." tur="Düşmanı bulup düşmana saldıran kurmalı silah. Sadece önündeki düşmanlara saldırır ve rakiplerin yönüne göre dönmez." fre="Installation weapon qui attaque les ennemis en les détectant. Il attaque dans la direction de l'installation, et n'attaque pas dans la direction opposée." spa="Arma de instalación que ataca enemigos cuando los encuentra. Ataca en la dirección instalada, y no ataca en la dirección del oponente." ita="Arma con cui attaccare i nemici che si scovano. Colpisce nella direzione scelta e non in quella dell'avversario." rus="Стационарная установка, испепеляющая всех, кто попадает в поле видимости, согласно направлению установки." ame="Installation weapon that finds and attacks an enemy. It only attacks enemies in front of it, and doesn't change to the opponents direction.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Install Sentry Gun." cns="可以自动寻找和攻击敌人的特殊武器，但只能攻击正前方的敌人。" tha="อาวุธติดตั้งที่ออกหาและโจมตีศัตรู มันโจมตีได้แต่ศัตรูที่อยู่เบื้องหน้า และไม่สามารถเปลี่ยนทิศตามเป้าหมายได้" twn="尋找前方的敵人並且進行攻擊的設置型武器。以設置的方向為基準進行攻擊，但是不會對設置方向的反面進行攻擊。" jap="前方の相手を探して攻撃する設置型武器。設置した方向を基準に攻撃するため、設置方向の反対側は攻撃できない。" idn="Pemasangan senjata yang dapat menemukan dan menyerang musuh. Hanya menyerang musuh di depan, tidak menyerang musuh dari arah lain."/>`
    }

}


function MakeSentryStunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Sentry Stun ID not defined at Make Sentry Stun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Sentry Stun'}" spa="${ItemName || 'Sentry Stun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="근거리에 들어온 적을 멀리 날려버리는 설치형 무기. 센트리건과 달리 360도 전 방향에 들어온 적을 모두 공격한다." ger="Installationswaffe, die Gegner in der nahen Umgebung angreift. Im Gegensatz zur Sentry Gun, greift sie Gegner in 360°-Richtung an." eng="Installation weapon which stuns and decreases HP{N}to nearby enemies. Unlike the sentry gun, this weapon also affects all enemies within the 360 degree radius." tur="Yakındaki düşmanları{N}sersemleten ve HP'lerini azaltan kurmalı silah. Sentry gun'ın aksine bu silah 360 derecelik çap içerisinde bulunan tüm düşmanları etkiler." fre="Installation weapon qui assomme et réduit les HP des ennemis qui sont proches. Contrairement au Sentry Gun, cette arme affecte tous les ennemis se trouvant autour." spa="Arma de instalación que aturde y disminuye el HP de enemigos cercanos. A diferencia del Sentry Gun, este arma también afecta a todos los enemigos dentro del radio de 360 grados." ita="Installation weapon che stordisce e riduce gli HP dei nemici vicini. A differenza dei Sentry Gun, quest'arma ha effetto sui nemici entro un angolo di 360 gradi." rus="Стационарная установка, которая оглушает и повреждает противников рядом. В отличие от Турели, это оружие поражает врагов на 360 градусов." ame="Installation weapon which stuns and decreases HP{N}to nearby enemies. Unlike the sentry gun, this weapon also affects all enemies within the 360 degree radius.{N}{CB-0,255,0,255}[Operation]{N}Left click: Install Senty Nell" cns="能把近离的敌人远远击飞的武器。可以360度全方位攻击敌人。" tha="อาวุธติดตั้งที่ทำให้เป้าหมาย stun และลด Hp {N}ของเป้าหมายใกล้ๆ  ไม่เหมือน sentry gun ตรงที่ อาวุธชิ้นนี้ส่งผลใส่ศัตรูทั้งหมด 360 องศากระจายตัวออกไป" twn="將進入到近距離的敵人推飛的設置型武器。與哨兵警戒槍不一樣，是可以對360度全部方向的敵人進行攻擊的武器。" jap="近い距離に入ってきた相手を遠くへ飛ばしてしまう設置型武器。セントリーガンと違って、360度、全ての方向の敵を攻撃する。" idn="Pemasangan senjata yang memberikan stun dan mengurangi HP{N}pada musuh disekitar. Tidak seperti Sentry Gun, senjata ini menyerang musuh dalam radius 360 derajat."/>`
    }

}


function MakeSharpshootingDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Sharp shooting ID not defined at Make Sharp shooting Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Sharp shooting'}" spa="${ItemName || 'Sharp shooting'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="총기에 부착된 스코프를 통해 먼 곳의 상대를 노릴 수 있는 볼트액션형 저격 무기. 줌 인 시 카메라 보정으로 인해 미세 이동이 발생 한다." ger="Bolt Action Gun, mit der man den Feind aus weiter Entfernung anvisieren kann. Wegen ihrer hohen Genauigkeit ist im herangezoomten Modus eine leichte Bewegung vorhanden." eng="Bolt Action Gun weapon that is able to target the enemy from the long distance.  Because of its accuracy, there will be a small movement during the zoom in mode." tur="Düşmanı uzun mesafeden hedef alabilen Sürgü Mekanizmalı silah.  İsabet oranı nedeniyle yakınlaştırma modunda küçük bir hareket olacaktır." fre="Bolt Action Gun, une arme capable de cibler un ennemi de loin. Sa haute précision entraîne un léger mouvement en mode zoom avant." spa="El arma Bolt Action Gun es capaz de enfocar al enemigo desde una larga distancia.  Debido a su precisión, habrá un pequeño movimiento durante el modo zoom." ita="La Bolt Action Gun in grado di mirare al nemico da una distanza molto lunga. A causa della sua precisione, durante lo zoom si verificherà un piccolo movimento." rus="С помощью этой винтовки одиночного действия вы можете целиться во врага с дальних расстояний. Благодаря точности во время прицеливания допустимо небольшое движение." cns="远程狙击武器。可以通过瞄准镜攻击远处的敌人。变焦时，由于视角修正，准星会产生些许移动。" twn="測試用武器" jap="テスト用武器"/>`
    }

}


function MakeShotGunDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error(' ShotGun ID not defined at Make  ShotGun Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || ' ShotGun'}" spa="${ItemName || ' ShotGun'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="근거리에서 효력을 발휘하는 무기. 1회에 다수의 탄환을 발사할 수 있으며 상대방을 밀어낼 수 있어 근접 무기를 비교적 쉽게 상대할 수 있다." ger="Sehr effektive Waffe im Nahkampf. Feuert mehrere Kugeln gleichzeitig ab und wirft die Gegner zurück. Mit ihr braucht man sich vor Nahkampfangriffen nicht fürchten." eng="Weapon effective in close range. You can shoot serveral bullets at one time and push opponents and face close range weapons easily." tur="Kısa mesafede etkili bir silah. Tek seferde birkaç mermi atabilirsin ve rakipleri püskürterek kolayca yakın mesafe silahlarıyla yüzleşebilirsin." fre="Arme efficace à courte portée. Tu peux tirer plusieurs balles en même temps et repousser les adversaires, et ainsi affronter plus facilement les armes de corps à corps ." spa="Arma efectiva a corta distancia. Puedes disparar varias balas de una vez, hacer retroceder a los oponentes y enfrentar armas a corta distancia fácilmente." ita="Arma utile negli attacchi a distanza ravvicinata. Puoi sparare numerosi proiettili in una sola volta, respingere gli avversari e affrontare facilmente le armi a distanza ravvicinata." rus="Оружие, эффективное на близкой дистанции. Стреляет несколькими пулями за раз и отталкивает врагов, удобно против ближнего оружия." ame="Weapon effective in close range. You can shoot serveral bullets at one time and push opponents and face close range weapons easily.{N}{CB-0,255,0,255}[Operation]{N}Left click: Shoot" cns="适合在近距离使用的武器。一次可以发射多个子弹，有几率发动击飞效果，适合对付近距离的敌人。" tha="อาวุธสำหรับการโจมตีระยะใกล้. คุณสามารถยิงกระสุนจำนวนมากในครั้งเดียว." twn="在近距離能夠發揮效力的武器。一次可以發射多個子彈，可將對方推出去，可比較能夠輕鬆對付近距離的武器。" jap="近距離で力を発揮する武器。一度で多くの弾丸を発射でき、相手を押し出すこともできるため、近接武器を相手しやすい。" idn="Senjata yang efektif dalam jarak dekat. Kamu bisa menembakkan beberapa peluru secara bersamaan untuk menekan musuh dan menghadapi senjata jarak dekat dengan mudah."/>`
    }

}


function MakeSmashDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Smash Rifle ID not defined at Make Smash Rifle Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Smash Rifle'}" spa="${ItemName || 'Smash Rifle'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="비교적 많은 장탄 수를 가지고 있으며 근접 날리기 공격이 가능한 무기. 많은 장탄 수와 좋은 탄착군으로 중거리 공격에 쉽게 사용할 수 있으며 근접한 적은 날리기 공격으로 날려버릴 수 있다." ger="Besitzt die Vorteile eines großen Magazins{N}und Nachkampfangriffen.{N}Sehr effizient bei Angriffen auf mittlere Entfernung{N}aufgrund des großen Magazins und des starken Einschlags.{N}Gegner konnen ausserdem mit Nahkampfattacken angegriffen werden." eng="Supports lots of ammo and close range attacks. Efficient for medium range attacks due to lots of ammo and powerful impact. Also can melee attack close enemies." tur="Çok sayıda mermi alır ve yakın mesafe saldırıları etkilidir. Çok sayıda mermi alması ve güçlü tesiriyle orta mesafe saldırılarda etkilidir. Ayrıca yakındaki düşmanlar için yakın dövüş silahı olarak da kullanılabilir." fre="Une arme avec beaucoup de munitions et la possibilité d'effectuer des attaques au{N}corps à corps. Très efficace pour attaquer à distance moyenne grâce aux munitions et aux puissants impacts. Permet aussi d'attaquer les ennemis au corps à corps." spa="Soporta mucha munición{N}y ataques a corta distancia. Eficiente para ataques a media distancia debido a la cantidad de munición y a su poderoso impacto. También puede atacar melé a enemigos cercanos." ita="Permette di avere molte munizioni e di attaccare da vicino. Efficace negli attacchi a media distanza grazie alla quantità di munizioni e alla potenza dell'impatto. Possibilità di sfruttare gli attacchi melee coi nemici vicini." rus="Имеет много патронов и может атаковать вблизи. Идеально для средних дистанций из-за большого боезапаса и убойной силы. Также можно бить противников вплотную." ame="Supports lots of ammo and close range attacks. Efficient for medium range attacks due to lots of ammo and powerful impact. Also can melee attack close enemies.{N}{CB-0,255,0,255}[Operation]{N}Left Click: Shoot{N}Right Click: Melee attack" cns="弹药数量较多，比较适合中距离射击。按右键可以发动近战攻击，有几率击飞敌人。" tha="มีกระสุนจำนวนมาก และโจมตีได้ดีในระยะใกล้. พลังโจมตียังคงอยู่หากยิงในระยะปานกลาง พร้อมจำนวนกระสุนที่มาก. พร้อมทั้งยังสามารถโจมตีแบบระยะประชิดได้ (Melee).{N}{CB-0,255,0,255}[Operation]{N}กดปุ่มเม๊าส์ซ้าย: Shoot{N}กดปุ่มเม๊าส์ขวา: Melee attack" twn="可以裝備較多的裝彈數，可進行近距離飛射攻擊的武器。透過多數的裝彈數以及好的彈著點，可輕鬆地進行中距離的攻擊，另外對近距離的敵人則可以透過非社的攻擊使敵人飛出去。" jap="比較的装弾数が多く、近接飛ばし攻撃ができる武器。中距離攻撃に使いやすく、近距離の敵はブッとばせる。" idn="Mendukung banyak peluru dan serangan melee. Efisien untuk serangan jarak menengah karena memiliki banyak peluru dan serangan kuat. Juga bisa digunakan untuk menyerang musuh yang menggunakan senjata jarak dekat."/>`
    }

}


function MakeSparkRifleDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Spark Rifle ID not defined at Make Spark Rifle Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Spark Rifle'}" spa="${ItemName || 'Spark Rifle'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="발사 시 탄착군을 보정하는 무기. 거리와 공격 시간이 길어질수록 보정 수치가 낮아진다. 확률적으로 크리티컬 히트가 발생한다." ger="Hilft beim Zielen, ist aber bei Attacken über große Entfernungen und schnellem Schießen weniger genau. Gibt zufällig kritische Treffer ab." eng="Helps to aim, but it is less accurate at long-distance attacks and rapid shooting. Randomly fires a critical shot." tur="Nişan almada iyidir fakat uzun mesafe saldırılarda ve seri atışta isabet oranı daha düşüktür. Rasgele kritik atış yapılabilir." fre="Facile à viser, mais manque de précision et de rapidité en longue portée. Tire des coups critiques aléatoirement." spa="Ayuda tu puntería, Pero es menos exacta para ataques a larga distancia y tiene rapido disparo. Aleatoriamente hace un disparo Critical" ita="Aiuta a prendere la mira, ma è meno precisa negli attacchi a distanza e rapidi. Spara un proiettile critico in modo casuale." rus="Помогает прицелится, но имеет маленькую точность на дальних расстояниях и при быстром огне. Случайно стреляет критическими выстрелами." cns="射击时会自动修正弹道的武器，但攻击距离越远、攻击时间越长，修正准确率越低。有一定几率会对敌人发动暴击。" tha="ช่วยในเรื่องการเล็ง แต่ความแม่นยำจะตกลงในระยะไกล และ การยิงต่อเนื่อง  มีโอกาสยิงแบบ critical ได้" twn="發射時能夠協助命中的武器。距離與攻擊時間越長，輔助校正的數值就會降低。在一定機率下會產生暴擊。" jap="発射時、命中精度を補正する武器。距離が遠くなったり、攻撃時間が長くなると、補正効果がどんどん弱くなる。確率によりクリティカルヒットが発生する。" idn="Membantu dalam membidik, tapi akurasinya berkurang jika menyerang dari jarak jauh dan menembak secara beruntun. Memberikan serangan kritikal secara acak."/>`
    }

}


function MakeSubmachineDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Submachine ID not defined at Make Submachine Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Submachine'}" spa="${ItemName || 'Submachine'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="빠른 연사 속도와 무난한 집탄률로 중거리 공격에 적합한 무기." ger="Eine brauchbare Waffe fur mittlere Distanz mit Schnellschießfunktion und mittelmaßiger Genauigkeit." eng="Suitable weapon for medium distance attacks with rapid fire rate and average accuracy." tur="Seri atış özelliği ve isabet oranıyla orta mesafe saldırılar için uygun bir silah." fre="Une arme faite pour les attaques à moyenne distance avec une vitesse de tir rapide et une précision d'ordre général." spa="Arma adecuada para ataque a media distancia con gran velocidad de disparo y precisión." ita="Arma per attacchi a media distanza{N}con una buona velocità e precisione." rus="Незаменимое оружие для атак на средней дистанции,{N}с хорошей скорострельностью и точностью." ame="Suitable weapon for medium distance attacks with rapid fire rate and average accuracy.{N}{CB-0,255,0,255}[Operation]{N}Click left mouse button: Fire weapon." cns="可以快速射击的双枪，但是命中率一般，适合中距离攻击的武器。" tha="อาวุธที่เหมาะสำหรับการโจมตีระยะปานกลาง พร้อมกับอัตราการยิงที่เร็วขั้น." twn="以快速的連續射擊速度和精準的命中率著稱，適合進行中距離攻擊的武器。" jap="素早い連射速度と無難な集弾率で中距離攻撃に適した武器." idn="Senjata yang sesuai untuk serangan jarak menengah dengan tingkat tembakan cepat dan akurasi rata-rata."/>`
    }

}


function MakeTurrentDesc(NameID, DescID, ItemName){
     if(!NameID || !DescID || !ItemName){
    console.error('Turrent ID not defined at Make Turrent Desc.');
    return false;
    }

    return {
        NameDesc: `<string key="NAME${NameID}" eng="${ItemName || 'Turrent'}" spa="${ItemName || 'Turrent'}"/>`,

        TipDesc: `<string key="TIP${DescID}" kor="다수의 적을 효과적으로 공격하기 위한 게틀링건.더 강력한 화력을 위해서는 거치가 필요하다. 거치 시 해제 전까지 움직일 수 없지만 모든 상태이상 공격에 면역이 된다." ger="Gatling Gun für multiple Ziele. Kann für mehr Angriffskraft installiert werden." eng="Multiple targeting Gatling Gun. You can install this weapon for more power attack." tur="Çoklu hedef alma özelliğine sahip mitralyöz. Daha güçlü saldırı için bu silahı kurabilirsin." fre="Fusil mitrailleur à cibles multiples. Vous pouvez installer cette arme pour plus de puissance d'attaque." spa="Multiple targeting Gatling Gun. You can install this weapon for more power attack." ita="Mitragliatrice che colpisce diversi obbiettivi. Puoi installarla per aumentare l'attacco." rus="Пулеметы для множественных целей. Вы можете установить это оружие для большей огневой мощи." cns="拥有强大火力的单兵炮塔。搁置后可发动更强烈的火力攻击。搁置后是无法移动的，但对所有攻击免疫。" twn="為有效攻擊多數敵人的加特林槍，為了獲得更強悍的火力，是必須要經過過程的，從經歷過程到解除之前，雖然無法移動，但是可以對所有的異常狀態呈現免疫效果。" jap="多数の相手を効果的に攻撃するためのガトリングガン。より火力を高めるには、地面へ設置が必要だ。地面に設置した場合、設置を解除するまで動かすことはできないが、全ての状態異常攻撃に対して、免疫ができる。" idn="Gatling Gun bisa membidik banyak target sekaligus. Kamu bisa memasang senjata ini untuk meningkatkan serangan."/>`
    }

}




module.exports = { MakeTurrentDesc, MakeSubmachineDesc, MakeSparkRifleDesc, MakeSmashDesc, MakeShotGunDesc, MakeSharpshootingDesc, MakeSentryStunDesc, MakeSentryGunDesc, MakeSemiRifleDesc, MakeRailGunDesc, MakeRocketLauncherDesc, 
MakeRevolverDesc, MakeRescueGunDesc, MakeMineGunDesc, MakeMindShockDesc, MakeMindHealDesc, MakeLightMachineGunDesc, MakeLightBombDesc, MakeHomingDesc, MakeHeavyMachineGunDesc, MakeHandGunDesc, MakeGaussDesc, MakeEarthBombDesc, MakeDualMagnumDesc, MakeCannonDesc, MakeAssaultDesc, MakeAirGunDesc, MakeVitalClawDesc, MakeTwinBladesDesc, MakeSigmaBladeDesc, MakeKatanaDesc, MakeIronBootsDesc, MakeFistDesc, MakeExoDesc, MakeDaggerDesc, MakeBatDesc, MakeCounterSwordDesc, MakePlasmaSwordDesc} ;