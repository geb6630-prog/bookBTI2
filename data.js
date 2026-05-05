const questions = [
  {
    id: 1,
    text: "책을 고를 때 가장 끌리는 건?",
    options: [
      { type: "A", text: "“이거 흑막 있는 거 아님?” 세상의 팩트와 진실을 파헤치는 내용" },
      { type: "B", text: "“숫자는 거짓말 안 함” 데이터, 과학, 논리 풀장착 책" },
      { type: "C", text: "“범인은 이 안에 있어!” 떡밥과 반전이 난무하는 숨막히는 추리" },
      { type: "D", text: "“세계관 폼 미쳤다...” 과몰입 유발하는 미친 스토리" },
      { type: "E", text: "“내 인생 떡상 가즈아!” 당장 내일 써먹을 수 있는 꿀팁" },
      { type: "F", text: "“나만 우는 거 아니지? ㅠㅠ” 뼈 때리거나 눈물 쏙 빼는 공감 100% 책" }
    ]
  },
  {
    id: 2,
    text: "책을 읽다가 더 궁금해지는 건?",
    options: [
      { type: "A", text: "“잠깐만, 이 작가 논리 묘하게 킹받네... 진짜 맞아?” 당연하게 여겨지는 것에 태클 거는 내용" },
      { type: "B", text: "“그래서 그 주장을 뒷받침하는 통계 자료가 어딨죠? (안경 쓱)” 확실한 팩트와 근거가 있는 내용" },
      { type: "C", text: "“아 미친 그래서 범인이 누군데?” 미스터리와 추리가 난무하는 스토리" },
      { type: "D", text: "“그래서 다음 장 어떻게 되는데?! 빨리 진행시켜!” 세계관과 캐릭터에 푹 빠져드는 이야기" },
      { type: "E", text: "“오, 이거 내일 학교 가서 바로 써먹어야겠다 ㅋㅋㅋ” 내 현실에 바로 적용 가능한 실용적인 꿀팁" },
      { type: "F", text: "“이 문장 내 마음 훔쳐갔다... 플리 틀고 감성 좀 타야지 🎧” 내 감정을 몽글몽글하게 건드리는 문장" }
    ]
  },
  {
    id: 3,
    text: "친구에게 책 추천을 한다면?",
    options: [
      { type: "A", text: "너의 뇌를 리셋시켜줄 충격적인 반전 책" },
      { type: "B", text: "뇌섹남녀로 만들어줄 팩트폭행 지식 책" },
      { type: "C", text: "범인 누군지 궁금해서 밤새게 되는 추리 스릴러" },
      { type: "D", text: "밤새 읽다가 다크서클 무릎까지 내려오는 꿀잼 소설" },
      { type: "E", text: "갓생 살게 해주는 마라맛 동기부여 책" },
      { type: "F", text: "마음이 몽글몽글해지는 힐링 에세이" }
    ]
  },
  {
    id: 4,
    text: "읽다가 가장 싫은 순간은?",
    options: [
      { type: "A", text: "다들 “맞아 맞아” 하는데 나 혼자 “왜?” 싶을 때" },
      { type: "B", text: "근거는 1도 없고 뇌피셜로만 떠드는 내용 볼 때 (너 T야?)" },
      { type: "C", text: "떡밥 잔뜩 뿌려놓고 제대로 회수 안 하고 끝날 때 (극대노)" },
      { type: "D", text: "초반 빌드업 너무 길어서 하품 나올 때 🥱" },
      { type: "E", text: "뜬구름 잡는 소리만 하고 그래서 어쩌라는 건지 모를 때" },
      { type: "F", text: "등장인물이 AI처럼 감정이 없을 때 (공감 불가)" }
    ]
  },
  {
    id: 5,
    text: "가장 끌리는 주제는?",
    options: [
      { type: "A", text: "[우리가 믿었던 세상의 거짓말] (사회 문제, 구조)" },
      { type: "B", text: "[세상을 지배하는 1% 데이터 알고리즘] (과학, 통계)" },
      { type: "C", text: "[밀실 살인 사건의 전말] (범죄, 추리, 반전)" },
      { type: "D", text: "[이세계에서 눈을 떴더니 내가 최종 보스?!] (판타지)" },
      { type: "E", text: "[하루 10분, 1등급을 만드는 기적의 루틴] (자기계발)" },
      { type: "F", text: "[네가 힘든 건 네 잘못이 아니야] (인간관계, 위로)" }
    ]
  },
  {
    id: 6,
    text: "책을 다 읽고 나서 드는 생각은?",
    options: [
      { type: "A", text: "“와... 내 인생 2회차 시작됨. 세상이 다르게 보임.”" },
      { type: "B", text: "“아하, 이게 이런 원리였군. (지식 +1 획득)”" },
      { type: "C", text: "“미친... 내가 범인이라고 생각했던 애가 아니었어...”" },
      { type: "D", text: "“후유증 장난 아니다... 당분간 현실 복귀 불가 🥲”" },
      { type: "E", text: "“좋았어, 당장 내일부터 플래너에 이거 적용한다.”" },
      { type: "F", text: "“마음이 따땃해진다... 이거 필사해야지 ✍️”" }
    ]
  },
  {
    id: 7,
    text: "도서관에 가면?",
    options: [
      { type: "A", text: "평소 생각해보지 못했던 새로운 시야를 얻으려고" },
      { type: "B", text: "수행평가나 평소 궁금했던 지식 팩트체크 하려고" },
      { type: "C", text: "무조건 꿀잼 추리/스릴러 소설 코너로 직진" },
      { type: "D", text: "다음권 뒷이야기가 너무 궁금해서 못 끊겠음" },
      { type: "E", text: "에어컨(히터) 빵빵하고 공부 자극받기 딱 좋아서" },
      { type: "F", text: "조용하고 책 냄새나는 이 분위기가 그냥 너무 좋아서" }
    ]
  },
  {
    id: 8,
    text: "나와 가장 가까운 말은?",
    options: [
      { type: "A", text: "“흠... 너 의심돼 🤨 진짜 그럴까?”" },
      { type: "B", text: "“팩트체크 들어갑니다. 통계 자료 있음?”" },
      { type: "C", text: "“내 직감이 맞았어. 얘가 범인일 줄 알았다니까 ㅋㅋㅋ”" },
      { type: "D", text: "“헐 대박! 그래서 그래서? 폼 미쳤다”" },
      { type: "E", text: "“그래서 요점이 뭔데? 효율이 생명이지”" },
      { type: "F", text: "“완전 공감 ㅠㅠ 나 눈물 나려 그래”" }
    ]
  },
  {
    id: 9,
    text: "책 읽을 때 가장 중요한 건?",
    options: [
      { type: "A", text: "아무도 의심 안 하던 문제 콕 찝어주는 사이다 전개" },
      { type: "B", text: "논리의 완벽함과 수치의 정확성" },
      { type: "C", text: "작가와의 두뇌 싸움과 미친듯한 떡밥 회수" },
      { type: "D", text: "한편의 영화를 보는 듯한 미친 몰입감" },
      { type: "E", text: "내 삶에 1이라도 도움이 되는 꿀팁의 유무" },
      { type: "F", text: "내 마음을 대변해 주는 것 같은 인생 문장" }
    ]
  },
  {
    id: 10,
    text: "나의 독서 스타일은?",
    options: [
      { type: "A", text: "팩트와 구조를 집요하게 파고들며 읽기" },
      { type: "B", text: "원리를 완벽하게 납득하고 이해하며 읽기" },
      { type: "C", text: "곳곳에 숨겨진 단서를 찾으며 추리하며 읽기" },
      { type: "D", text: "세계관에 영혼까지 끌어당겨 과몰입하며 읽기" },
      { type: "E", text: "당장 내 삶에 어떻게 써먹을지 시뮬레이션하며 읽기" },
      { type: "F", text: "문장 하나하나 곱씹으며 깊게 느끼면서 읽기" }
    ]
  }
];

const resultsData = {
  A: {
    icon: "🧐",
    typeTitle: "반골 탐정형",
    catchphrase: "“흠... 이거 흑막 있는 거 아님?”",
    empathyText: "다들 '그렇구나~' 하고 넘어갈 때 너 혼자 '잠깐만, 왜 저래?' 하고 속으로 태클 거는 편이지?",
    intro: "세상이 굴러가는 규칙이나 남들이 다 믿는 말을 절대 그냥 안 믿어. 익숙한 걸 뒤집어 보고 팩트를 탈탈 털어서 숨겨진 진짜 의미를 찾아낼 때 엄청난 희열을 느끼는 찐 탐정 재질이야.",
    features: [
      "질문을 절대 멈추지 않음",
      "사회 문제, 인간 본질에 깊은 관심",
      "남들과 다른 예리한 시선으로 팩트폭행"
    ],
    starterBook: { title: "사피엔스 (청소년판) - 유발 하라리", link: "https://product.kyobobook.co.kr/detail/S000000597165" },
    starterReason: "세상을 완전 다른 눈으로 보게 해줄 사기급 입문서 ㅋㅋㅋ 한 번 펼치면 못 멈춤.",
    books: [
      { title: "왜 세계의 절반은 굶주리는가 - 장 지글러", link: "https://product.kyobobook.co.kr/detail/S000001896430" },
      { title: "지적 대화를 위한 넓고 얕은 지식 1 - 채사장", link: "https://product.kyobobook.co.kr/detail/S000001938774" },
      { title: "우리는 차별에 찬성합니다 - 오찬호", link: "https://product.kyobobook.co.kr/detail/S000000856709" },
      { title: "가짜 뉴스의 시대 - 케일린 오코너 등", link: "https://product.kyobobook.co.kr/detail/S000001979818" },
      { title: "이기적 유전자 - 리처드 도킨스", link: "https://product.kyobobook.co.kr/detail/S000000576524" },
      { title: "총, 균, 쇠 - 재레드 다이아몬드", link: "https://product.kyobobook.co.kr/detail/S000201932024" },
      { title: "정의란 무엇인가 - 마이클 샌델", link: "https://product.kyobobook.co.kr/detail/S000000625441" },
      { title: "동물농장 - 조지 오웰", link: "https://product.kyobobook.co.kr/detail/S000000620142" },
      { title: "선량한 차별주의자 - 김지혜", link: "https://product.kyobobook.co.kr/detail/S000000612820" }
    ],
    recommendReason: "익숙한 생각을 뒤집고, 잠든 뇌를 깨워줄 신박한 시각의 책들이 제격!"
  },
  B: {
    icon: "🤓",
    typeTitle: "팩트 분석 집착형",
    catchphrase: "“그래서 그걸 증명할 통계는요?”",
    empathyText: "'아 몰라 그냥 느낌이 그래~' 라는 말 제일 싫어하지? 너한텐 무조건 팩트가 생명임.",
    intro: "근거 없는 소리 들으면 답답해서 미치는 타입. 대충 얼버무리는 건 못 참고, 네 머리로 완벽하게 이해되고 납득돼야만 직성이 풀리는 찐 이과 마인드 소유자야.",
    features: [
      "데이터와 사실 중심 사고 (너 T야?)",
      "반박 불가한 논리력 탑재",
      "비과학적이고 틀린 정보 극혐함"
    ],
    starterBook: { title: "팩트풀니스 (청소년판) - 한스 로슬링", link: "https://product.kyobobook.co.kr/detail/S000000598162" },
    starterReason: "데이터로 세상 읽는 재미가 뭔지 제대로 알려주는 책. 읽고 나면 아는 척하기 딱 좋음!",
    books: [
      { title: "과학 콘서트 - 정재승", link: "https://product.kyobobook.co.kr/detail/S000001934490" },
      { title: "수학이 필요한 순간 - 김민형", link: "https://product.kyobobook.co.kr/detail/S000001887766" },
      { title: "통계의 미학 - 최제호", link: "https://product.kyobobook.co.kr/detail/S000001393568" },
      { title: "1일 1페이지 통계학 입문", link: "https://product.kyobobook.co.kr/detail/S000218821248" },
      { title: "코스모스 - 칼 세이건", link: "https://product.kyobobook.co.kr/detail/S000001290624" },
      { title: "떨림과 울림 - 김상욱", link: "https://product.kyobobook.co.kr/detail/S000000970998" },
      { title: "다윈의 식탁 - 장대익", link: "https://product.kyobobook.co.kr/detail/S000213769294" },
      { title: "틀리지 않는 법 - 조던 엘렌버그", link: "https://product.kyobobook.co.kr/detail/S000000581854" },
      { title: "침묵의 봄 - 레이첼 카슨", link: "https://product.kyobobook.co.kr/detail/S000213057707" }
    ],
    recommendReason: "모호한 감성보다는 확실한 팩트와 논리로 지적 호기심을 꽉 채워줄 책들을 추천해!"
  },
  C: {
    icon: "🔎",
    typeTitle: "추리 집착광공형",
    catchphrase: "“그래서 범인이 누군데? 떡밥 다 회수 안 하면 가만 안 둬”",
    empathyText: "책 읽을 때 작가랑 두뇌 싸움하는 거 완전 짜릿하지 않아? 범인 맞추면 그날 하루 텐션 폭발함 ㅋㅋㅋ",
    intro: "작가가 숨겨놓은 단서 하나 절대 놓치지 않고 끝까지 추적하는 집착광공. 예상하고, 뒤집히고, 다시 퍼즐을 맞추는 그 숨 막히는 긴장감을 즐기는 진정한 추리 덕후야.",
    features: [
      "단서 하나하나에 집착하는 매의 눈",
      "예상치 못한 반전이 나올 때 최고의 쾌감",
      "작가의 떡밥 회수 능력을 가장 중요하게 생각함"
    ],
    starterBook: { title: "용의자 X의 헌신 - 히가시노 게이고", link: "https://product.kyobobook.co.kr/detail/S000001461135" },
    starterReason: "추리소설 입문으로 이거만 한 게 없음! 마지막 반전에 입틀막 보장.",
    books: [
      { title: "나미야 잡화점의 기적 - 히가시노 게이고", link: "https://product.kyobobook.co.kr/detail/S000200550190" },
      { title: "셜록 홈즈 전집 1 - 아서 코난 도일", link: "https://product.kyobobook.co.kr/detail/S000001277423" },
      { title: "그리고 아무도 없었다 - 애거서 크리스티", link: "https://product.kyobobook.co.kr/detail/S000000920026" },
      { title: "오리엔트 특급 살인 - 애거서 크리스티", link: "https://product.kyobobook.co.kr/detail/S000000920027" },
      { title: "고백 - 미나토 가나에", link: "https://product.kyobobook.co.kr/detail/S000001491388" },
      { title: "살인자의 기억법 - 김영하", link: "https://product.kyobobook.co.kr/detail/S000001982913" },
      { title: "봉제인형 살인사건 - 다니엘 콜", link: "https://product.kyobobook.co.kr/detail/S000001629834" },
      { title: "모방범 - 미야베 미유키", link: "https://product.kyobobook.co.kr/detail/S000000778310" },
      { title: "백설공주에게 죽음을 - 넬레 노이하우스", link: "https://product.kyobobook.co.kr/detail/S000213314517" }
    ],
    recommendReason: "마지막 페이지까지 긴장의 끈을 놓을 수 없는 짜릿한 추리소설 속으로 빠져보는 건 어때?"
  },
  D: {
    icon: "🧙‍♀️",
    typeTitle: "설정 과몰입형",
    catchphrase: "“와 폼 미쳤다... 나 밤샌다 말리지 마”",
    empathyText: "책 한 번 펴면 주변에서 부르는 것도 못 듣고 완전 빨려 들어가지 않아?",
    intro: "스토리나 세계관에 한 번 꽂히면 현실 로그아웃하고 영혼까지 끌어다 몰입하는 타입. 남들은 그냥 글자 읽을 때, 너는 머릿속에서 혼자 블록버스터 영화 한 편 찍고 있음.",
    features: [
      "스토리에 대한 엄청난 몰입력 (수업 종 쳐도 모름)",
      "캐릭터에 찰떡같이 감정 이입",
      "상상력과 세계관 구축 능력 만렙"
    ],
    starterBook: { title: "아몬드 - 손원평", link: "https://product.kyobobook.co.kr/detail/S000202972044" },
    starterReason: "첫 장 넘기자마자 멱살 잡고 끌고 감. 흡입력 진짜 돌았음 ㅋㅋㅋ",
    books: [
      { title: "위저드 베이커리 - 구병모", link: "https://product.kyobobook.co.kr/detail/S000000610651" },
      { title: "시간을 파는 상점 - 김선영", link: "https://product.kyobobook.co.kr/detail/S000000775596" },
      { title: "해리 포터와 마법사의 돌 - J.K. 롤링", link: "https://product.kyobobook.co.kr/detail/S000214664902" },
      { title: "눈먼 자들의 도시 - 주제 사라마구", link: "https://product.kyobobook.co.kr/detail/S000001136422" },
      { title: "우리가 빛의 속도로 갈 수 없다면 - 김초엽", link: "https://product.kyobobook.co.kr/detail/S000001935245" },
      { title: "헝거 게임 - 수잰 콜린스", link: "https://product.kyobobook.co.kr/detail/S000000478289" },
      { title: "보건교사 안은영 - 정세랑", link: "https://product.kyobobook.co.kr/detail/S000000620706" },
      { title: "지구 끝의 온실 - 김초엽", link: "https://product.kyobobook.co.kr/detail/S000001953324" },
      { title: "페인트 - 이희영", link: "https://product.kyobobook.co.kr/detail/S000000611985" }
    ],
    recommendReason: "한 번 펼치면 시간 가는 줄 모르는, 압도적인 몰입감을 자랑하는 이야기의 세계로 초대할게!"
  },
  E: {
    icon: "💼",
    typeTitle: "실용주의 갓생러형",
    catchphrase: "“그래서 이거 갓생 살 때 어떻게 써먹음?”",
    empathyText: "솔직히 책 읽을 시간에 그냥 딴 거 하는 게 낫지 않나? 이왕 읽을 거면 확실히 도움 되는 걸로!",
    intro: "가성비와 효율을 미친 듯이 따지는 실전파. 독서도 그냥 취미가 아니라 내 인생 레벨업하려고 하는 거임. 당장 써먹을 수 있는 꿀팁 없으면 가차 없이 덮어버림.",
    features: [
      "실용 중심의 극효율 사고방식",
      "인생 목표 지향적 (갓생러)",
      "당장 적용 가능한 꿀팁 매우 선호"
    ],
    starterBook: { title: "공부의 본질 - 이윤규", link: "https://product.kyobobook.co.kr/detail/S000213641208" },
    starterReason: "내일 당장 써먹을 수 있는 꿀팁 폭격기. 읽자마자 갓생 시작 가능함.",
    books: [
      { title: "아웃라이어 - 말콤 글래드웰", link: "https://product.kyobobook.co.kr/detail/S000000598383" },
      { title: "그릿 - 안젤라 더크워스", link: "https://product.kyobobook.co.kr/detail/S000001813651" },
      { title: "습관의 힘 - 찰스 두히그", link: "https://product.kyobobook.co.kr/detail/S000000406365" },
      { title: "원씽 - 게리 켈러", link: "https://product.kyobobook.co.kr/detail/S000001619177" },
      { title: "아주 작은 습관의 힘 - 제임스 클리어", link: "https://product.kyobobook.co.kr/detail/S000001813652" },
      { title: "데일 카네기 인간관계론 - 데일 카네기", link: "https://product.kyobobook.co.kr/detail/S000001897788" },
      { title: "역행자 - 자청", link: "https://product.kyobobook.co.kr/detail/S000202340164" },
      { title: "하버드 새벽 4시 반 - 웨이슈잉", link: "https://product.kyobobook.co.kr/detail/S000217278965" },
      { title: "미라클 모닝 - 할 엘로드", link: "https://product.kyobobook.co.kr/detail/S000219333990" }
    ],
    recommendReason: "당장의 고민을 해결하고 내일부터 바로 실천할 수 있는 강력한 원동력이 되어줄 책들을 만나봐!"
  },
  F: {
    icon: "🥺",
    typeTitle: "감성 과다 몰입형",
    catchphrase: "“미쳤다... 이 문장 왜 이렇게 내 마음을 울리지 ㅠㅠ”",
    empathyText: "좋은 문장 하나 발견하면 그날 하루 종일 기분 좋고, 카톡 상메로 해두고 싶지 않아?",
    intro: "캐릭터 감정에 동기화돼서 같이 울고 웃는 파워 F형 감성러. 책을 다 덮고 나서도 몽글몽글하게 남아있는 그 따뜻한 여운을 진짜 진짜 소중하게 생각하는 타입이야.",
    features: [
      "타인의 마음에 닿는 뛰어난 공감 능력 (프로 과몰입러)",
      "눈물 장벽 낮음 (감정 중심 독서)",
      "인생 문장 하나 건지면 며칠 내내 행복함"
    ],
    starterBook: { title: "달러구트 꿈 백화점 - 이미예", link: "https://product.kyobobook.co.kr/detail/S000001835614" },
    starterReason: "자기 전에 읽기 딱 좋음. 다 읽고 나면 뭔가 엄청 위로받는 기분이 듦 ㅠㅠ",
    books: [
      { title: "죽고 싶지만 떡볶이는 먹고 싶어 - 백세희", link: "https://product.kyobobook.co.kr/detail/S000001975821" },
      { title: "어린 왕자 - 앙투안 드 생텍쥐페리", link: "https://product.kyobobook.co.kr/detail/S000218322969" },
      { title: "나의 라임 오렌지나무 - J.M. 바스콘셀로스", link: "https://product.kyobobook.co.kr/detail/S000000992662" },
      { title: "여행의 이유 - 김영하", link: "https://product.kyobobook.co.kr/detail/S000212972861" },
      { title: "모순 - 양귀자", link: "https://product.kyobobook.co.kr/detail/S000001632467" },
      { title: "언어의 온도 - 이기주", link: "https://product.kyobobook.co.kr/detail/S000001963487" },
      { title: "나는 나로 살기로 했다 - 김수현", link: "https://product.kyobobook.co.kr/detail/S000001986137" },
      { title: "미움받을 용기 - 기시미 이치로", link: "https://product.kyobobook.co.kr/detail/S000200555616" },
      { title: "참 소중한 너라서 - 김지훈", link: "https://product.kyobobook.co.kr/detail/S000001977025" }
    ],
    recommendReason: "지친 하루 끝에 따뜻한 위로를 건네고, 얼어붙은 마음을 사르르 녹여줄 이야기들을 펼쳐보는 건 어때?"
  }
};

