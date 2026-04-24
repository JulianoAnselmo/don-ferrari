var siteData = {
  promoDay: {
    domingo: [],
    segunda: [],
    terca: [{ text: "Terça: fechado" }],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: []
  },
  infoBar: [
    { label: "Especialidade", value: "Pizzas e esfihas artesanais" },
    { label: "Avaliação", value: "5/5 Facebook (10 votos)" },
    { label: "Entrega", value: "~50 min · Taquaritinga-SP" }
  ],
  features: [
    {
      title: "Massa madurada",
      text: "Fermentação longa para uma massa leve, digestível e com aquele sabor que só o tempo traz. Tradição italiana feita com calma.",
      tag: "Artesanal",
      icon: "🍕"
    },
    {
      title: "Forno a todo vapor",
      text: "Pizzas assadas em temperatura alta, borda crocante por fora e macia por dentro. O ponto certo em cada pedido.",
      tag: "Técnica",
      icon: "🔥"
    },
    {
      title: "Pizzas grandes e brotinhos",
      text: "Sabores tradicionais e especiais, tamanho grande para dividir ou brotinho para a fome certa. Tem para toda mesa.",
      tag: "Variedade",
      icon: "🍕"
    },
    {
      title: "Pizzas doces artesanais",
      text: "Chocolate que derrete, frutas frescas, combinações que fecham a noite com chave de ouro. A sobremesa mora na própria pizza.",
      tag: "Para fechar",
      icon: "🍫"
    },
    {
      title: "Esfihas salgadas e doces",
      text: "Massa leve, recheios generosos. Opções clássicas e especialidades da casa — perfeitas para entrada ou petisco.",
      tag: "Complementos",
      icon: "🥟"
    },
    {
      title: "Bebidas geladas",
      text: "Refrigerantes, sucos, água e cervejas para acompanhar. O combo completo pra sua noite.",
      tag: "Acompanhe",
      icon: "🥤"
    },
    {
      title: "Delivery pelo WhatsApp",
      text: "Peça pelo WhatsApp e receba em casa em cerca de 50 minutos. Taxa de R$ 8 e pedido mínimo R$ 20.",
      tag: "Prático",
      icon: "📞"
    },
    {
      title: "Retirada no balcão",
      text: "Prefere buscar? Peça e retire em ~30 minutos na Av. Paulo Roberto Scandar, 420. Sem taxa de entrega.",
      tag: "Economize",
      icon: "🏪"
    },
    {
      title: "Pagamento flexível",
      text: "Aceitamos Pix, cartão de crédito, débito e dinheiro. Rápido, prático, do jeito que você preferir.",
      tag: "Pagamento",
      icon: "💳"
    },
    {
      title: "Atendimento de casa",
      text: "Equipe que conhece cliente pelo nome. Atendimento próximo, sem frescura, como se fosse almoço de domingo na casa da nonna.",
      tag: "Familiar",
      icon: "🇮🇹"
    }
  ],
  gallery: [
    {
      title: "Pizza artesanal Don Ferrari",
      caption: "Borda dourada, recheio generoso, assada no ponto exato.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Mesa posta",
      caption: "Clima de família, conversa boa e pizza sempre quente.",
      image: "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Variedade no forno",
      caption: "Sabores clássicos e especiais, sempre com massa fresquinha.",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Queijo derretido",
      caption: "Close no detalhe: mussarela puxando, borda crocante.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Porções que acompanham",
      caption: "Entradas para abrir a noite com sabor.",
      image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Noite no centro",
      caption: "Taquaritinga tem cheiro de forno e mesa cheia.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  contact: [
    {
      label: "Endereço",
      value: "Av. Paulo Roberto Scandar, 420 - Centro, Taquaritinga - SP, 15900-001"
    },
    {
      label: "Telefone",
      value: "(16) 99410-9862 · (16) 99410-2643"
    },
    {
      label: "Horário",
      value: "Qui, Dom, Seg e Qua: 18h-23h · Sex e Sáb: 18h-23h30 · Terça: fechado"
    }
  ]
};

// Fallback para businessInfo (formato cardapio-admin)
var businessInfoData = {
  name: "Don Ferrari",
  city: "Taquaritinga - SP",
  slogan: "A melhor pizza da cidade",
  tagline: "Pizzaria italiana · Delivery e retirada",
  whatsapp: "(16) 99410-9862",
  whatsappNumber: "5516994109862",
  phone: "(16) 99410-9862",
  phoneAlt: "(16) 99410-2643",
  address: "Av. Paulo Roberto Scandar, 420",
  neighborhood: "Centro",
  cityState: "Taquaritinga - SP",
  cep: "15900-001",
  instagram: "https://www.instagram.com/donferraripizzaria",
  facebook: "",
  googleMapsLink: "https://www.google.com/maps?q=Av.+Paulo+Roberto+Scandar,+420+-+Centro,+Taquaritinga+-+SP,+15900-001",
  googleMapsEmbed: "https://www.google.com/maps?q=Av.%20Paulo%20Roberto%20Scandar,%20420%20-%20Centro,%20Taquaritinga%20-%20SP,%2015900-001&output=embed",
  deliveryFee: 8.00,
  minOrder: 20.00,
  deliveryTime: "~50 min",
  pickupTime: "~30 min",
  hours: {
    funcionamento: "Quarta a Segunda",
    jantar: "18h00 as 23h30",
    almoco: "",
    completo: "Dom 18h00-23h00 | Seg 18h00-23h00 | Ter fechado | Qua 18h00-23h00 | Qui 18h00-23h00 | Sex 18h00-23h30 | Sab 18h00-23h30",
    display: "<span class=\"hours-line\"><strong>Qui, Dom, Seg e Qua:</strong> 18h00 às 23h00</span><br><span class=\"hours-line\"><strong>Sex e Sáb:</strong> 18h00 às 23h30 · <strong>Terça:</strong> fechado</span>"
  }
};

// Fallback para promocoes (formato cardapio-admin)
var promocoesData = {
  domingo: [],
  segunda: [],
  terca:   [{ texto: "TERÇA: FECHADO", destaque: false }],
  quarta:  [],
  quinta:  [],
  sexta:   [],
  sabado:  []
};
