// 東京書籍 NEW HORIZON English Course 中学1年生 単語・熟語データ
// 重要単語は isImportant: true に設定しています。

const allUnitsData = [
  {
    unit: "Unit1",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "呼ぶ、電話する", word: "call", past: "called", ppart: "called", ing: "calling", isImportant: true },
          { meaning: "南アフリカ", word: "South Africa", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "愛する、大好きである", word: "love", past: "loved", ppart: "loved", ing: "loving", isImportant: true },
          { meaning: "私を〜と呼んで", word: "Call me ~", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜したいと思う", word: "want to", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "ファン、うちわ", word: "fan", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "しばしば、よく", word: "often", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜と一緒に", word: "with", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "しかし、だけど", word: "but", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜しない", word: "don't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "do not の短縮形" }
        ]
      },
      {
        part: "part3",
        words: [
          { meaning: "描く", word: "draw", past: "drew", ppart: "drawn", ing: "drawing", isImportant: true },
          { meaning: "ひとつの〜、一人の〜", word: "an", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "動物", word: "animal", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "だから、それゆえに", word: "so", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜について", word: "about", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "レッスン、授業", word: "lesson", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜はどうですか？", word: "How about you?", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit2",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "クラス、学級、授業", word: "class", past: "—", ppart: "—", ing: "—", isImportant: true },
        { meaning: "私たちの", word: "our", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "カナダ", word: "Canada", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "アメリカ", word: "America", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜が得意である", word: "be good at", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "彼は〜です", word: "he's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "he is の短縮形" },
          { meaning: "彼女は〜です", word: "she's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "she is の短縮形" }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "中国人、中国語の", word: "Chinese", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜できない", word: "cannot", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "いくつかの、いくらかの", word: "some", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "親、父親、母親", word: "parent", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "中国", word: "China", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "なるほど、わかりました", word: "I see.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "それは〜です", word: "that's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "that is の短縮形" },
          { meaning: "〜できない", word: "can't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "cannot の短縮形" }
        ]
      },
      {
        part: "part3",
        words: [
          { meaning: "失礼ですが、すみませんが", word: "excuse", past: "excused", ppart: "excused", ing: "excusing", isImportant: true },
          { meaning: "おっと、しまった", word: "oops", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ここに、ここで", word: "here", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "ようこそ", word: "welcome", past: "welcomed", ppart: "welcomed", ing: "welcoming", isImportant: true },
          { meaning: "トーテムポール", word: "totem pole", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "サンダーバード", word: "thunderbird", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "すみません", word: "Excuse me.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "はい、どうぞ", word: "Here you are.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ありがとうございます", word: "Thank you.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "どういたしまして", word: "You're welcome.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "あなたは〜です", word: "you're", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "you are の短縮形" },
          { meaning: "それは〜です", word: "it's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "it is / it has の短縮形" }
        ]
      }
    ]
  },
  {
    unit: "Unit3",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "象徴、シンボル", word: "symbol", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜のために、〜の間", word: "for", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "おもしろい、興味深い", word: "interesting", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "お気に入りの、大好きな", word: "favorite", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "登場人物、性格", word: "character", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜もまた、同様に", word: "also", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "何が〜ですか", word: "what's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "what is の短縮形" },
          { meaning: "誰が〜ですか", word: "who's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "who is / who has の短縮形" }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "〜のあちこちに、〜の周りに", word: "around", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜の後に、〜の後で", word: "after", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "オンラインの", word: "online", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "放課後に", word: "after school", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part3",
        words: [
          { meaning: "廊下、ホール", word: "hallway", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "勝つ、勝ち取る", word: "win", past: "won", ppart: "won", ing: "winning", isImportant: true },
          { meaning: "次の、今度の", word: "next", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "幸運、運", word: "luck", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜の近くに", word: "near", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "幸運を祈る", word: "Good luck.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "いつ〜ですか", word: "when's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "when is の短縮形" },
          { meaning: "どこに〜ですか", word: "where's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "where is の短縮形" }
        ]
      }
    ]
  },
  {
    unit: "Unit4",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "ニュージーランド", word: "New Zealand", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "子犬", word: "puppy (puppies)", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜の", word: "of", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "いつか、将来", word: "someday", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "たくさん、多数", word: "lot", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "それらは、それらはが", word: "they", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜のうちの1つ", word: "one of", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "たくさんの", word: "a lot of", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "どれくらいの数の〜", word: "How many ...?", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "彼らは〜です、それらは〜です", word: "they're", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "they are の短縮形" }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "正午、お昼", word: "noon", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "最後の、この前の", word: "last", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜のような、〜を好む", word: "like", past: "liked", ppart: "liked", ing: "liking", isImportant: true },
          { meaning: "〜時", word: "o'clock", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "ネットボール", word: "netball", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜のようだね", word: "Sounds ...", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part3",
        words: [
          { meaning: "前方の、正面の", word: "front", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜である、いる", word: "be", past: "was / were", ppart: "been", ing: "being", isImportant: true },
          { meaning: "神経質な、緊張して", word: "nervous", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "心配する", word: "worry", past: "worried", ppart: "worried", ing: "worrying", isImportant: true },
          { meaning: "あなた自身", word: "yourself", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "羊", word: "sheep", past: "sheep", ppart: "sheep", ing: "sheeping", isImportant: false },
          { meaning: "キーウィ", word: "kiwi", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "右の、ちょうど", word: "right", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "楽しむ", word: "enjoy oneself", past: "enjoyed oneself", ppart: "enjoyed oneself", ing: "enjoying oneself", isImportant: false },
          { meaning: "〜を見る", word: "look at", past: "looked at", ppart: "looked at", ing: "looking at", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit5",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "〜として", word: "as", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "旅行、観光", word: "tour", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ガイド、案内人", word: "guide", past: "guided", ppart: "guided", ing: "guiding", isImportant: true },
          { meaning: "書く", word: "write", past: "wrote", ppart: "written", ing: "writing", isImportant: true },
          { meaning: "ブログ", word: "blog", past: "blogged", ppart: "blogged", ing: "blogging", isImportant: false },
          { meaning: "地元の、その土地の", word: "local", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "美しい", word: "beautiful", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "点、場所、スポット", word: "spot", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "彼の", word: "his", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "ホノルル", word: "Honolulu", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ハワイ", word: "Hawaii", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "歳（の〜）", word: "...year old", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜して楽しむ", word: "enjoy ...ing", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "何か、いくつかの", word: "any", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "（doの三人称単数現在形）", word: "does", past: "did", ppart: "done", ing: "doing", isImportant: true },
          { meaning: "（haveの三人称単数現在形）", word: "has", past: "had", ppart: "had", ing: "having", isImportant: true },
          { meaning: "そこに、そこで", word: "there", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "サーフィンをする", word: "surf", past: "surfed", ppart: "surfed", ing: "surfing", isImportant: true },
          { meaning: "生活、人生", word: "life", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "（does notの短縮形）", word: "doesn't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "does not の短縮形" },
          { meaning: "カフェ", word: "cafe", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ウェブサイト", word: "website", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "人気の", word: "popular", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "オーナー、所有者", word: "owner", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "知っている", word: "know", past: "knew", ppart: "known", ing: "knowing", isImportant: true },
          { meaning: "パティ", word: "patty", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "揚げた", word: "fried", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "てっぺん、最高部", word: "top", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "素晴らしい", word: "wonderful", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "目玉焼き", word: "fried egg", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜のてっぺんに", word: "on top of", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit6",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "彼を、彼に", word: "him", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "言う、話す", word: "say", past: "said", ppart: "said", ing: "saying", isImportant: true },
          { meaning: "すべてのこと、何もかも", word: "everything", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "見せる、案内する", word: "show", past: "showed", ppart: "shown", ing: "showing", isImportant: true },
          { meaning: "彼女を、彼女に", word: "her", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "演者、パフォーマー", word: "performer", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "イギリス", word: "the U.K.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "一緒に", word: "together", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜しませんか", word: "Why don't we ...?", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜はどうですか", word: "how's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "how is の短縮形" }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "分（時間単位）", word: "minute", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "待つ", word: "wait", past: "waited", ppart: "waited", ing: "waiting", isImportant: true },
          { meaning: "誰の", word: "whose", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "あなたのもの", word: "yours", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "私のもの", word: "mine", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "注意深い、慎重な", word: "careful", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "混雑した", word: "crowded", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "歴史", word: "history", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "まだ", word: "still", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜を越えて、終わって", word: "over", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ありがとう", word: "Thanks.", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜に気をつける", word: "be careful with", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "おいくつですか", word: "How old ...?", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "Read and Think",
        words: [
          { meaning: "クッション", word: "cushion", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "異なった、いろいろな", word: "different", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "役割", word: "role", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "使う", word: "use", past: "used", ppart: "used", ing: "using", isImportant: false },
          { meaning: "たった、〜だけ", word: "only", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "小道具、プロップ", word: "prop", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "どちらの、どの", word: "which", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "または、さもないと", word: "or", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "格式ばらない、カジュアルな", word: "casual", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "大きな、大規模な", word: "large", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "コレクション、収集品", word: "collection", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "落語（コミック・ストーリーテリング）", word: "comic storytelling", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit7",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "明日", word: "tomorrow", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "計画する、予定", word: "plan", past: "planned", ppart: "planned", ing: "planning", isImportant: true },
          { meaning: "暇な、自由な", word: "free", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "意味する", word: "mean", past: "meant", ppart: "meant", ing: "meaning", isImportant: true },
          { meaning: "前に、進んで", word: "forward", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "どうしたの？", word: "What's up?", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜のように思える", word: "sound like", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜を楽しみに待つ", word: "look forward to", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "市場", word: "market", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "土産、記念品", word: "souvenir", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "場所", word: "place", past: "placed", ppart: "placed", ing: "placing", isImportant: true },
          { meaning: "現れる", word: "appear", past: "appeared", ppart: "appeared", ing: "appearing", isImportant: true },
          { meaning: "あれらの、それらの", word: "those", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜へようこそ", word: "Welcome to ...", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "Read and Think",
        words: [
          { meaning: "お母さん", word: "mom", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "旅行する", word: "travel", past: "traveled", ppart: "traveled", ing: "traveling", isImportant: true },
          { meaning: "怒った", word: "angry", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "宮殿", word: "palace", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "わくわくするような", word: "exciting", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "遅れた", word: "late", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "バッキンガム宮殿", word: "Buckingham Palace", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ごめんなさい、申し訳ありません", word: "I'm sorry.", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit8",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "民族の、独自の", word: "ethnic", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "アフリカ", word: "Africa", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ケニア", word: "Kenya", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ボランティア", word: "volunteer", past: "volunteered", ppart: "volunteered", ing: "volunteering", isImportant: true },
          { meaning: "必要とする", word: "need", past: "needed", ppart: "needed", ing: "needing", isImportant: true },
          { meaning: "教える", word: "teach", past: "taught", ppart: "taught", ing: "teaching", isImportant: true },
          { meaning: "試す、挑戦する", word: "try (tries)", past: "tried", ppart: "tried", ing: "trying", isImportant: true },
          { meaning: "最善、一番", word: "best", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "尊敬する", word: "respect", past: "respected", ppart: "respected", ing: "respecting", isImportant: true },
          { meaning: "〜になる", word: "become", past: "became", ppart: "become", ing: "becoming", isImportant: true },
          { meaning: "必要としている", word: "in need", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "最善を尽くす", word: "do one's best", past: "did one's best", ppart: "done one's best", ing: "doing one's best", isImportant: false }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "アフリカの", word: "African", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "減らす", word: "reduce", past: "reduced", ppart: "reduced", ing: "reducing", isImportant: false },
          { meaning: "無駄、ゴミ、浪費", word: "waste", past: "wasted", ppart: "wasted", ing: "wasting", isImportant: false },
          { meaning: "プラスチック", word: "plastic", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "紙", word: "paper", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "ストロー", word: "straw", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "独自の、元の", word: "original", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "再利用可能な", word: "reusable", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "コース、進路", word: "course", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "もちろん", word: "of course", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "Read and Think",
        words: [
          { meaning: "よく、上手に", word: "well", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "ほかの、もうひとつの", word: "other", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "村", word: "village", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "集める", word: "collect", past: "collected", ppart: "collected", ing: "collecting", isImportant: true },
          { meaning: "遠くに", word: "far", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "グループ", word: "group", past: "grouped", ppart: "grouped", ing: "grouping", isImportant: true },
          { meaning: "建てる、組み立てる", word: "build", past: "built", ppart: "built", ing: "building", isImportant: true },
          { meaning: "これらの", word: "these", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "お金", word: "money", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "他方で、これに反して", word: "on the other hand", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "長い間", word: "for a long time", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit9",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "後ろへ、戻って", word: "back", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "〜の間", word: "during", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "滞在する、とどまる", word: "stay", past: "stayed", ppart: "stayed", ing: "staying", isImportant: true },
          { meaning: "スノーボードをする", word: "snowboarding", past: "snowboarded", ppart: "snowboarded", ing: "snowboarding", isImportant: false },
          { meaning: "クリスマス", word: "Christmas Day", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "くつろぐ、リラックスする", word: "relax", past: "relaxed", ppart: "relaxed", ing: "relaxing", isImportant: false },
          { meaning: "会った（meetの過去形）", word: "met", past: "met", ppart: "met", ing: "meeting", isImportant: true },
          { meaning: "アイスホッケー", word: "ice hockey", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "戻る、帰る", word: "go back", past: "went back", ppart: "gone back", ing: "going back", isImportant: false },
          { meaning: "家に、家庭で", word: "at home", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "（doの過去形）", word: "did", past: "did", ppart: "done", ing: "doing", isImportant: true },
          { meaning: "伝統的な", word: "traditional", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "特別な", word: "special", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "祖父母", word: "grandparent", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "書いた（writeの過去形）", word: "wrote", past: "wrote", ppart: "written", ing: "writing", isImportant: true },
          { meaning: "新年、お正月", word: "New Year", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "（did notの短縮形）", word: "didn't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "did not の短縮形" }
        ]
      },
      {
        part: "Read and Think",
        words: [
          { meaning: "過ごした（spendの過去形）", word: "spent", past: "spent", ppart: "spent", ing: "spending", isImportant: false },
          { meaning: "過ごす", word: "spend", past: "spent", ppart: "spent", ing: "spending", isImportant: false },
          { meaning: "来た（comeの過去形）", word: "came", past: "came", ppart: "come", ing: "coming", isImportant: false },
          { meaning: "買った（buyの過去形）", word: "bought", past: "bought", ppart: "bought", ing: "buying", isImportant: false },
          { meaning: "おみくじ", word: "fortune slip", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "読む", word: "read", past: "read", ppart: "read", ing: "reading", isImportant: false },
          { meaning: "言った（sayの過去形）", word: "said", past: "said", ppart: "said", ing: "saying", isImportant: false },
          { meaning: "お守り、チャーム", word: "charm", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "手に入れた（getの過去形）", word: "got", past: "got", ppart: "got", ing: "getting", isImportant: false },
          { meaning: "木製の", word: "wooden", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "願い、望む", word: "wish", past: "wished", ppart: "wished", ing: "wishing", isImportant: false },
          { meaning: "ボードゲーム", word: "board game", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "楽しい時間を過ごす", word: "have a ... time", past: "had a ... time", ppart: "had a ... time", ing: "having a ... time", isImportant: false }
        ]
      }
    ]
  },
  {
    unit: "Unit10",
    parts: [
      {
        part: "part1",
        words: [
          { meaning: "思い出す、記憶している", word: "remember", past: "remembered", ppart: "remembered", ing: "remembering", isImportant: true },
          { meaning: "退屈した", word: "bored", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "（areの過去形）", word: "were", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "気づく", word: "realize", past: "realized", ppart: "realized", ing: "realizing", isImportant: true },
          { meaning: "作った（makeの過去形）", word: "made", past: "made", ppart: "made", ing: "making", isImportant: true },
          { meaning: "間違い、誤り", word: "mistake", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "だれでも", word: "anyone", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "勝った（winの過去形）", word: "won", past: "won", ppart: "won", ing: "winning", isImportant: true },
          { meaning: "とにかく、いずれにしても", word: "anyway", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "最初は", word: "at first", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜することを楽しむ", word: "like ...ing", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "（was notの短縮形）", word: "wasn't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "was not の短縮形" },
          { meaning: "（were notの短縮形）", word: "weren't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "were not の短縮形" }
        ]
      },
      {
        part: "part2",
        words: [
          { meaning: "ねえ、おい", word: "hey", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "壊す、折る", word: "break", past: "broke", ppart: "broken", ing: "breaking", isImportant: true },
          { meaning: "それから、その時", word: "then", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "持ってくる", word: "bring", past: "brought", ppart: "brought", ing: "bringing", isImportant: true },
          { meaning: "心、気持ち", word: "heart", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "打つ、鼓動する", word: "beat", past: "beat", ppart: "beat", ing: "beating", isImportant: true },
          { meaning: "道、方法", word: "way", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "それぞれの", word: "each", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "持ち帰る", word: "bring back", past: "brought back", ppart: "brought back", ing: "bringing back", isImportant: false },
          { meaning: "途中で", word: "on one's way", past: "—", ppart: "—", ing: "—", isImportant: false }
        ]
      },
      {
        part: "Read and Think",
        words: [
          { meaning: "旅行、小旅行", word: "trip", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "キャンプ場", word: "campground", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "温泉", word: "hot spring", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "配置する、据える", word: "set", past: "set", ppart: "set", ing: "setting", isImportant: true },
          { meaning: "テント", word: "tent", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "主な、主要な", word: "main", past: "—", ppart: "—", ing: "—", isImportant: true },
          { meaning: "キャンプファイヤー", word: "campfire", past: "—", ppart: "—", ing: "—", isImportant: false },
          { meaning: "〜がある、いる", word: "there is", past: "there was", ppart: "there been", ing: "there being", isImportant: false },
          { meaning: "組み立てる、準備する", word: "set up", past: "set up", ppart: "set up", ing: "setting up", isImportant: false },
          { meaning: "（there isの短縮形）", word: "there's", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "there is の短縮形" },
          { meaning: "（is notの短縮形）", word: "isn't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "is not の短縮形" },
          { meaning: "（are notの短縮形）", word: "aren't", past: "—", ppart: "—", ing: "—", isImportant: false, shortFrom: "are not の短縮形" }
        ]
      }
    ]
  }
];

// 代名詞表データ（単数・複数、人称、格ごとに整理）
const pronounTableData = {
  singular: [
    { person: "自分（一人称）", subj: "I", possessive: "my", obj: "me", mine: "mine" },
    { person: "相手（二人称）", subj: "you", possessive: "your", obj: "you", mine: "yours" },
    { person: "自分と相手以外（三人称・男性）", subj: "he", possessive: "his", obj: "him", mine: "his" },
    { person: "自分と相手以外（三人称・女性）", subj: "she", possessive: "her", obj: "her", mine: "hers" },
    { person: "自分と相手以外（三人称・もの）", subj: "it", possessive: "its", obj: "it", mine: "—" },
    { person: "固有名詞の例（Rikoの場合）", subj: "Riko", possessive: "Riko's", obj: "Riko", mine: "Riko's" }
  ],
  plural: [
    { person: "自分たち（一人称）", subj: "we", possessive: "our", obj: "us", mine: "ours" },
    { person: "相手たち（二人称）", subj: "you", possessive: "your", obj: "you", mine: "yours" },
    { person: "自分と相手以外（三人称・すべて）※男女・もの共通", subj: "they", possessive: "their", obj: "them", mine: "theirs" },
    { person: "複数名詞の例（girlsの場合）", subj: "girls", possessive: "girls'", obj: "girls", mine: "girls'" }
  ]
};

// Unit1〜Unit10のすべてのPartの単語を1つにまとめた「すべて」用データを作成
const allUnitsCombinedData = {
  unit: "すべて",
  parts: [
    {
      part: "全重要単語・フレーズ",
      words: allUnitsData.reduce((acc, u) => {
        u.parts.forEach(p => {
          acc.push(...p.words);
        });
        return acc;
      }, [])
    }
  ]
};

allUnitsData.push(allUnitsCombinedData);

// -------------------------------------------------------------
// メインのロジック・描画スクリプト
// -------------------------------------------------------------

let currentUnitIndex = 0;
let currentPartIndex = 0;
let currentMode = 'memorize';
let currentFilter = 'all'; // 'all', 'important', 'favorite'

let comboCount = 0;
let maxCombo = 0;
let currentQuestionCount = 0;
let correctCount = 0;
let timerInterval = null;
let timeLeft = 100;
let isSelected = false;
let currentDifficulty = 'normal';
let currentQuestionWord = null;
let wrongWordsList = [];
let isReviewingWrong = false;

let favorites = JSON.parse(localStorage.getItem('englishFavorites')) || [];

function saveFavorites() {
  localStorage.setItem('englishFavorites', JSON.stringify(favorites));
}

function initSite() {
  renderUnitTabs();
  renderPartTabs();
  renderContent();
  setupScrollEvent();
}

function renderUnitTabs() {
  const container = document.getElementById('unit-tabs');
  container.innerHTML = '';
  allUnitsData.forEach((uData, index) => {
    const btn = document.createElement('button');
    btn.className = `unit-tab ${index === currentUnitIndex ? 'active' : ''}`;
    btn.innerText = uData.unit;
    btn.onclick = () => {
      currentUnitIndex = index;
      currentPartIndex = 0;
      isReviewingWrong = false;
      document.getElementById('review-btn').style.display = 'none';
      renderUnitTabs();
      renderPartTabs();
      renderContent();
    };
    container.appendChild(btn);
  });
}

function renderPartTabs() {
  const container = document.getElementById('part-tabs');
  container.innerHTML = '';
  const currentUnit = allUnitsData[currentUnitIndex];
  currentUnit.parts.forEach((pData, index) => {
    const btn = document.createElement('button');
    btn.className = `part-tab ${index === currentPartIndex ? 'active' : ''}`;
    btn.innerText = pData.part;
    btn.onclick = () => {
      currentPartIndex = index;
      isReviewingWrong = false;
      document.getElementById('review-btn').style.display = 'none';
      renderPartTabs();
      renderContent();
    };
    container.appendChild(btn);
  });
}

function switchMode(mode) {
  currentMode = mode;
  isReviewingWrong = false;
  document.getElementById('review-btn').style.display = 'none';
  clearInterval(timerInterval);
  document.getElementById('timer-container').style.display = 'none';
  document.getElementById('combo-display').style.display = 'none';

  ['memorize', 'write', 'table', 'question', 'pronoun'].forEach(m => {
    const btn = document.getElementById('mode-' + m);
    if(btn) btn.classList.remove('active');
  });
  const targetBtn = document.getElementById('mode-' + mode);
  if(targetBtn) targetBtn.classList.add('active');

  const settingsArea = document.getElementById('settings-area');
  const tableArea = document.getElementById('normal-table-area');
  const questionArea = document.getElementById('question-mode-area');
  const pronounArea = document.getElementById('pronoun-area');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');

  if(mode === 'question') {
    if(settingsArea) settingsArea.style.display = 'flex';
    if(tableArea) tableArea.style.display = 'none';
    if(questionArea) questionArea.style.display = 'block';
    if(pronounArea) pronounArea.style.display = 'none';
    if(submitBtn) submitBtn.style.display = 'none';
    if(resetBtn) resetBtn.style.display = 'none';
    restartQuizSet();
  } else if(mode === 'pronoun') {
    if(settingsArea) settingsArea.style.display = 'none';
    if(tableArea) tableArea.style.display = 'none';
    if(questionArea) questionArea.style.display = 'none';
    if(pronounArea) pronounArea.style.display = 'block';
    if(submitBtn) submitBtn.style.display = 'none';
    if(resetBtn) resetBtn.style.display = 'none';
    renderPronounTable();
  } else {
    if(settingsArea) settingsArea.style.display = 'none';
    if(tableArea) tableArea.style.display = 'block';
    if(questionArea) questionArea.style.display = 'none';
    if(pronounArea) pronounArea.style.display = 'none';
    if(submitBtn) submitBtn.style.display = mode === 'write' ? 'block' : 'none';
    if(resetBtn) resetBtn.style.display = mode === 'table' ? 'none' : 'block';
    renderContent();
  }
}

// HTML側からの呼び出し (changeFilterMode) に対応
function changeFilterMode(filterType) {
  currentFilter = filterType;
  document.getElementById('filter-all').classList.toggle('active', filterType === 'all');
  document.getElementById('filter-important').classList.toggle('active', filterType === 'important');
  document.getElementById('filter-favorite').classList.toggle('active', filterType === 'favorite');

  if(currentMode !== 'question' && currentMode !== 'pronoun') {
    renderContent();
  } else if(currentMode === 'question') {
    restartQuizSet();
  }
}

function changeDifficulty(diff) {
  currentDifficulty = diff;
  ['easy', 'normal', 'hard'].forEach(d => {
    const btn = document.getElementById('set-' + d);
    if(btn) btn.classList.remove('active');
  });
  const targetDiffBtn = document.getElementById('set-' + diff);
  if(targetDiffBtn) targetDiffBtn.classList.add('active');
  if(currentMode === 'question') restartQuizSet();
}

function toggleFavorite(wordObj, btn) {
  btn.classList.remove('pop');
  void btn.offsetWidth;
  btn.classList.add('pop');

  const idx = favorites.findIndex(f => f.word === wordObj.word && f.meaning === wordObj.meaning);
  if(idx > -1) {
    favorites.splice(idx, 1);
    btn.classList.remove('active');
    btn.innerText = '☆';
  } else {
    favorites.push(wordObj);
    btn.classList.add('active');
    btn.innerText = '★';
  }
  saveFavorites();

  // お気に入りフィルター中にお気に入りを外した場合にリアルタイムで反映する
  if(currentFilter === 'favorite' && currentMode !== 'question' && currentMode !== 'pronoun') {
    renderContent();
  }
}

function speakWord(text) {
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  window.speechSynthesis.speak(utterance);
}

function toggleTape(el) {
  el.classList.toggle('reveal');
}

function showHint(btn, answer) {
  const cleanAns = answer.split('/')[0].trim();
  btn.innerText = `💡 ${cleanAns.charAt(0)}${'_'.repeat(cleanAns.length - 1)}`;
  btn.style.opacity = "1";
}

function renderContent() {
  const tbody = document.getElementById('words-body');
  tbody.innerHTML = '';

  const unitObj = allUnitsData[currentUnitIndex];
  const partObj = unitObj.parts[currentPartIndex];
  let list = isReviewingWrong ? wrongWordsList : partObj.words;

  if(currentFilter === 'important') {
    list = list.filter(w => w.isImportant);
  } else if(currentFilter === 'favorite') {
    list = list.filter(w => favorites.some(f => f.word === w.word && f.meaning === w.meaning));
  }

  if(list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty">該当する単語がありません。</td></tr>`;
    return;
  }

  list.forEach(item => {
    const tr = document.createElement('tr');
    const isFav = favorites.some(f => f.word === item.word && f.meaning === item.meaning);

    const safeItem = JSON.stringify(item).replace(/"/g, '&quot;');
    const favBtnHtml = `<td><button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${safeItem}, this)">${isFav ? '★' : '☆'}</button></td>`;
    const unitPartHtml = `<td><span class="unit-cell" style="background:${getUnitColor(currentUnitIndex)}">${unitObj.unit} ${partObj.part}</span></td>`;
    const meaningHtml = `<td><b>${item.meaning}</b></td>`;

    const ttsBtn = (txt) => txt !== '—' ? `<button class="tts-btn" onclick="speakWord('${txt.replace(/'/g, "\\'")}')" title="音声">🔊</button>` : '';
    
    const formatWordToken = (wText) => {
      if(wText === '—') return '—';
      const tokens = wText.split(' ');
      if(tokens.length > 1) {
        return `<span class="multi-word">${tokens.map(t => `<span class="word-token">${t}</span>`).join(' ')}</span>`;
      }
      return wText;
    };

    const wordClass = item.isImportant ? 'word-main important' : 'word-main';
    const starMark = item.isImportant ? '<span class="important-star">★</span>' : '';
    const shortBadge = item.shortFrom ? `<span class="short-badge">(${item.shortFrom})</span>` : '';

    let wordColHtml = '', pastColHtml = '', ppartColHtml = '', ingColHtml = '';

    if(currentMode === 'memorize') {
      wordColHtml = `<td class="col-word"><div class="tape-container"><span class="tape-text"><span class="${wordClass}">${formatWordToken(item.word)}</span>${starMark}${shortBadge}</span>${ttsBtn(item.word)}<div class="tape" onclick="toggleTape(this)"></div></div></td>`;
      pastColHtml = `<td class="col-past"><div class="tape-container"><span class="tape-text">${formatWordToken(item.past)}</span>${ttsBtn(item.past)}<div class="tape" onclick="toggleTape(this)"></div></div></td>`;
      ppartColHtml = `<td class="col-ppart"><div class="tape-container"><span class="tape-text">${formatWordToken(item.ppart)}</span>${ttsBtn(item.ppart)}<div class="tape" onclick="toggleTape(this)"></div></div></td>`;
      ingColHtml = `<td class="col-ing"><div class="tape-container"><span class="tape-text">${formatWordToken(item.ing)}</span>${ttsBtn(item.ing)}<div class="tape" onclick="toggleTape(this)"></div></div></td>`;
    } else if(currentMode === 'write') {
      const inputCell = (ans) => ans !== '—' ? `
        <div class="quiz-input-wrapper" style="position:relative;display:inline-flex;width:95%;align-items:center;">
          <input type="text" class="quiz-input" data-ans="${ans}" autocapitalize="none" autocorrect="off" autocomplete="off">
          <button class="hint-btn" onclick="showHint(this, '${ans}')" style="position:absolute;right:2px;background:none;border:none;cursor:pointer;font-size:10px;">?</button>
        </div>
        <div class="spell-feedback"></div>
      ` : '—';

      wordColHtml = `<td class="col-word"><span class="${wordClass}">${formatWordToken(item.word)}</span>${starMark}${shortBadge}</td>`;
      pastColHtml = `<td class="col-past">${inputCell(item.past)}</td>`;
      ppartColHtml = `<td class="col-ppart">${inputCell(item.ppart)}</td>`;
      ingColHtml = `<td class="col-ing">${inputCell(item.ing)}</td>`;
    } else {
      wordColHtml = `<td class="col-word"><span class="${wordClass}" style="color:var(--primary);">${formatWordToken(item.word)}</span>${starMark}${shortBadge}${ttsBtn(item.word)}</td>`;
      pastColHtml = `<td class="col-past">${formatWordToken(item.past)}${ttsBtn(item.past)}</td>`;
      ppartColHtml = `<td class="col-ppart">${formatWordToken(item.ppart)}${ttsBtn(item.ppart)}</td>`;
      ingColHtml = `<td class="col-ing">${formatWordToken(item.ing)}${ttsBtn(item.ing)}</td>`;
    }

    tr.innerHTML = favBtnHtml + unitPartHtml + meaningHtml + wordColHtml + pastColHtml + ppartColHtml + ingColHtml;
    tbody.appendChild(tr);
  });

  if(currentMode === 'write') setupInputNavigation();
}

function getUnitColor(idx) {
  const colors = ['#2563eb', '#059669', '#d97706', '#dc2626', '#7c3aed', '#db2777', '#0284c7', '#16a34a', '#ca8a04', '#9333ea'];
  return colors[idx % colors.length];
}

function setupInputNavigation() {
  const inputs = Array.from(document.querySelectorAll('.quiz-input'));
  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        e.preventDefault();
        if(index < inputs.length - 1) inputs[index + 1].focus();
        else checkAnswers();
      }
    });
  });
}

function checkAnswers() {
  const rows = document.querySelectorAll('#words-body tr');
  let unitObj = allUnitsData[currentUnitIndex];
  let partObj = unitObj.parts[currentPartIndex];
  let currentList = isReviewingWrong ? wrongWordsList : partObj.words;
  if(currentFilter === 'important') currentList = currentList.filter(w => w.isImportant);
  else if(currentFilter === 'favorite') currentList = currentList.filter(w => favorites.some(f => f.word === w.word && f.meaning === w.meaning));

  let nextWrongList = [];
  let hasMistake = false;

  rows.forEach((row, rowIndex) => {
    const inputs = row.querySelectorAll('.quiz-input');
    const feedbacks = row.querySelectorAll('.spell-feedback');
    let rowHasMistake = false;

    inputs.forEach((input, i) => {
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswerRaw = input.getAttribute('data-ans').toLowerCase();
      const correctAnswers = correctAnswerRaw.split('/').map(a => a.trim());

      if(correctAnswers.includes(userAnswer) || userAnswer === correctAnswerRaw.replace(/\s+/g, '')) {
        input.className = "quiz-input correct";
        feedbacks[i].innerHTML = '';
      } else {
        input.className = "quiz-input incorrect";
        feedbacks[i].innerHTML = `<span class="spell-error-hint">正解: ${correctAnswers.join(' / ')}</span>`;
        rowHasMistake = true;
        hasMistake = true;
      }
    });

    if(rowHasMistake && currentList[rowIndex]) {
      nextWrongList.push(currentList[rowIndex]);
    }
  });

  wrongWordsList = nextWrongList;
  if(!hasMistake) {
    if(typeof confetti === 'function') {
      confetti({particleCount: 150, spread: 80, origin: {y: 0.6}});
    }
    document.getElementById('review-btn').style.display = 'none';
    isReviewingWrong = false;
  } else {
    document.getElementById('review-btn').style.display = 'block';
  }
}

function startReviewMode() {
  if(wrongWordsList.length === 0) return;
  isReviewingWrong = true;
  renderContent();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function resetQuiz() {
  isReviewingWrong = false;
  document.getElementById('review-btn').style.display = 'none';
  renderContent();
}

function renderPronounTable() {
  const area = document.getElementById('pronoun-area');
  area.innerHTML = `
    <div class="section-card">
      <div class="sticky">代名詞の活用表</div>
      <div class="pronoun-note">※上は「単数」、下は「複数」を表しています。主語、〜の（所有格）、目的格（〜を・に）、〜のもの（所有代名詞）で分類されています。</div>
      
      <h3 class="section-title" style="margin-top:15px;font-size:15px;">■ 単数（1人称・2人称・3人称）</h3>
      <div class="pronoun-wrap">
        <table class="pronoun-table">
          <thead>
            <tr>
              <th>人称の分類</th>
              <th>主語 (〜は・が)</th>
              <th>所有格 (〜の)</th>
              <th>目的格 (〜を・に)</th>
              <th>所有代名詞 (〜のもの)</th>
            </tr>
          </thead>
          <tbody>
            ${pronounTableData.singular.map(row => `
              <tr>
                <td style="font-weight:bold;">${row.person}</td>
                <td class="person1">${row.subj}</td>
                <td class="person2">${row.possessive}</td>
                <td class="person3">${row.obj}</td>
                <td class="plural">${row.mine}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <h3 class="section-title" style="margin-top:25px;font-size:15px;">■ 複数</h3>
      <div class="pronoun-wrap">
        <table class="pronoun-table">
          <thead>
            <tr>
              <th>人称の分類</th>
              <th>主語 (〜は・が)</th>
              <th>所有格 (〜の)</th>
              <th>目的格 (〜を・に)</th>
              <th>所有代名詞 (〜のもの)</th>
            </tr>
          </thead>
          <tbody>
            ${pronounTableData.plural.map(row => `
              <tr>
                <td style="font-weight:bold;">${row.person}</td>
                <td class="person1">${row.subj}</td>
                <td class="person2">${row.possessive}</td>
                <td class="person3">${row.obj}</td>
                <td class="plural">${row.mine}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function restartQuizSet() {
  currentQuestionCount = 0;
  correctCount = 0;
  comboCount = 0;
  maxCombo = 0;
  generateQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 100;
  document.getElementById('timer-container').style.display = 'block';
  const bar = document.getElementById('timer-bar');
  bar.style.width = '100%';
  bar.style.background = '#22c55e';

  let duration = currentDifficulty === 'easy' ? 15000 : currentDifficulty === 'hard' ? 5000 : 10000;
  let step = 100;
  let totalSteps = duration / step;
  let count = 0;

  timerInterval = setInterval(() => {
    count++;
    timeLeft = 100 - ((count / totalSteps) * 100);
    bar.style.width = timeLeft + '%';
    if(timeLeft <= 50 && timeLeft > 20) bar.style.background = '#eab308';
    else if(timeLeft <= 20) bar.style.background = '#ef4444';

    if(count >= totalSteps) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, step);
}

function handleTimeOut() {
  if(isSelected) return;
  isSelected = true;
  comboCount = 0;
  document.getElementById('combo-display').innerText = `🔥 0 コンボ！`;

  const buttons = document.querySelectorAll('.qa-opt-btn');
  const correctText = `${currentQuestionWord.word} (${currentQuestionWord.meaning})`;
  buttons.forEach(btn => {
    btn.classList.add('disabled');
    if(btn.innerText.includes(currentQuestionWord.word)) btn.classList.add('correct');
  });

  const feedbackBox = document.getElementById('qa-feedback-box');
  feedbackBox.className = 'qa-feedback incorrect';
  feedbackBox.innerHTML = `<strong>⏰ 時間切れ！</strong><br>正解は「<strong>${correctText}</strong>」です。`;
  createNextOrResultButton(feedbackBox);
}

function generateQuestion() {
  clearInterval(timerInterval);
  isSelected = false;
  if(currentMode !== 'question') return;

  if(currentQuestionCount >= 10) {
    showQuizResult();
    return;
  }
  currentQuestionCount++;

  let unitObj = allUnitsData[currentUnitIndex];
  let partObj = unitObj.parts[currentPartIndex];
  let list = partObj.words.filter(w => w.word !== '—');
  
  if(currentFilter === 'important') list = list.filter(w => w.isImportant);
  else if(currentFilter === 'favorite') list = list.filter(w => favorites.some(f => f.word === w.word && f.meaning === w.meaning));

  const feedbackBox = document.getElementById('qa-feedback-box');
  feedbackBox.innerHTML = '';

  if(list.length < 4) {
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('combo-display').style.display = 'none';
    document.getElementById('qa-mode-title').innerText = '【エラー】';
    document.getElementById('qa-question-text').innerText = 'この条件では4択問題を作成するのに十分な単語（4単語以上）がありません。フィルターや別のPartを選んでください。';
    document.getElementById('qa-options-box').innerHTML = '';
    return;
  }

  const comboDisp = document.getElementById('combo-display');
  comboDisp.style.display = 'block';
  comboDisp.innerText = `🔥 ${comboCount} コンボ！`;

  const randomIndex = Math.floor(Math.random() * list.length);
  const word = list[randomIndex];
  currentQuestionWord = word;

  document.getElementById('qa-mode-title').innerText = `【タイムアタック - ${unitObj.unit} ${partObj.part} (${currentQuestionCount}/10問目)】`;
  document.getElementById('qa-question-text').innerText = `「${word.meaning}」を意味する英語はどれでしょう？`;

  const correctAnswerText = `${word.word} (${word.meaning})`;
  const optionsSet = new Set([correctAnswerText]);

  while(optionsSet.size < 4) {
    const dummy = list[Math.floor(Math.random() * list.length)];
    optionsSet.add(`${dummy.word} (${dummy.meaning})`);
  }

  const optionsArray = Array.from(optionsSet).sort(() => Math.random() - 0.5);
  const optionsBox = document.getElementById('qa-options-box');
  optionsBox.innerHTML = '';

  optionsArray.forEach(optText => {
    const btn = document.createElement('button');
    btn.className = 'qa-opt-btn';
    btn.innerText = optText;
    btn.onclick = () => selectQuestionAnswer(btn, optText, correctAnswerText);
    optionsBox.appendChild(btn);
  });

  startTimer();
}

function selectQuestionAnswer(clickedBtn, selectedText, correctText) {
  if(isSelected) return;
  isSelected = true;
  clearInterval(timerInterval);

  const buttons = document.querySelectorAll('.qa-opt-btn');
  const feedbackBox = document.getElementById('qa-feedback-box');

  buttons.forEach(btn => {
    btn.classList.add('disabled');
    if(btn.innerText === correctText) btn.classList.add('correct');
  });

  const isCorrect = (selectedText === correctText);
  if(isCorrect) {
    comboCount++;
    if(comboCount > maxCombo) maxCombo = comboCount;
    correctCount++;
    clickedBtn.classList.add('correct');
    feedbackBox.className = 'qa-feedback correct';
    feedbackBox.innerHTML = `<strong>⭕ 正解！（コンボ: 🔥 ${comboCount}）</strong><br>「${currentQuestionWord.meaning}」の英語は <strong>${currentQuestionWord.word}</strong> です！`;
    
    if(comboCount % 5 === 0 && typeof confetti === 'function') {
      confetti({particleCount: 50, angle: 60, spread: 55, origin: {x: 0}});
      confetti({particleCount: 50, angle: 120, spread: 55, origin: {x: 1}});
    }
  } else {
    comboCount = 0;
    clickedBtn.classList.add('incorrect');
    feedbackBox.className = 'qa-feedback incorrect';
    feedbackBox.innerHTML = `<strong>❌ 不正解（コンボがリセットされました）</strong><br>正解は「<strong>${correctText}</strong>」です。`;
  }

  document.getElementById('combo-display').innerText = `🔥 ${comboCount} コンボ！`;
  createNextOrResultButton(feedbackBox);
}

function createNextOrResultButton(feedbackBox) {
  const nextBtn = document.createElement('button');
  nextBtn.className = 'qa-next-btn';
  if(currentQuestionCount >= 10) {
    nextBtn.innerText = 'テスト結果を見る ➔';
  } else {
    nextBtn.innerText = '次へ ➔';
  }
  nextBtn.onclick = generateQuestion;
  feedbackBox.appendChild(document.createElement('br'));
  feedbackBox.appendChild(nextBtn);
}

function showQuizResult() {
  clearInterval(timerInterval);
  document.getElementById('timer-container').style.display = 'none';
  document.getElementById('combo-display').style.display = 'none';
  document.getElementById('qa-mode-title').innerText = '🎉 テスト結果発表 🎉';
  document.getElementById('qa-question-text').innerText = '10問のタイムアタックテストが終了しました！';
  document.getElementById('qa-options-box').innerHTML = '';

  const feedbackBox = document.getElementById('qa-feedback-box');
  feedbackBox.className = 'qa-feedback correct';
  feedbackBox.style.textAlign = 'center';
  feedbackBox.innerHTML = `
    <div style="font-size:18px;margin-bottom:10px;"><strong>正解数: ${correctCount} / 10 問 ⭕</strong></div>
    <div style="font-size:16px;color:#ef4444;margin-bottom:20px;"><strong>最高連続正解: 🔥 ${maxCombo} コンボ！</strong></div>
    <button class="qa-next-btn" style="background:#22c55e;" onclick="restartQuizSet()">🔄 もう一度挑戦する</button>
  `;

  if(typeof confetti === 'function') {
    confetti({particleCount: 150, spread: 70, origin: {y: 0.6}});
  }
}

function setupScrollEvent() {
  window.addEventListener('scroll', () => {
    const btn = document.getElementById('scrollTopBtn');
    if(window.scrollY > 200) {
      if(btn) btn.classList.add('show');
    } else {
      if(btn) btn.classList.remove('show');
    }
  });
}

window.addEventListener('DOMContentLoaded', initSite);
