# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
Profile.destroy_all
Video.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("profiles")
ActiveRecord::Base.connection.reset_pk_sequence!("videos")

User.create!(email: "Email", password: "Password")

# v = Video.create!(title: "test", description: "test", year: 2002, genre: "test")
# # v.video_file.attach(io: open("https://endflix-seeds.s3.amazonaws.com/TestVid.mp4"), filename: "TestVid.mp4" )
# v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/TestVid.mp4"),filename: 'TestVid.mp4')


v = Video.create!(title: "Shang Chi", description: "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.", year: 2021, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/shangchi2.mp4"), filename: 'shangchi2.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/shangchitn_1_914x514.jpeg"), filename: 'shangchitn_1_914x514.jpeg' )
# v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/shangchitn_1_914x514.jpeg"), filename: "shangchitn_1_914x514.jpeg")
 
v = Video.create!(title: "The Batman", description: "The Riddler plays a dangerous game of cat and mouse with Batman and Commissioner Gordon in Gotham City.", year: 2022, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Batman.mp4"), filename: 'Batman.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/batmanTB.jpeg"), filename: "batmanTB.jpeg")

v = Video.create!(title: "Spider Man No Way Home", description: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. ", year: 2021, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/SNWH.mp4"), filename: 'SNWH.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/nwhTBjpeg.jpeg"), filename: "nwhTBjpeg.jpeg")

v = Video.create!(title: "Gundam Hathaway", description: "After Char's rebellion, Hathaway Noa leads an insurgency against Earth Federation, but meeting an enemy officer and a mysterious woman alters his fate.", year: 2021, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/HathAway.mp4"), filename: 'HathAway.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/hathawaytb.jpeg"), filename: "hathawaytb.jpeg")

v = Video.create!(title: "Venom", description: "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote.", year: 2021, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/VLTBC.mp4"), filename: 'VLTBC.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/venomTB.jpeg"), filename: "venomTB.jpeg")

v = Video.create!(title: "Arcane", description: "The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.", year: 2021, genre: "Action")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Acana.mp4"), filename: 'Acana.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/arcaneTB.jpeg"), filename: "arcaneTB.jpeg")





v = Video.create!(title: "Demon Slayer Mugen Train", description: "A boy raised by boars, who wears a boar's head, boards the Infinity Train on a new mission with the Flame Pillar along with another boy who reveals his true power when he sleeps. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it. ", year: 2021, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/MugenTrain.mp4"), filename: 'MugenTrain.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/mtTB.jpeg"), filename: "mtTB.jpeg")

v = Video.create!(title: "Attack On Titan", description: "When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. ", year: 2021, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/AOTmp4.mp4"), filename: 'Acana.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/aottb.jpeg"), filename: "aottb.jpeg")

v = Video.create!(title: "Spirited Away", description: "Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents. ", year: 2004, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/SpiritedAway.mp4"), filename: 'SpiritedAway.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Spirited-AwayTB.jpeg"), filename: "Spirited-AwayTB.jpeg")

v = Video.create!(title: "Howl's Moving Castle", description: "Sophie has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl, who lives in a magical flying castle. ", year: 2005, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Howls.mp4"), filename: 'Howls.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/HMCTB.jpeg"), filename: "HMCTB.jpeg")

v = Video.create!(title: "Violet Evergarden", description: "An emotionally detached soldier settles into postwar life as a ghostwriter and begins to reconnect with her feelings while searching for the meaning behind her former commander's final words to her.", year: 2018, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/VE.mp4"), filename: 'VE.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/violet-evergardenTB.jpeg"), filename: "violet-evergardenTB.jpeg")

v = Video.create!(title: "Princess Mononoke", description: "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. ", year: 1997, genre: "Anime")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/PrincessMono.mp4"), filename: 'PrincessMono.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/princess-mononokeTB.jpeg"), filename: "princess-mononokeTB.jpeg")



v = Video.create!(title: "Vincenzo", description: "During a visit to his motherland, a Korean-Italian mafia lawyer gives a conglomerate a taste of its own medicine with a side of justice. ", year: 2021, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Vincenzo.mp4"), filename: 'Vincenzo.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Vincenzo_914x514.jpeg"), filename: "Vincenzo_914x514.jpeg")

v = Video.create!(title: "Squid Game", description: "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.", year: 2021, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/SquidGame.mp4"), filename: 'SquidGame.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/sqTB.jpeg"), filename: "sqTB.jpeg")

v = Video.create!(title: "While You Were Sleeping", description: "A young woman has visions through her dreams of terrible things that will happen to people in the future. A prosecutor tries to prevent these dreams from happening in real life.", year: 2017, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/WYWS.mp4"), filename: 'WYWS.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/WYWSTB.jpeg"), filename: "WYWSTB.jpeg")

v = Video.create!(title: "Encanto", description: "The Madrigals are an extraordinary family who live hidden in the mountains of Colombia in a charmed place called the Encanto. The magic of the Encanto has blessed every child in the family with a unique gift -- every child except Mirabel. ", year: 2021, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Encanto.mp4"), filename: 'Encanto.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/encantoTB.jpeg"), filename: "encantoTB.jpeg")

v = Video.create!(title: "Coco", description: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. ", year: 2017, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/Coco.mp4"), filename: 'Coco.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/cocoTB.jpeg"), filename: "cocoTB.jpeg")

v = Video.create!(title: "Peaky Blinders", description: "Britain is a mixture of despair and hedonism in 1919 in the aftermath of the Great War. Returning soldiers, newly minted revolutions and criminal gangs are fighting for survival in a nation rocked by economic upheaval. ", year: 2013, genre: "Foreign")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/PeakyBlinders.mp4"), filename: 'PeakyBlinders.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/pbTB.jpeg"), filename: "pbTB.jpeg")


v = Video.create!(title: "Sweet Home", description: "As humans turn into savage monsters, one troubled teenager and his neighbours fight to survive and to hold onto their humanity. ", year: 2020, genre: "Horror")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/SweetHome.mp4"), filename: 'SweetHome.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/sweet-homeTB.jpeg"), filename: "sweet-homeTB.jpeg")

v = Video.create!(title: "The Conjuring", description: "The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes and Carey W. Hayes. It is the inaugural film in the Conjuring Universe franchise. ", year: 2013, genre: "Horror")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/TC.mp4"), filename: 'TC.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/thc1TB.jpeg"), filename: "thc1TB.jpeg")

v = Video.create!(title: "The Conjuring 2", description: "In 1977, paranormal investigators Ed and Lorraine Warren come out of a self-imposed sabbatical to travel to Enfield, a borough in north London. There, they meet Peggy Hodgson, an overwhelmed single mother of four who tells the couple that something evil is in her home. ", year: 2016, genre: "Horror")
v.video.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/TC2.mp4"), filename: 'TC2.mp4')
v.thumbnail.attach(io: URI.open("https://endflix-seeds.s3.amazonaws.com/thc2tb.jpg"), filename: "thc2tb.jpg")









 