import { Contents, ComFooter, TenpoList, FormList } from '../types/MenuItems';

export const content : Contents[] = [
    {
        id:1,
        title:"ご挨拶",
        image:"/image/build001.jpg",
        text:"弊社ホームページをご覧いただきありがとうございます。\n 私たちは、地域に根ざした建設会社として、戸建て住宅、店舗、公共施設、マンションをはじめ、\n リフォーム・耐震補強工事など、多様なご要望にお応えしております。",
        url:""
    },
    {
        id:2,
        title:"これまでの実績",
        image:"/image/build002.jpg",
        text:"実績例 : \n ①カフェ店舗新築工事 \n ②都内ワンルーム型マンション新築工事 \n ③戸建住宅耐震補強リフォーム",
        url:""
    },
    {
        id:3,
        title:"全国各地対応可能",
        image:"/image/build003.jpg",
        text:"各地域に支店を構え全国各地で施工可能にし、お客様のご要望に寄り添い満足いただいています。",
        url:""
    }
]

export const footerList:ComFooter[] = [
    {
        id:1,
        name:"Top",
        url:"/Company"
    },
    {
        id:2,
        name:"Menu",
        url:""
    },
    {
        id:3,
        name:"portfolio",
        url:"/"
    }
]

export const workList: Contents[] = [
    {
        id:1,
        title:"新築戸建住宅",
        image:"/image/buildList2.jpg",
        text:"東京都内の閑静な住宅地に広々とした３階庭付きの戸建て住宅を施工させていただきました。\n お客様と密にコミュニケーションをとりこだわり抜いたお家に仕上がり、とても満足していただけました！",
        url:""
    },
    {
        id:2,
        title:"耐震補強リフォーム",
        image:"/image/buildList5.jpg",
        text: "築30年の木造住宅に耐震補強を行い、安全で安心して住める住環境に生まれ変わりました。\n構造計算から補強工事まで一貫して対応し、お客様に安心をお届けできました。",
        url:""
    },
    {
        id:3,
        title:"中古マンションリフォーム",
        image:"/image/buildList3.jpg",
        text: "築年数の経ったマンションの内装・水回りを全面リフォーム。\n機能性とデザイン性を両立させ、お客様の理想の住まいを実現しました。",
        url:""
    },
    {
        id:4,
        title:"新築ワンルームマンション",
        image:"/image/buildList4.jpg",
        text: "若年層向けのワンルームマンションを新築施工。\n防音性・断熱性を高める施工を行い、快適に過ごせる住環境を提供しました。",
        url:""
    },
    {
        id:5,
        title:"戸建耐震補強リフォーム",
        image:"/image/buildList6.jpg",
        text: "戸建住宅の耐震診断を行い、不足箇所に耐震補強工事を実施。\n災害時にも安心して暮らせる住まいへとリフォームしました。",
        url:""
    },
    {
        id:6,
        title:"賃貸マンション清掃工事",
        image:"/image/buildList1.jpg",
        text: "入居者様が快適に過ごせるよう、共用部・外壁の清掃工事を実施しました。\n建物全体の美観が向上し、管理会社様・入居者様ともに大変喜んでいただけました。",
        url:""
    },
]

export const tenpoList:TenpoList[] = [
    {
        id:1,
        name:"北海道支店",
        area:"北海道全域",
        phone:"01-1234-5678",
        address:"北海道道産子五稜星4869",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11898.24480862433!2d140.74374172044665!3d41.7946694419276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef46bb53c0eb3%3A0x75f5f82028f1a89e!2z5LqU56ic6YOt44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1751971277173!5m2!1sja!2sjp"
    },
    {
        id:2,
        name:"東北支店",
        area:"東北地域",
        phone:"02-2222-4444",
        address:"岩手県仙台市ねぷた郡きりたんぽ1122",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12117.577540921684!2d140.47374511943624!3d40.59912144447358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b01208f88e1c3%3A0x59ebc351d1c2bd93!2z5byY5YmN44Gt44G344Gf44G-44Gk44KK77yI6aeF5YmN44Kz44O844K577yJ!5e0!3m2!1sja!2sjp!4v1751971518443!5m2!1sja!2sjp"
    },
    {
        id:3,
        name:"日光支店",
        area:"北関東３県",
        phone:"03-1234-9876",
        address:"群馬県水戸市日光10409",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12786.08061054882!2d139.58846831635628!3d36.75808735799028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601fa6c553212035%3A0xab505b717af00e94!2z5pel5YWJ5p2x54Wn5a6u!5e0!3m2!1sja!2sjp!4v1751971798204!5m2!1sja!2sjp"
    },
    {
        id:4,
        name:"関東支店",
        area:"一都三県",
        phone:"04-1111-1111",
        address:"千葉県さいたま市みなとみらい1-1-1",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13000.389312877185!2d139.63286696536872!3d35.45238481440838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf885807149%3A0x94947dd82acc3d73!2z5qiq5rWc6LWk44Os44Oz44Ks5YCJ5bqr!5e0!3m2!1sja!2sjp!4v1751971571662!5m2!1sja!2sjp"
    },
    {
        id:5,
        name:"東京本店",
        area:"東京都",
        phone:"090-11120-2229",
        address:"東京都23区多摩郡1010",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12962.672235319158!2d139.74252121554252!3d35.68517456319745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0d02d8064d%3A0xd11a5f0b379e6db7!2z55qH5bGF!5e0!3m2!1sja!2sjp!4v1751971731929!5m2!1sja!2sjp"
    },
    {
        id:6,
        name:"北越支店",
        area:"新潟県、富山県、石川県、福井県",
        phone:"11-2222-4444",
        address:"福井県富山市かなざわ町コシヒカリ5555",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12768.100360998946!2d136.74810761643909!3d36.86581825750155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff76446afea0f79%3A0xd921b58c05b71f39!2z55-z5bed55yMIOWNg-mHjOa1nOOBquOBjuOBleODieODqeOCpOODluOCpuOCp-OCpA!5e0!3m2!1sja!2sjp!4v1751971877880!5m2!1sja!2sjp"
    },
    {
        id: 7,
        name:"中部支店",
        area:"愛知県、岐阜県、三重県、静岡県",
        phone:"05-3456-7890",
        address:"岐阜県名古屋市津-お茶っぱ11201",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13043.486882802497!2d136.8894100151701!3d35.184749665836144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376cc15a24d43%3A0xd6866a6ed91b1a31!2z6YeR44K344Oj44OB5qiq5LiBIOato-mWgOOCqOODquOCoiDnvqnnm7Tjgr7jg7zjg7M!5e0!3m2!1sja!2sjp!4v1751971992314!5m2!1sja!2sjp"
    },
    {
        id: 8,
        name:"近畿支店",
        area:"大阪府、京都府、兵庫県、奈良県、和歌山県、滋賀県",
        phone:"06-9876-5432",
        address:"和歌山県大仏市神戸牛おいでやす-なんでやねん01",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13024.865621811243!2d134.81888981525591!3d35.30060396521343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355559b9d0af50c7%3A0x8d0d9d544c1350c9!2z56u555Sw5Z-O6Leh!5e0!3m2!1sja!2sjp!4v1751972113615!5m2!1sja!2sjp"
    },
    {
        id: 9,
        name:"中国支店",
        area:"広島県、岡山県、山口県、鳥取県、島根県",
        phone:"08-5678-1234",
        address:"山口県島根市岡ちゃん砂丘じゃけん1-2-3",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13459190.590522056!2d125.39247253031873!3d34.55519597197636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae3047ec76d8f%3A0x357228f7d0b5d590!2z5Zq05bO256We56S-!5e0!3m2!1sja!2sjp!4v1751972233145!5m2!1sja!2sjp"
    },
    {
        id: 10,
        name:"四国支店",
        area:"香川県、愛媛県、高知県、徳島県",
        phone:"09-3456-7890",
        address:"高知県うどん市みかん村阿波踊り",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103533.43018690587!2d133.78892540697234!3d34.3279356462677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553e1f25cbb059b%3A0xc4f78ca794f95998!2z54Cs5oi45aSn5qmL!5e0!3m2!1sja!2sjp!4v1751972286330!5m2!1sja!2sjp"
    },{
        id:11,
        name:"九州支店",
        area:"福岡県、佐賀市、長崎県、熊本県、大分県、宮崎県、鹿児島県",
        phone:"94-9494-9494",
        address:"佐賀県博多市桜島熊もん-マンゴーテンボス94",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54381.50374352509!2d130.60888610086369!3d31.583325968619867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353ef572006aed97%3A0x9765ad14cf618e94!2z5qGc5bO2!5e0!3m2!1sja!2sjp!4v1751972315670!5m2!1sja!2sjp"
    },
    {
        id:12,
        name:"沖縄支店",
        area:"沖縄県（離島含む）",
        phone:"10-1833-1833",
        address:"沖縄県シーサー村シークワーサー1833",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12378.53597598708!2d128.2202872231819!3d26.715964537903993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e443d97b04d6af%3A0xa5f29547f006ac13!2z44KE44KT44Gw44KL5Zu956uL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1751972391220!5m2!1sja!2sjp"
    }
]
export const formList:FormList[] = [
    {
        id:1,
        headLabel:"雇用形態",
        bodyLabel:"正社員, 派遣社員, アルバイト, パート"
    },
    {
        id:2,
        headLabel:"募集職種",
        bodyLabel:"現場監督, 作業員, 施工管理, リフォーム営業, 設計士, 事務, 現場事務, その他"
    },
    {
        id:3,
        headLabel:"仕事内容",
        bodyLabel:"現場管理、工程管理、新規営業、既存営業、電話対応など職種により様々です。"
    },
    {
        id:4,
        headLabel:"勤務地",
        bodyLabel:"全支店募集しております。ご希望の勤務地を考慮します。"
    },
    {
        id:5,
        headLabel:"勤務時間",
        bodyLabel:"8:00~17:00 \n 9:00~18:00 \n ※現場によります。"
    },
    {
        id:6,
        headLabel:"休日・休暇",
        bodyLabel:"固定：日曜日・祝日 \n 変動：現場、職種により異なります。"
    },
    {
        id:7,
        headLabel:"給与",
        bodyLabel:"正社員:25万円~ \n 派遣、アルバイト:12000円/日 \n パート:1200円/時"
    },
    {
        id:8,
        headLabel:"昇給・賞与",
        bodyLabel:"昇給: 年1回 \n 賞与: 年2回（夏・冬）"
    },
    {
        id:9,
        headLabel:"福利厚生",
        bodyLabel:"提携先の施設を割安でご利用いただけます。 \n ※例）ホテル１泊、フェイシャルエステなど"
    },
    {
        id:10,
        headLabel:"応募方法",
        bodyLabel:"当ホームページ、各SNS、お電話にて随時受け付けております。"
    }
]