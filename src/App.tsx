import React, { useState, useEffect, useRef, useMemo } from 'react';

const Sparkles = () => <span>✨</span>;
const Home = () => <span>🏠</span>;
const BookOpen = () => <span>📖</span>;
const Calendar = () => <span>📅</span>;
const Volume2 = () => <span>🔊</span>;
const VolumeX = () => <span>🔇</span>;
const Flame = () => <span>🔥</span>;
const Moon = () => <span>🌙</span>;
const Sun = () => <span>☀️</span>;
const Download = () => <span>📥</span>;
const RefreshCw = () => <span>🔄</span>;
const X = () => <span>✕</span>;
const Check = () => <span>✓</span>;
const Smartphone = () => <span>📱</span>;
const Info = () => <span>ℹ️</span>;
const Smile = () => <span>😊</span>;
const Coffee = () => <span>☕</span>;
const Feather = () => <span>🪶</span>;
const ChevronRight = () => <span>›</span>;

const DECK_CARDS = [
  // 動態探索 (Active)
  {
    id: 1,
    name: '換一條路回家',
    category: 'active',
    categoryName: '動態探索',
    emoji: '👟',
    xp: 30,
    guide: '繞開走慣的路口，看看今天路邊會出現哪隻貓或哪棵樹。',
  },
  {
    id: 2,
    name: '慢跑一小段',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🏃',
    xp: 40,
    guide: '不測配速、不限距離，跑到呼吸稍微變深就停下來散步。',
  },
  {
    id: 3,
    name: '流一場汗的運動',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🏸',
    xp: 50,
    guide: '揮拍、跑步、重訓或拉筋，把積在體內的沉悶隨汗水排掉。',
  },
  {
    id: 4,
    name: '抬頭找三朵雲',
    category: 'active',
    categoryName: '動態探索',
    emoji: '☁️',
    xp: 25,
    guide: '出門時別只看著地面或手機，停下腳步看看今天天空的形狀。',
  },
  {
    id: 5,
    name: '踩進便利商店晃十分鐘',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🏪',
    xp: 20,
    guide: '沒有特定想買的東西也沒關係，只是去吹吹冷氣、看看新包裝。',
  },
  {
    id: 6,
    name: '到附近的公園坐一會兒',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🌳',
    xp: 30,
    guide: '找一張長椅坐下，聽落葉的聲音，什麼事都不做也完全可以。',
  },
  {
    id: 7,
    name: '踩踩地上的影子',
    category: 'active',
    categoryName: '動態探索',
    emoji: '👣',
    xp: 25,
    guide: '在陽光或街燈下散步五分鐘，感知自己與地面的真實接觸。',
  },
  {
    id: 8,
    name: '走上一座天橋或高處',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🌉',
    xp: 35,
    guide: '換個高度看城市裡的車流與人潮，提醒自己世界其實很大。',
  },
  {
    id: 9,
    name: '整理一個角落的小散步',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🪴',
    xp: 30,
    guide: '從桌角或玄關開始，走動收拾五樣小東西，讓空間稍微透氣。',
  },
  {
    id: 10,
    name: '買一杯平常不喝的飲料',
    category: 'active',
    categoryName: '動態探索',
    emoji: '🥤',
    xp: 25,
    guide: '換一間沒去過的店，或是點平常不會選的甜度與品項。',
  },

  // 靜態感知 (Mindful)
  {
    id: 11,
    name: '記錄一個微小聲音',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '🎧',
    xp: 25,
    guide: '閉上眼 30 秒，專注聽冰箱運轉聲、雨聲或遠處的車聲。',
  },
  {
    id: 12,
    name: '隨手畫幾筆線條',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '✏️',
    xp: 30,
    guide: '不需要畫成一幅畫，拿紙筆隨意塗鴉，讓手去感覺紙張的質地。',
  },
  {
    id: 13,
    name: '吃第一口時不看手機',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '🍚',
    xp: 30,
    guide: '專注嚐第一口飯菜的味道與溫度，吃完這一口再拿起螢幕。',
  },
  {
    id: 14,
    name: '寫下一句喜歡的字句',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '📖',
    xp: 25,
    guide: '從最近看的書、歌詞或招牌上，抄下一句讓你停頓片刻的話。',
  },
  {
    id: 15,
    name: '摸摸植物的葉子',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '🌿',
    xp: 20,
    guide: '路邊的小草或家裡的盆栽都好，指尖感受它的紋理與生命感。',
  },
  {
    id: 16,
    name: '刪掉五張相簿廢片',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '📱',
    xp: 25,
    guide: '翻翻手機相簿，清掉重複模糊的截圖，順便看看過去的自己。',
  },
  {
    id: 17,
    name: '拍下一道光影',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '🌅',
    xp: 30,
    guide: '窗邊灑進來的陽光、水杯倒映的光斑，按下快門收進圖鑑。',
  },
  {
    id: 18,
    name: '翻開一本書看三頁',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '📚',
    xp: 25,
    guide: '不管是小說、漫畫還是詩集，只看三頁就闔上，不求讀完。',
  },
  {
    id: 19,
    name: '給重要的人留一句真心話',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '💌',
    xp: 40,
    guide: '不需要長篇大論，傳一句『今天看到這個想到你』就足夠溫柔。',
  },
  {
    id: 20,
    name: '深呼吸五次',
    category: 'mindful',
    categoryName: '靜態感知',
    emoji: '🌬️',
    xp: 20,
    guide: '吐氣吐到最底，吸氣吸到最滿，把緊繃的肩膀慢慢放下來。',
  },

  // 身心修復 (Restful)
  {
    id: 21,
    name: '允許今天不長進',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '☁️',
    xp: 40,
    guide: '偶爾無所作為並不可恥，今天你的任務就是平平安安地度過今天。',
  },
  {
    id: 22,
    name: '喝一杯熱熱的水',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🍵',
    xp: 20,
    guide: '雙手捧著杯子感受熱度，慢慢喝完，讓溫暖流進胃裡。',
  },
  {
    id: 23,
    name: '發呆五分鐘',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🫧',
    xp: 30,
    guide: '眼睛不聚焦在任何事上，放空大腦，讓思緒像泡泡一樣自由飄走。',
  },
  {
    id: 24,
    name: '換上一套最舒服的衣服',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '👕',
    xp: 25,
    guide: '脫下拘謹的襯衫或緊繃的褲子，換上那件洗到鬆軟的舊 T 恤。',
  },
  {
    id: 25,
    name: '好好洗個熱水澡',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🛁',
    xp: 35,
    guide: '讓水流沖過頭頂和肩膀，把今天沾染的疲憊與緊繃全沖進排水孔。',
  },
  {
    id: 26,
    name: '把手機翻過去 20 分鐘',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '⏳',
    xp: 35,
    guide: '螢幕朝下放在桌上，全世界的通知都可以在這 20 分鐘後再說。',
  },
  {
    id: 27,
    name: '給自己一個溫和的擁抱',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🫂',
    xp: 30,
    guide: '雙手抱住雙臂，跟自己說一聲：『今天辛苦了，你做得很好。』',
  },
  {
    id: 28,
    name: '準時躺上床',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🛏️',
    xp: 40,
    guide: '不論事情做完了沒，時間到了就閉上眼睛，把明天留給明天。',
  },
  {
    id: 29,
    name: '點一盞小燈',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '💡',
    xp: 25,
    guide: '關掉刺眼的白色頂燈，只留一盞暖黃桌燈，讓房間安靜下來。',
  },
  {
    id: 30,
    name: '躺平聽完一首歌',
    category: 'restful',
    categoryName: '身心修復',
    emoji: '🎵',
    xp: 30,
    guide: '戴上耳機整個人躺平在床上，不開螢幕，完整聽完一首純音樂。',
  },
];

const MASCOT_QUOTES = [
  '別人的步調看起來很快對不對？但時鐘就算轉得再快，也不會替你過你的人生。今天慢慢走，剛剛好。',
  '你現在找不到方向，不是因為你走錯了，只是剛好走進了一片起霧的森林。坐下來烤個火，霧總會散的。',
  '世界上只有一種成功，就是用自己舒服的節奏活著。你不用變成厲害的大人，當好現在的自己就滿分了。',
  '履歷上的幾行字，裝不下你吹過的晚風、愛看的光影，和你柔軟的心。那些才是你真實存在的證明。',
  '今天投出的信沒有回音也沒關係，今天的陽光已經先擁抱你了。',
  '如果你覺得落後了，那只是因為你跟他們走的根本不是同一張地圖呀。',
  '偷偷跟你說個秘密：旁邊那個看似很篤定的人，其實手心也在冒汗呢。大家都是第一次當大人。',
  '今天什麼都沒做？太棒了！你的心靈電池剛剛終於充進了 1% 的電，這可是非常重要的進度。',
  '你不是一棵必須馬上開花的樹，有些種子在泥土裡發呆很久，是在把根扎得更深更穩。',
  '把別人的『精彩片段』和自己的『未剪輯日常』放在一起比，太不公平了啦。吃塊餅乾，不比了。',
  '就算你今天只是安全地待著、呼吸著，你對這個世界就已經足夠溫柔了。',
  '偶爾羨慕別人是很正常的，但別忘了，你眼裡的光，也有人在悄悄注視著喔。',
  '肩膀是不是又悄悄縮起來了？吐一口長長的氣，把沉重的盔甲先脫在門口，小屋裡很安全。',
  '今天被現實撞得有點痛對吧？來，窩進厚毯子裡，暖暖糰會幫你擋住外面的風。',
  '不用隨時保持正能量啦，偶爾當一顆洩氣的皮球，軟綿綿的其實也很舒服。',
  '今天遇到的討厭事，就讓它們隨著洗澡水流走吧，咕嚕咕嚕，不值得帶進被窩裡。',
  '世界催你趕快跑，但我只在乎你今天有沒有喝夠水、有沒有好好吃飽。',
  '睡吧睡吧，明天的事留給明天的太陽去煩惱，今晚的月亮只負責陪你做夢。',
];

const STICKERS = [
  { id: 'tangerine', label: '甜甜蜜柑', emoji: '🍊', rotate: '-6deg' },
  { id: 'sprout', label: '放鬆嫩芽', emoji: '🌱', rotate: '8deg' },
  { id: 'sparkles', label: '日光微塵', emoji: '✨', rotate: '-3deg' },
  { id: 'tea', label: '熱焙茶一杯', emoji: '🍵', rotate: '5deg' },
  { id: 'heart', label: '溫和抱抱', emoji: '🧡', rotate: '-8deg' },
  { id: 'cat', label: '呼嚕小貓', emoji: '🐱', rotate: '4deg' },
];

class CozySoundEngine {
  constructor() {
    this.ctx = null;
    this.currentTrack = null;
    this.nodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  stop() {
    this.nodes.forEach((n) => {
      try {
        n.stop && n.stop();
        n.disconnect && n.disconnect();
      } catch (e) {}
    });
    this.nodes = [];
    this.currentTrack = null;
  }

  play(type) {
    this.init();
    if (!this.ctx) return;
    this.stop();
    this.currentTrack = type;

    if (type === 'rain') {
      // Procedural soft pink/brown noise rain
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
      this.nodes = [noise, filter, gain];
    } else if (type === 'fire') {
      // Crackling fireplace sound
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] =
          Math.random() > 0.985
            ? (Math.random() * 2 - 1) * 0.8
            : (Math.random() * 2 - 1) * 0.02;
      }
      const crackle = this.ctx.createBufferSource();
      crackle.buffer = buffer;
      crackle.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);

      crackle.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      crackle.start();
      this.nodes = [crackle, filter, gain];
    } else if (type === 'piano') {
      // Gentle repeating warm pentatonic chime chords
      const notes = [261.63, 329.63, 392.0, 523.25, 587.33]; // C E G C D
      let step = 0;
      const interval = setInterval(() => {
        if (!this.ctx || this.currentTrack !== 'piano') {
          clearInterval(interval);
          return;
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(
          notes[step % notes.length],
          this.ctx.currentTime
        );
        step++;

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          this.ctx.currentTime + 1.8
        );

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.9);
      }, 900);
      this.nodes = [{ stop: () => clearInterval(interval) }];
    }
  }
}

const audioPlayer = new CozySoundEngine();

export default function App() {
  const [activeTab, setActiveTab] = useState('card'); // 'card' | 'cabin' | 'collection' | 'monthly'
  const [xp, setXp] = useState(140);
  const [savedCards, setSavedCards] = useState([]);

  // Card Draw State
  const [todayCard, setTodayCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [redrawCount, setRedrawCount] = useState(2);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState(STICKERS[0]);
  const [userNote, setUserNote] = useState('');
  const [sparkleActive, setSparkleActive] = useState(false);

  // Mascot & Cabin State
  const [mascotQuote, setMascotQuote] = useState(MASCOT_QUOTES[0]);
  const [isWiggling, setIsWiggling] = useState(false);
  const [worryText, setWorryText] = useState('');
  const [fireplaceBurned, setFireplaceBurned] = useState(false);
  const [currentAmbience, setCurrentAmbience] = useState(null); // 'rain' | 'fire' | 'piano' | null
  const [isBedTime, setIsBedTime] = useState(false);

  // PWA Install State
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  // Collection Filter & Inspect
  const [filterCategory, setFilterCategory] = useState('all');
  const [inspectCard, setInspectCard] = useState(null);

  useEffect(() => {
    // 1. Setup simulated or saved storage
    const cachedCards = localStorage.getItem('slowdown_cards');
    const cachedXp = localStorage.getItem('slowdown_xp');
    if (cachedCards) {
      try {
        setSavedCards(JSON.parse(cachedCards));
      } catch (e) {}
    } else {
      // Seed two pleasant starter memories
      const seeds = [
        {
          id: 'seed-1',
          cardId: 21,
          name: '允許今天不長進',
          category: 'restful',
          categoryName: '身心修復',
          guide: '偶爾無所作為並不可恥，今天你的任務就是平平安安地度過今天。',
          note: '今天下午外面下了大雨，什麼都沒做，只在沙發上看著水滴滑落，心裡很平靜。',
          sticker: STICKERS[0],
          date: '2026.10.05',
          xp: 40,
        },
        {
          id: 'seed-2',
          cardId: 1,
          name: '換一條路回家',
          category: 'active',
          categoryName: '動態探索',
          guide: '繞開走慣的路口，看看今天路邊會出現哪隻貓或哪棵樹。',
          note: '轉進了平時從沒走過的小巷，竟然遇見一隻曬太陽的橘貓！',
          sticker: STICKERS[1],
          date: '2026.10.04',
          xp: 30,
        },
      ];
      setSavedCards(seeds);
      localStorage.setItem('slowdown_cards', JSON.stringify(seeds));
    }
    if (cachedXp) setXp(parseInt(cachedXp, 10));

    // 2. Initial Daily Card
    const randomCard =
      DECK_CARDS[Math.floor(Math.random() * DECK_CARDS.length)];
    setTodayCard(randomCard);

    // 3. PWA beforeinstallprompt handler
    const installHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', installHandler);

    if (
      window.matchMedia &&
      window.matchMedia('(display-mode: standalone)').matches
    ) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', installHandler);
      audioPlayer.stop();
    };
  }, []);

  // Sync to storage
  useEffect(() => {
    localStorage.setItem('slowdown_xp', xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('slowdown_cards', JSON.stringify(savedCards));
  }, [savedCards]);

  const cabinLevel = useMemo(() => {
    if (xp < 200)
      return {
        level: 1,
        title: '簡樸小閣樓',
        desc: '安靜無聲的落腳處，透著微光與木頭香',
        max: 200,
        next: '陽光小木屋',
      };
    if (xp < 500)
      return {
        level: 2,
        title: '陽光小木屋',
        desc: '多了蓬鬆毛毯、窗邊綠植，與偶爾來訪的鳥鳴',
        max: 500,
        next: '溫暖樹屋茶坊',
      };
    return {
      level: 3,
      title: '溫暖樹屋茶坊',
      desc: '暖意洋溢的心靈港灣，壁爐火光永不熄滅',
      max: 1000,
      next: '最高等心靈殿堂',
    };
  }, [xp]);

  const handlePokeMascot = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 600);
    const nextQuote =
      MASCOT_QUOTES[Math.floor(Math.random() * MASCOT_QUOTES.length)];
    setMascotQuote(nextQuote);
  };

  const handleRedraw = () => {
    if (redrawCount <= 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      const remainingDeck = DECK_CARDS.filter((c) => c.id !== todayCard?.id);
      const nextCard =
        remainingDeck[Math.floor(Math.random() * remainingDeck.length)];
      setTodayCard(nextCard);
      setRedrawCount((prev) => prev - 1);
    }, 250);
  };

  const handleSaveMemory = () => {
    if (!todayCard) return;
    const newEntry = {
      id: `card-${Date.now()}`,
      cardId: todayCard.id,
      name: todayCard.name,
      category: todayCard.category,
      categoryName: todayCard.categoryName,
      guide: todayCard.guide,
      note: userNote.trim() || '今天沒有特別的話，但日子依然算數。',
      sticker: selectedSticker,
      date: new Date()
        .toLocaleDateString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\//g, '.'),
      xp: todayCard.xp,
    };

    setSavedCards([newEntry, ...savedCards]);
    setXp((prev) => prev + todayCard.xp);
    setSparkleActive(true);
    setTimeout(() => setSparkleActive(false), 2000);
    setIsEditorOpen(false);
    setUserNote('');
  };

  const handleBurnWorry = (e) => {
    e.preventDefault();
    if (!worryText.trim()) return;
    setFireplaceBurned(true);
    setTimeout(() => {
      setFireplaceBurned(false);
      setWorryText('');
      setXp((prev) => prev + 15);
    }, 2500);
  };

  const toggleSound = (soundType) => {
    if (currentAmbience === soundType) {
      audioPlayer.stop();
      setCurrentAmbience(null);
    } else {
      audioPlayer.play(soundType);
      setCurrentAmbience(soundType);
    }
  };

  const exportCardToStory = (targetCard) => {
    const cardData = targetCard || todayCard;
    if (!cardData) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = 1080;
    const height = 1920;
    canvas.width = width;
    canvas.height = height;

    // 1. Cozy warm gradient background
    const bg = ctx.createLinearGradient(0, 0, 0, height);
    bg.addColorStop(0, '#FFFDF8');
    bg.addColorStop(0.5, '#FFF2DD');
    bg.addColorStop(1, '#FFE3C6');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // 2. Branding header
    ctx.fillStyle = '#4A3B32';
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('慢慢來 ｜ 生活記憶卡', width / 2, 220);

    ctx.fillStyle = '#8C7A6B';
    ctx.font = '26px sans-serif';
    ctx.fillText('「把日子收進卡牌裡，今天也算數。」', width / 2, 280);

    // 3. Main Polaroid card base
    const cardW = 820;
    const cardH = 1140;
    const cardX = (width - cardW) / 2;
    const cardY = 360;

    // Shadow
    ctx.save();
    ctx.shadowColor = 'rgba(217, 119, 36, 0.2)';
    ctx.shadowBlur = 45;
    ctx.shadowOffsetY = 25;
    ctx.fillStyle = '#FFFFFF';
    roundRect(ctx, cardX, cardY, cardW, cardH, 44);
    ctx.fill();
    ctx.restore();

    // Border
    ctx.strokeStyle = '#F7ECE1';
    ctx.lineWidth = 3;
    roundRect(ctx, cardX, cardY, cardW, cardH, 44);
    ctx.stroke();

    // 4. Washi tape
    ctx.save();
    ctx.translate(width / 2, cardY);
    ctx.rotate((-2.5 * Math.PI) / 180);
    ctx.fillStyle = 'rgba(255, 232, 163, 0.9)';
    roundRect(ctx, -140, -24, 280, 50, 8);
    ctx.fill();
    ctx.restore();

    // 5. Illustration Box
    const innerW = 720;
    const innerH = 540;
    const innerX = (width - innerW) / 2;
    const innerY = cardY + 65;

    ctx.fillStyle = '#FFF9F0';
    roundRect(ctx, innerX, innerY, innerW, innerH, 32);
    ctx.fill();
    ctx.strokeStyle = '#F7E7D4';
    ctx.lineWidth = 2;
    roundRect(ctx, innerX, innerY, innerW, innerH, 32);
    ctx.stroke();

    // Illustration contents
    ctx.font = '100px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(cardData.emoji || '☁️', width / 2, innerY + 210);

    ctx.fillStyle = '#D97724';
    ctx.font = 'bold 28px sans-serif';
    ctx.fillText(
      `${cardData.categoryName || '身心修復'} • NO.${String(
        cardData.cardId || cardData.id
      ).padStart(3, '0')}`,
      width / 2,
      innerY + 300
    );

    ctx.fillStyle = '#3E3129';
    ctx.font = 'bold 50px sans-serif';
    ctx.fillText(cardData.name, width / 2, innerY + 380);

    ctx.fillStyle = '#8C7A6B';
    ctx.font = '26px sans-serif';
    ctx.fillText(cardData.guide, width / 2, innerY + 440);

    // Washi Sticker
    const stickerToDraw = cardData.sticker || selectedSticker;
    ctx.save();
    ctx.translate(innerX + innerW - 80, innerY + 80);
    ctx.rotate((parseFloat(stickerToDraw.rotate || '0') * Math.PI) / 180);
    ctx.font = '72px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(stickerToDraw.emoji, 0, 20);
    ctx.restore();

    // 6. User note bubble
    const noteW = 720;
    const noteH = 200;
    const noteX = (width - noteW) / 2;
    const noteY = innerY + innerH + 45;

    ctx.fillStyle = '#FAF7F2';
    roundRect(ctx, noteX, noteY, noteW, noteH, 24);
    ctx.fill();

    ctx.fillStyle = '#4A3B32';
    ctx.font = 'italic 28px serif';
    ctx.textAlign = 'left';
    const noteText =
      cardData.note || userNote || '今天什麼都沒做，但也好好活過來了。';
    ctx.fillText(`“ ${noteText} ”`, noteX + 40, noteY + 110, noteW - 80);

    // 7. Footer Info
    ctx.fillStyle = '#B0A296';
    ctx.font = 'bold 24px monospace';
    ctx.fillText(cardData.date || '2026.10.06', cardX + 50, cardY + cardH - 60);

    ctx.textAlign = 'right';
    ctx.font = '26px sans-serif';
    ctx.fillStyle = '#D97724';
    ctx.fillText(
      '✦ 慢慢來，今天也算數。',
      cardX + cardW - 50,
      cardY + cardH - 60
    );

    // 8. Bottom IG watermarks
    ctx.textAlign = 'center';
    ctx.font = '26px sans-serif';
    ctx.fillStyle = '#8C7A6B';
    ctx.fillText('— 慢慢來｜生活卡牌與心靈小屋 —', width / 2, 1750);

    const link = document.createElement('a');
    link.download = `慢慢來_${cardData.name}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  const handlePwaInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      setShowInstallModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#4A3B32] font-sans selection:bg-[#FFE3B3] flex flex-col justify-between">
      {}
      <header className="sticky top-0 z-30 bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#F5ECE3] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-[#FFEBD4] flex items-center justify-center text-xl shadow-xs">
            🍊
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-[#4A3B32] flex items-center gap-1.5">
              慢慢來{' '}
              <span className="text-[10px] bg-[#FFEAD1] text-[#D97724] px-2 py-0.5 rounded-full font-medium">
                生活遊戲
              </span>
            </h1>
            <p className="text-[10px] text-[#A19183] hidden sm:block">
              把日子收進卡牌裡，今天也算數
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* XP Sunlight Badge */}
          <div className="flex items-center gap-1 bg-[#FFF6E9] border border-[#FAD7A0] px-3 py-1.5 rounded-full text-xs font-bold text-[#C86A1B] shadow-xs">
            <Sparkles
              className="w-3.5 h-3.5 animate-spin"
              style={{ animationDuration: '6s' }}
            />
            <span>{xp} 暖意</span>
          </div>

          {/* PWA Install Button */}
          {!isInstalled && (
            <button
              onClick={handlePwaInstall}
              className="flex items-center gap-1 text-xs font-semibold bg-[#FF9B42] hover:bg-[#EE8628] text-white px-3 py-1.5 rounded-full shadow-xs transition-transform active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">下載 App</span>
            </button>
          )}
        </div>
      </header>

      {}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-5 flex flex-col">
        {/* Floating Sparkle Feedback Banner */}
        {sparkleActive && (
          <div className="mb-4 bg-[#EAF5EC] border border-[#BDE0C6] text-[#2D6A4F] px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs font-medium animate-bounce shadow-sm">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#40916C]" />
              太好了！記憶卡已妥善收進圖鑑，暖意值 +{todayCard?.xp} ✨
            </span>
          </div>
        )}

        {/* ================= TAB 1: 今日抽卡 (DAILY DRAW) ================= */}
        {activeTab === 'card' && todayCard && (
          <div className="flex flex-col items-center">
            {/* Mascot Banner Quote */}
            <div
              onClick={handlePokeMascot}
              className="w-full mb-5 cursor-pointer bg-[#FFF6E9] border border-[#FBE0B7] rounded-2xl p-3.5 flex items-start gap-3 shadow-xs hover:border-[#F6C883] transition-all"
            >
              <div
                className={`text-3xl select-none transition-transform ${
                  isWiggling ? 'scale-125 rotate-12' : 'hover:scale-110'
                }`}
              >
                🍊
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[11px] font-bold text-[#D97724]">
                    暖暖糰小聲說
                  </span>
                  <span className="text-[10px] text-[#B5A496]">點我戳一下</span>
                </div>
                <p className="text-xs text-[#5E4E44] leading-relaxed font-medium">
                  {mascotQuote}
                </p>
              </div>
            </div>

            {/* Polaroid 3D Flippable Card Frame */}
            <div className="relative group w-full max-w-[340px] perspective-1000 mb-6">
              {/* Cute Washi Tape Decor */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#FFE8A3]/90 border border-dashed border-[#DEBA64] shadow-xs rotate-[-2deg] z-20 rounded-xs flex items-center justify-center pointer-events-none">
                <div className="w-full border-t border-[#ECCB77]/60"></div>
              </div>

              {/* Card Container */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full bg-white rounded-3xl p-5 shadow-[0_16px_36px_rgba(217,119,36,0.12)] border border-[#F2E5D5] transition-all duration-300 cursor-pointer ${
                  isFlipped ? 'rotate-y-0' : 'hover:-translate-y-1'
                }`}
              >
                {/* Visual Area */}
                <div className="relative w-full aspect-4/3 bg-[#FFF9F0] rounded-2xl border border-[#F7E8D6] flex flex-col items-center justify-center p-4 overflow-hidden">
                  {/* Category Pill */}
                  <span
                    className={`text-[11px] font-bold px-3 py-0.5 rounded-full mb-1.5 ${
                      todayCard.category === 'active'
                        ? 'bg-[#FEEEDD] text-[#B45309]'
                        : todayCard.category === 'mindful'
                        ? 'bg-[#EAF2EC] text-[#2D6A4F]'
                        : 'bg-[#FEF7DA] text-[#946C00]'
                    }`}
                  >
                    {todayCard.categoryName} • NO.
                    {String(todayCard.id).padStart(3, '0')}
                  </span>

                  {/* Icon */}
                  <div className="text-6xl mb-2 filter drop-shadow-xs animate-pulse">
                    {todayCard.emoji}
                  </div>

                  <h3 className="text-xl font-bold text-[#3B2F27]">
                    {todayCard.name}
                  </h3>

                  <p className="text-xs text-[#8C7A6B] mt-1.5 text-center px-2 line-clamp-2">
                    {todayCard.guide}
                  </p>
                </div>

                {/* Footer Notes Preview */}
                <div className="mt-4 pt-3 border-t border-[#F8EFE6] flex items-center justify-between text-xs text-[#9B8B7E]">
                  <span className="font-mono">2026.10.06 TUE</span>
                  <span className="text-[#D97724] font-bold">
                    +{todayCard.xp} 暖意
                  </span>
                </div>
              </div>
            </div>

            {/* Draw Actions */}
            <div className="w-full max-w-[340px] flex items-center gap-3">
              <button
                onClick={() => setIsEditorOpen(true)}
                className="flex-1 py-3 px-4 rounded-2xl bg-[#FF9B42] hover:bg-[#EE8628] text-white font-bold text-sm shadow-[0_6px_20px_rgba(255,155,66,0.35)] flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>收進日子</span>
                <span>✨</span>
              </button>

              <button
                onClick={handleRedraw}
                disabled={redrawCount <= 0}
                className="py-3 px-4 rounded-2xl bg-[#FFF5E6] hover:bg-[#FFE9CD] text-[#7A5A43] font-semibold text-xs border border-[#F8DEC0] flex items-center gap-1.5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                title="重新抽取一張卡片"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>換一張 ({redrawCount})</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= TAB 2: 個人小屋 (COZY HAVEN) ================= */}
        {activeTab === 'cabin' && (
          <div
            className={`flex flex-col items-center transition-colors duration-700 rounded-3xl p-4 ${
              isBedTime
                ? 'bg-[#2E2836] text-[#E8DEED]'
                : 'bg-[#FFF9F2] text-[#4A3B32]'
            } border border-[#F4E4D3]`}
          >
            {/* Level & Upgrade Header */}
            <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-[#EFE1D2]/60">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D97724]">
                  LV.{cabinLevel.level} {cabinLevel.title}
                </span>
                <p className="text-xs opacity-75">{cabinLevel.desc}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold">
                  {xp} / {cabinLevel.max} XP
                </span>
                <div className="w-24 h-2 bg-[#E9DACB] rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-[#FF9B42] transition-all duration-500 rounded-full"
                    style={{
                      width: `${Math.min(100, (xp / cabinLevel.max) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Cozy Vector Scene Container */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFEBD0]/40 to-[#FFE3C4]/60 border border-[#F2DAC4] p-4 flex flex-col justify-between select-none">
              {/* Skylight Window (Time & Rain) */}
              <div className="flex justify-between items-start">
                <div className="bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-[#F3E1CF] shadow-xs text-xs flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-[#FFA500]" />
                  <span className="font-medium text-[#6B5A4E]">
                    晴空天窗 • 秋日微風
                  </span>
                </div>

                {/* Sleep Mode Button */}
                <button
                  onClick={() => setIsBedTime(!isBedTime)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isBedTime
                      ? 'bg-[#FFC43D] text-[#3A2C1C] shadow-md'
                      : 'bg-white/80 text-[#7A6B5F] hover:bg-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>{isBedTime ? '天亮了' : '準備登出今天'}</span>
                </button>
              </div>

              {/* Center Interactive Mascots & Objects */}
              <div className="flex items-end justify-around my-auto">
                {/* Turntable / Vinyl */}
                <div
                  onClick={() => toggleSound('piano')}
                  className={`cursor-pointer p-3 rounded-2xl flex flex-col items-center transition-transform hover:scale-105 ${
                    currentAmbience === 'piano'
                      ? 'bg-[#FFDFBA] ring-2 ring-[#FF9B42]'
                      : 'bg-white/70'
                  }`}
                  title="點擊播放心靈音樂"
                >
                  <Disc
                    className={`w-7 h-7 text-[#7E6551] ${
                      currentAmbience === 'piano' ? 'animate-spin' : ''
                    }`}
                    style={{ animationDuration: '4s' }}
                  />
                  <span className="text-[10px] font-bold mt-1 text-[#6A5749]">
                    黑膠唱機
                  </span>
                </div>

                {/* Mascot Nuan-Nuan */}
                <div
                  onClick={handlePokeMascot}
                  className="cursor-pointer flex flex-col items-center group"
                >
                  <div
                    className={`text-6xl filter drop-shadow-md transition-transform duration-300 ${
                      isWiggling
                        ? 'scale-125 rotate-12'
                        : 'group-hover:scale-110'
                    }`}
                  >
                    🍊
                  </div>
                  <span className="text-[10px] bg-white/90 text-[#8C6D53] font-bold px-2 py-0.5 rounded-full mt-1 border border-[#F3DFC9]">
                    戳戳糰子
                  </span>
                </div>

                {/* Cozy Fireplace */}
                <div
                  onClick={() => toggleSound('fire')}
                  className={`cursor-pointer p-3 rounded-2xl flex flex-col items-center transition-transform hover:scale-105 ${
                    currentAmbience === 'fire'
                      ? 'bg-[#FFD1BA] ring-2 ring-[#E76F51]'
                      : 'bg-white/70'
                  }`}
                  title="點擊播放壁爐柴火聲"
                >
                  <Flame
                    className={`w-7 h-7 ${
                      currentAmbience === 'fire'
                        ? 'text-[#E76F51] animate-bounce'
                        : 'text-[#A08876]'
                    }`}
                  />
                  <span className="text-[10px] font-bold mt-1 text-[#6A5749]">
                    暖暖柴火
                  </span>
                </div>
              </div>

              {/* Rain Sound Ambient Toggle */}
              <div className="flex justify-center">
                <button
                  onClick={() => toggleSound('rain')}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 transition-colors ${
                    currentAmbience === 'rain'
                      ? 'bg-[#90B4CE] text-white'
                      : 'bg-white/60 text-[#7A695C] hover:bg-white/90'
                  }`}
                >
                  <Wind className="w-3 h-3" />
                  <span>
                    窗邊細雨白噪音 (
                    {currentAmbience === 'rain' ? '播放中' : '靜音'})
                  </span>
                </button>
              </div>
            </div>

            {/* Fireplace "Worry Burner" Mini-Game */}
            <div className="w-full mt-4 bg-white/80 rounded-2xl p-4 border border-[#F4E3D2]">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-4 h-4 text-[#E76F51]" />
                <h4 className="text-xs font-bold text-[#4A3B32]">
                  壁爐煩惱焚化爐
                </h4>
                <span className="text-[10px] text-[#A6978A]">
                  （寫下今天的重擔，化為木屋的暖氣）
                </span>
              </div>

              {fireplaceBurned ? (
                <div className="p-4 bg-[#FFF0E6] border border-[#F8D2BD] rounded-xl text-center text-xs font-bold text-[#D9532F] animate-fade-in">
                  🔥 煩惱已經化為金色灰燼，溫暖了整個屋子。今天辛苦你了！ (+15
                  暖意)
                </div>
              ) : (
                <form onSubmit={handleBurnWorry} className="flex gap-2">
                  <input
                    type="text"
                    value={worryText}
                    onChange={(e) => setWorryText(e.target.value)}
                    placeholder="例如：擔心面試沒過、覺得自己進度落後..."
                    maxLength={40}
                    className="flex-1 bg-[#FAF6F0] border border-[#EFE2D3] rounded-xl px-3 py-2 text-xs text-[#4A3B32] focus:outline-none focus:border-[#FF9B42]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#E76F51] hover:bg-[#D45D3F] text-white text-xs font-bold transition-all active:scale-95"
                  >
                    燒掉
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 3: 生活圖鑑 / 記憶卡冊 ================= */}
        {activeTab === 'collection' && (
          <div className="flex flex-col">
            {/* Filter Pills */}
            <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 scrollbar-none">
              {[
                { key: 'all', label: '全部日子' },
                { key: 'active', label: '動態探索' },
                { key: 'mindful', label: '靜態感知' },
                { key: 'restful', label: '身心修復' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilterCategory(tab.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                    filterCategory === tab.key
                      ? 'bg-[#FF9B42] text-white shadow-xs'
                      : 'bg-[#FFF5E8] text-[#8C7A6B] hover:bg-[#FFEBD4]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            {savedCards.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-[#F3E7DC] p-6">
                <span className="text-4xl block mb-2">📦</span>
                <p className="text-xs text-[#8C7A6B] font-medium">
                  圖鑑還是空的呢，今天抽一張卡片試試看吧！
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3.5">
                {savedCards
                  .filter(
                    (c) =>
                      filterCategory === 'all' || c.category === filterCategory
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setInspectCard(item)}
                      className="bg-white rounded-2xl p-3 border border-[#F2E5D7] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        {/* Washi Sticker on top */}
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-[10px] text-[#A6978B] font-mono">
                            {item.date}
                          </span>
                          <span className="text-lg group-hover:scale-125 transition-transform">
                            {item.sticker?.emoji || '🍊'}
                          </span>
                        </div>

                        {/* Miniature Artwork */}
                        <div className="w-full aspect-square rounded-xl bg-[#FFF9F2] border border-[#F6E8D8] flex flex-col items-center justify-center p-2 text-center">
                          <span className="text-3xl mb-1">
                            {item.emoji || '☁️️'}
                          </span>
                          <h4 className="text-xs font-bold text-[#3E3228] line-clamp-1">
                            {item.name}
                          </h4>
                        </div>
                      </div>

                      <div className="mt-2 pt-2 border-t border-[#F8EFE7] flex items-center justify-between text-[10px] text-[#8C7A6B]">
                        <span className="line-clamp-1 italic">
                          “{item.note}”
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 4: 月底回顧 (MONTHLY REFLECTION) ================= */}
        {activeTab === 'monthly' && (
          <div className="flex flex-col gap-4">
            {/* Header Letter */}
            <div className="bg-white rounded-3xl p-5 border border-[#F2E5D7] shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#FFE8D1]/50 pointer-events-none"></div>
              <span className="text-xs font-bold text-[#D97724] uppercase tracking-wider block mb-1">
                2026 年 10 月 • 生活信箋
              </span>
              <h3 className="text-base font-bold text-[#4A3B32] mb-2">
                這個月的你，一共收進了 {savedCards.length} 個日子
              </h3>
              <p className="text-xs text-[#7A6B5E] leading-relaxed mb-4">
                「在繁忙與迷茫的縫隙裡，你依然為自己留下了這些微小的足跡。不管是深呼吸、換一條路走，還是僅僅允許自己躺平，這些都是你溫柔生活的證明。」
              </p>

              {/* Category Breakdown Ratio */}
              <div className="bg-[#FAF7F2] rounded-2xl p-3 border border-[#EFE5D8]">
                <span className="text-[11px] font-bold text-[#8C7A6B] block mb-2">
                  生活色彩分佈
                </span>
                <div className="flex h-3 rounded-full overflow-hidden gap-1">
                  <div
                    className="bg-[#F8A055]"
                    style={{ width: '40%' }}
                    title="動態探索"
                  ></div>
                  <div
                    className="bg-[#99B898]"
                    style={{ width: '35%' }}
                    title="靜態感知"
                  ></div>
                  <div
                    className="bg-[#FFC43D]"
                    style={{ width: '25%' }}
                    title="身心修復"
                  ></div>
                </div>
                <div className="flex justify-between items-center text-[10px] text-[#A6978B] mt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#F8A055]"></span>{' '}
                    動態 40%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#99B898]"></span>{' '}
                    靜態 35%
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FFC43D]"></span>{' '}
                    修復 25%
                  </span>
                </div>
              </div>
            </div>

            {/* Mascot Envelope Sign */}
            <div className="bg-[#FFF6E9] border border-[#F9DEC2] rounded-2xl p-4 flex items-center gap-3">
              <div className="text-4xl">✉️</div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-[#D97724]">
                  暖暖糰的溫暖叮嚀
                </h4>
                <p className="text-xs text-[#6A5A4E] mt-0.5">
                  「你沒有落後，你只是在自己的時區裡，慢慢盛開。」
                </p>
              </div>
            </div>

            {/* Export Monthly Recap Poster */}
            <button
              onClick={() => exportCardToStory(savedCards[0] || todayCard)}
              className="py-3 px-4 rounded-2xl bg-[#FF9B42] hover:bg-[#EE8628] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>匯出月度紀念長圖</span>
            </button>
          </div>
        )}
      </main>

      {}
      <nav className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#F4E9DE] px-6 py-2.5 flex items-center justify-around max-w-md w-full mx-auto">
        {[
          { key: 'card', label: '今日抽卡', icon: Sparkles },
          { key: 'cabin', label: '個人木屋', icon: Home },
          { key: 'collection', label: '生活圖鑑', icon: BookOpen },
          { key: 'monthly', label: '月底回顧', icon: Calendar },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
                isActive
                  ? 'text-[#FF9B42] font-bold scale-105'
                  : 'text-[#A6978B] hover:text-[#7A6B5F]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {}
      {isEditorOpen && todayCard && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 border border-[#F3E7DC] shadow-2xl flex flex-col gap-4 animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#F7EFE7]">
              <div>
                <h3 className="text-base font-bold text-[#4A3B32]">
                  把今天收進圖鑑
                </h3>
                <p className="text-xs text-[#A6978B]">
                  留下一句話或貼上喜歡的紙膠帶
                </p>
              </div>
              <button
                onClick={() => setIsEditorOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#8C7A6B] flex items-center justify-center hover:bg-[#F2ECE3]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Sticker Selector */}
            <div>
              <label className="block text-xs font-bold text-[#6E5D50] mb-2">
                挑選一枚手繪貼紙：
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {STICKERS.map((stk) => (
                  <button
                    key={stk.id}
                    onClick={() => setSelectedSticker(stk)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                      selectedSticker.id === stk.id
                        ? 'bg-[#FFF3E0] border-[#FF9B42] text-[#C86A1B] scale-105 shadow-xs'
                        : 'bg-[#FAF7F2] border-[#EFE7DC] text-[#7A6B5E]'
                    }`}
                  >
                    <span>{stk.emoji}</span>
                    <span>{stk.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Note Textarea */}
            <div>
              <label className="block text-xs font-bold text-[#6E5D50] mb-1.5">
                今天的心情小語：
              </label>
              <div className="bg-[#FAF7F2] rounded-2xl p-3 border border-[#EFE5D8] focus-within:border-[#FF9B42]">
                <textarea
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  maxLength={80}
                  rows={3}
                  className="w-full bg-transparent text-xs text-[#4A3B32] placeholder-[#B5A496] focus:outline-none resize-none leading-relaxed font-serif"
                  placeholder="隨便寫幾句，或者留白也可以喔..."
                />
                <div className="text-right text-[10px] text-[#B5A496] font-mono">
                  {userNote.length}/80
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => exportCardToStory(todayCard)}
                className="flex-1 py-3 px-3 rounded-2xl bg-[#FFF4E6] hover:bg-[#FFEAD0] text-[#D97724] border border-[#FAD8B2] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>匯出 IG 限動</span>
              </button>
              <button
                onClick={handleSaveMemory}
                className="flex-1 py-3 px-4 rounded-2xl bg-[#FF9B42] hover:bg-[#EE8628] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-[#FF9B42]/20 transition-all active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>確定收藏 (+{todayCard.xp} XP)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {inspectCard && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-3xl p-5 border border-[#F3E7DC] shadow-2xl flex flex-col gap-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#D97724]">
                {inspectCard.categoryName}
              </span>
              <button
                onClick={() => setInspectCard(null)}
                className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#8C7A6B] flex items-center justify-center hover:bg-[#F2ECE3]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-4/3 bg-[#FFF9F2] rounded-2xl border border-[#F6E8D8] flex flex-col items-center justify-center p-4">
              <div className="absolute top-2 right-2 text-3xl">
                {inspectCard.sticker?.emoji || '🍊'}
              </div>
              <span className="text-5xl mb-2">{inspectCard.emoji || '☁️'}</span>
              <h3 className="text-lg font-bold text-[#3E3228]">
                {inspectCard.name}
              </h3>
              <p className="text-xs text-[#8C7A6B] mt-1 text-center">
                {inspectCard.guide}
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EFE5D8] text-xs font-serif italic text-[#4A3B32]">
              “ {inspectCard.note} ”
            </div>

            <div className="flex justify-between items-center text-xs text-[#A6978B] pt-1">
              <span>{inspectCard.date}</span>
              <button
                onClick={() => exportCardToStory(inspectCard)}
                className="text-xs font-bold text-[#D97724] hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>匯出長圖</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {showInstallModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 border border-[#F3E7DC] shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#F7EFE7]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#FF9B42]" />
                <h3 className="text-base font-bold text-[#4A3B32]">
                  安裝《慢慢來》到手機主畫面
                </h3>
              </div>
              <button
                onClick={() => setShowInstallModal(false)}
                className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#8C7A6B] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#7A6B5E] leading-relaxed">
              把慢慢來加到手機主螢幕，隨時打開抽一張卡牌、聽聽柴火白噪音，就像原生
              App 一樣流暢，且資料完全儲存於手機！
            </p>

            <div className="bg-[#FFF9F2] p-4 rounded-2xl border border-[#F6E8D8] space-y-3 text-xs text-[#5A4B40]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FFEAD1] text-[#D97724] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-[#3A2E26]">
                    iOS Safari 使用者：
                  </strong>
                  <p className="mt-0.5 text-[#7A6B5E]">
                    點擊底部工具列中間的「分享 (Share)」圖示，滑動找到並點擊
                    <strong>「加入主畫面 (Add to Home Screen)」</strong>。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#FFEAD1] text-[#D97724] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-[#3A2E26]">
                    Android Chrome 使用者：
                  </strong>
                  <p className="mt-0.5 text-[#7A6B5E]">
                    點擊瀏覽器右上角選單（三個點），選擇
                    <strong>「安裝應用程式」</strong>或「新增至主螢幕」。
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowInstallModal(false)}
              className="w-full py-3 rounded-2xl bg-[#FF9B42] text-white font-bold text-xs"
            >
              我知道了，回到遊戲
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
