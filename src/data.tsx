import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';
import Image6 from './images/image6.jpg';
import Image7 from './images/image7.jpg';
import Image8 from './images/image8.jpg';
import Image9 from './images/image9.jpg';
import Image10 from './images/image10.jpg';
import Image11 from './images/image11.jpg';
import Image12 from './images/image12.jpg';

const structures = [
    {
        img: Image1,
        title: "Hibiki 12 Year Old",
        description: [
            `Love me whisky - got one of these when it won awards - wondered what all the fuss was about - not disappointed one of my fav…a nice orangey / marmalade  with a nice tingle at the end - beautiful.  Great present for a whisky lover or a whisky party.`,
            `Sophisticated and exotic, Hibiki exudes the most wonderful collection of aromas and tastes. As a student, this one is very s…m. Finish: Very long, sweet with an enduring spiciness - you are left in no doubt that you have had something very special.`
        ],
    },
    {
        img: Image2,
        title: "Nikka All Malt",
        description: [
            `Very good entry into Japanese whisky. Smooth, smoky with a sweet finish pairs good with a mild flavoured cigar,
             the smoky start and the smoke from the cigar cancel each other out and they bring all the notes from both to life.`,
            `A clear decrease in quality compared with earlier bottles I've had a few years ago.
             Too young, spirity, burnt on the nose. The taste is perhaps a little bit better, but way behind other malt whisky's in this price range. Will not buy again.`
        ]
    },
    {
        img: Image3,
        title: "Hakushu 12 Year Old",
        description: [
            `Hakushu 12, unlike the Yamazaki 12 & discontinued Hibiki & Yoichi 12 yr olds, is still somewhat available in the U.S. 
            (speci…e mostly fruity notes that dominate.  Probably a great teaser for the uninitiated of the joys that peated whisky can bring.`,
            `Intense flavors of forest and spice with a nice subtle smoke lingering. Great stuff but it comes at a price. 
            Is it worth the…ant a clean fresh scotch. Id give it a 5 but that is reserved for a scotch that makes me want to never drink anything else.`
        ]
    },
    {
        img: Image4,
        title: 'Yamazaki 12 Year Old',
        description: [
            `Good, but not any better than the rest of the pack in the price range. There are in every good liquor store several scotches…able to the nose and the palate.
             It lacks just a bit of fullness, however, necessary to move toward the front of the class.`,
            `Simply doesn’t have the depth and range of flavor as most Japanese whiskies in the 75-125 price range. If you’re looking to …t.
             But if you’re considering other Japanese whiskeys around 100, almost anything on that list would likely be more dynamic.`
        ]
    },
    {
        img: Image5,
        title: "Hibiki 17 Year Old",
        description: [
            `Sitting atop the 52nd floor of the Park Hyatt in Tokyo at the New York bar one evening, I was seated (by pure luck) at argua…s it morphs across the palette. 
            Extraordinary whisky whilst top of the world...if only for a few fleeting moments. Stellar.`,
            `Wow! Highly aromatic! Love the nose. Taste is a rush of vanilla that dives into cocoa, sherry wood, and orange. 
            It's finish …ith amaretto and the previous cocoa. Don't add any water, it ruins the aromatic complexity. Definitely one of my favorites!`
        ]
    },
    {
        img: Image6,
        title: "Nikka Coffey Grain Whisky",
        description: [
            `I bought a bottle of this at a Whisky tasting event.
             I had never tried Japanese Whisky before and was on a mission! I was su…lts but this grain whisky is smooth and round, slightly sweet vanilla-like and a long lasting pleasant aftertaste. Love it.`,
            `Deep and rich nose packed with stone fruits, berries, caramel, and vanilla. Definitely sweet but a presence of grass and soi…
             vanilla and oak that lasts and lasts like it was shot out of a cannon. It just keeps going. A real hidden gem of a whisky.`
        ]
    },
    {
        img: Image7,
        title: 'Hakushu 12 Year Old 43.5%',
        description: [
            `I agree it's sweet-- a little smoke but I don't get any peat----- a lot of people will like this one--- 
            I think it's closer …please the mass--- a blend from the same distillery and almost blended into a sweet surprise your drinking alcohol drink/--.`,
            `this is an outstanding 12 yo whisky. I think the description by the chaps of Master of Malt explains the character of this w… 
            would probably go as far as to say it's the best 12 yo whisky I have had the pleasure of drinking (and I have tried a few)"`
        ]
    },
    {
        img: Image8,
        title: 'Yamazaki Sherry Cask 2016',
        description: [
            `by scribbling that crap across the back of the label you are creating a unique, one off product.
             Ladies and Gentleman, this is your last chance to buy....The Master of Malt Olfactory Bulb Edition`,
            `Folks - we've now published a blog post to explain the reasons behind the method of sale here (Drams, Lottery, Auction).
             If …o try it already - please leave your user review (and don't forget the star rating) on this page.The Chaps at Master of Malt`
        ]
    },
    {
        img: Image9,
        title: 'Hibiki 21 Year Old',
        description: [
            `Lives up to all the hype. I way over paid because I had to see what all the fuss was. Not as complex as I was hoping but the…right.
             If you can get this for less than $300 it's a steal. All Suntory is overpriced but this stuff stands up to the best.`,
            `Had it once . Best 21 yo out there by far. Only problem is getting a hold of it.
             Hibiki of any variant is insanely hard to g…s on another one of these. It blows everything else out of the water. I'd love to know when yall will have another shipment`
        ]
    },
    {
        img: Image10,
        title: 'Nikka Whisky From The Barrel',
        description: [
            `Color: GoldenNose: \tSweet, honey, apples, melon, liquorice, mint, chocolatePalate:
             \tAfter brushing teeth: dry/sweet entry,…n after having it sits for 30min. great whisky to sip on with a long finish, can savor of the flavor long after swallowing.`,
            `This is about as good as affordable blends get, but the real star of the Nikka line-up is, alas, not on your site
            .Their Yoic…good - drinkable everyday without ever getting tired of it.... And for around AUD65 thanks to low taxes, it's truly sinful.`
        ]
    },
    {
        img: Image11,
        title: 'The Yamazaki Single Malt Whisky - Distiller’s Reserve',
        description: [
            `better than I expected it to be. Just by hearing what was in this bottle had me excited enough to be underwhelmed but
             I was still blown away by the complexity in flavor, and amazingly smooth finish. For the price this is a steal`,
            `Extremely smooth yet deep, rich aromas. Very good and the price is right.`,
            `Simply an amazing whisky.  Please add a few drops of water or a small ice cube. It is transformative....wow.`
        ]
    },
    {
        img: Image12,
        title: 'Hibiki Japanese Harmony',
        description: [
            `Well-blended and interesting enough mixture of the Yamazaki and Hakushu flavour profiles (apricots, grass, something floral)…s.
             Not really worth getting over the rather superb individual malts, in fact a non-starter with the recent price inflation.`,
            `No, it did not work for me. My mistake, as I prefer single malt, but
             I let myself be convinced by the guy a the duty free co…and sell it for a fortune, OR let sit down and produce something harmonious and lovely. Lovely indeed, but nothing special.`
        ]
    },

];

export default structures;