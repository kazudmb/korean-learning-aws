import { Category, Quiz } from '../types';

// フレーズデータ
export const phraseData: Category[] = [
  {
    id: 'greetings',
    title: '👋 あいさつ・日常',
    icon: '👋',
    phrases: [
      {
        korean: '안녕!',
        pronunciation: 'アンニョン！',
        japanese: 'やあ！/バイバイ！',
        usage: '친구同士の気軽な挨拶。こんにちは・さようならどちらにも使える'
      },
      {
        korean: '잘 지냈어?',
        pronunciation: 'チャル チネッソ？',
        japanese: '元気だった？',
        usage: '久しぶりに会った友達に使う定番フレーズ'
      },
      {
        korean: '뭐해?',
        pronunciation: 'モヘ？',
        japanese: '何してる？',
        usage: 'チャットやSNSでよく使われる超定番フレーズ'
      },
      {
        korean: '심심해',
        pronunciation: 'シムシメ',
        japanese: '暇だ/つまらない',
        usage: '退屈な時に使う。友達に構って欲しい時の定番'
      },
      {
        korean: '바쁘다 바빠',
        pronunciation: 'パップダ パッパ',
        japanese: '忙しい忙しい',
        usage: '語呂がよくて使いやすい。SNSでもよく見る表現'
      },
      {
        korean: '고생했어',
        pronunciation: 'コセンヘッソ',
        japanese: 'お疲れ様',
        usage: '友達や後輩に使う。年上には고생하셨어요を使う'
      },
      {
        korean: '잘자!',
        pronunciation: 'チャルジャ！',
        japanese: 'おやすみ！',
        usage: '親しい人におやすみを言う時の定番'
      },
      {
        korean: '또 봐!',
        pronunciation: 'ット ボァ！',
        japanese: 'また会おう！',
        usage: '別れ際に使う親しみやすい表現'
      }
    ]
  },
  {
    id: 'emotions',
    title: '😊 感情表現',
    icon: '😊',
    phrases: [
      {
        korean: '진짜?',
        pronunciation: 'チンッチャ？',
        japanese: '本当？/マジで？',
        usage: '驚いた時、確認したい時によく使う万能フレーズ'
      },
      {
        korean: '대박!',
        pronunciation: 'デバク！',
        japanese: 'やばい！/すげー！',
        usage: '驚いた時、感動した時に使う。とてもよく聞く表現'
      },
      {
        korean: '짜증나',
        pronunciation: 'チャジュンナ',
        japanese: 'イライラする/むかつく',
        usage: '不満を表す時によく使われる'
      },
      {
        korean: '기분 좋아',
        pronunciation: 'キブン チョア',
        japanese: '気分いい',
        usage: '機嫌がいい時、楽しい時に使う'
      },
      {
        korean: '슬프다',
        pronunciation: 'スルプダ',
        japanese: '悲しい',
        usage: '落ち込んだ時の素直な感情表現'
      },
      {
        korean: '무서워',
        pronunciation: 'ムソウォ',
        japanese: '怖い',
        usage: '恐怖を感じた時に使う基本表現'
      },
      {
        korean: '귀여워!',
        pronunciation: 'クィヨウォ！',
        japanese: 'かわいい！',
        usage: '可愛いものを見た時の定番リアクション'
      },
      {
        korean: '멋있어!',
        pronunciation: 'モシッソ！',
        japanese: 'かっこいい！',
        usage: '格好いい人や物に対する褒め言葉'
      }
    ]
  },
  {
    id: 'social',
    title: '💬 SNS・チャット',
    icon: '💬',
    phrases: [
      {
        korean: 'ㅋㅋㅋ',
        pronunciation: 'ククク',
        japanese: '笑',
        usage: '韓国のネット笑いの定番。日本の「www」みたいなもの'
      },
      {
        korean: 'ㅠㅠ',
        pronunciation: 'ウウ',
        japanese: '泣',
        usage: '悲しい・困った時のネット表現。涙の絵文字みたいな感じ'
      },
      {
        korean: '헐',
        pronunciation: 'ホル',
        japanese: 'え？/はぁ？',
        usage: '驚いた時、あきれた時によく使われる'
      },
      {
        korean: '잠시만',
        pronunciation: 'チャムシマン',
        japanese: 'ちょっと待って',
        usage: 'チャットで時間が欲しい時によく使う'
      },
      {
        korean: '오케이',
        pronunciation: 'オケイ',
        japanese: 'オーケー',
        usage: '英語のOKを韓国語読みしたもの。よく使われる'
      },
      {
        korean: '노노',
        pronunciation: 'ノノ',
        japanese: 'ダメダメ/違う違う',
        usage: '英語のNoNoから。断る時やツッコミに使う'
      },
      {
        korean: '굿굿',
        pronunciation: 'グッグッ',
        japanese: 'いいね！',
        usage: '英語のGoodから。いいことがあった時に使う'
      },
      {
        korean: '화이팅!',
        pronunciation: 'ファイティン！',
        japanese: '頑張って！/ファイト！',
        usage: '応援する時の定番。英語のFightingから'
      }
    ]
  },
  {
    id: 'dating',
    title: '💕 恋愛・友情',
    icon: '💕',
    phrases: [
      {
        korean: '좋아해',
        pronunciation: 'チョアヘ',
        japanese: '好き',
        usage: '恋愛感情を表す時に使う。物にも人にも使える'
      },
      {
        korean: '사랑해',
        pronunciation: 'サランヘ',
        japanese: '愛してる',
        usage: 'より深い愛情を表現する時に。カップルや家族に使う'
      },
      {
        korean: '보고 싶어',
        pronunciation: 'ポゴ シポ',
        japanese: '会いたい',
        usage: '恋人や親しい人に会いたい気持ちを伝える'
      },
      {
        korean: '미안해',
        pronunciation: 'ミアネ',
        japanese: 'ごめん',
        usage: '親しい人への謝罪。気軽に使える'
      },
      {
        korean: '고마워',
        pronunciation: 'コマウォ',
        japanese: 'ありがとう',
        usage: '親しい人への感謝。とてもよく使う'
      },
      {
        korean: '괜찮아',
        pronunciation: 'クェンチャナ',
        japanese: '大丈夫',
        usage: '心配してくれる人を安心させる時に使う'
      },
      {
        korean: '힘내!',
        pronunciation: 'ヒムネ！',
        japanese: '元気出して！',
        usage: '落ち込んでる人を励ます時の優しい表現'
      },
      {
        korean: '행복해',
        pronunciation: 'ヘンボケ',
        japanese: '幸せ',
        usage: '幸せな気持ちを素直に表現する時に'
      }
    ]
  }
];

// クイズデータ
export const quizData: Quiz[] = [
  {
    id: 'translation',
    title: '🔄 翻訳練習',
    icon: '🔄',
    questions: [
      {
        question: '「やあ！」を韓国語で言うと？',
        options: ['안녕하세요', '안녕!', '여보세요', '반갑습니다'],
        correct: 1,
        explanation: '친구同士の気軽な挨拶は「안녕!」です。'
      },
      {
        question: '「何してる？」を韓国語で言うと？',
        options: ['뭐해?', '어디가?', '언제와?', '왜그래?'],
        correct: 0,
        explanation: '「뭐해?」はチャットでよく使われる定番フレーズです。'
      },
      {
        question: '「本当？」を韓国語で言うと？',
        options: ['정말?', '진짜?', '맞아?', '그래?'],
        correct: 1,
        explanation: '「진짜?」は驚いた時によく使う万能フレーズです。'
      },
      {
        question: '「大丈夫」を韓国語で言うと？',
        options: ['괜찮아', '좋아', '안전해', '맞아'],
        correct: 0,
        explanation: '「괜찮아」は心配してくれる人を安心させる時に使います。'
      },
      {
        question: '「お疲れ様」を韓国語で言うと？',
        options: ['안녕히가세요', '감사합니다', '고생했어', '잘가요'],
        correct: 2,
        explanation: '「고생했어」は友達や後輩に使う親しみやすい表現です。'
      }
    ]
  },
  {
    id: 'listening',
    title: '👂 聞き取り練習',
    icon: '👂',
    questions: [
      {
        question: '친구가 「심심해」라고 했을 때, 무슨 뜻일까요?',
        options: ['忙しい', '楽しい', '暇だ', '眠い'],
        correct: 2,
        explanation: '「심심해」は退屈で暇な時に使います。'
      },
      {
        question: '「대박!」은 언제 사용하나요?',
        options: ['화날 때', '놀랐을 때', '슬플 때', '배고플 때'],
        correct: 1,
        explanation: '「대박!」は驚いた時や感動した時に使う表現です。'
      },
      {
        question: '「ㅋㅋㅋ」의 의미는?',
        options: ['화남', '웃음', '울음', '놀람'],
        correct: 1,
        explanation: '「ㅋㅋㅋ」は韓国のネット笑いの定番表現です。'
      },
      {
        question: '「화이팅!」은 언제 말하나요?',
        options: ['응원할 때', '인사할 때', '사과할 때', '거절할 때'],
        correct: 0,
        explanation: '「화이팅!」は応援する時の定番フレーズです。'
      },
      {
        question: '「보고 싶어」는 누구에게 말하나요?',
        options: ['선생님', '회사 상사', '친한 친구나 연인', '처음 만난 사람'],
        correct: 2,
        explanation: '「보고 싶어」는 친한 친구나 연인에게 사용하는 표현입니다。'
      }
    ]
  },
  {
    id: 'situation',
    title: '🎭 状況別練習',
    icon: '🎭',
    questions: [
      {
        question: '친구와의 채팅에서 재미있는 이야기를 들었을 때:',
        options: ['네, 감사합니다', 'ㅋㅋㅋ 대박!', '죄송합니다', '안녕히 계세요'],
        correct: 1,
        explanation: '친구와의 채팅에서는 「ㅋㅋㅋ 대박!」이 자연스럽습니다。'
      },
      {
        question: '친구가 힘들어할 때 격려하고 싶다면:',
        options: ['바쁘다 바빠', '힘내! 괜찮아', '심심해', '짜증나'],
        correct: 1,
        explanation: '「힘내! 괜찮아」로 격려하는 것이 좋습니다。'
      },
      {
        question: '친구와 헤어질 때:',
        options: ['안녕히 가십시오', '또 봐! 잘자!', '감사합니다', '실례합니다'],
        correct: 1,
        explanation: '친구와는 「또 봐! 잘자!」처럼 친근하게 인사합니다。'
      },
      {
        question: '친구의 새 옷이 예쁠 때:',
        options: ['비싸 보여요', '귀여워! 멋있어!', '그냥 그래요', '모르겠어요'],
        correct: 1,
        explanation: '「귀여워! 멋있어!」로 자연스럽게 칭찬할 수 있습니다。'
      },
      {
        question: '친구가 좋은 소식을 전했을 때:',
        options: ['그렇습니까?', '진짜? 굿굿!', '별로예요', '힘들겠네요'],
        correct: 1,
        explanation: '「진짜? 굿굿!」으로 기쁨을 표현하는 것이 좋습니다。'
      }
    ]
  }
];