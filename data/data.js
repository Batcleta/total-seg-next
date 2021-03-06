const websiteData = {
  menuItens: [
    { title: "Inicio", link: "inicio" },
    { title: "Principais Vantagens", link: "vantagens" },
    { title: "Smart App", link: "app" },
    { title: "Nossos Clientes", link: "clientes" },
    { title: "Total Alarme", link: "nossoAlarme" },
    { title: "Contato", link: "contato" },
  ],
  menuWeb: [
    { title: "Inicio", link: "inicio" },
    { title: "Vantagens", link: "vantagens" },
    { title: "Smart App", link: "app" },
    { title: "Clientes", link: "clientes" },
    { title: "Total Alarme", link: "nossoAlarme" },
    { title: "Contato", link: "contato" },
  ],
  advantagesCarroussel: [
    {
      image: "/adv-company-image.jpg",
      alt: "Proteção para sua empresa",
      subtitle: "Para Sua empresa",
      description:
        "Nosso sistema de alarme empresarial foi desenhado para preencher os pontos fracos de seu comércio ou escritório, além de contar com monitoramento 24 horas, cisparo perimetral ou botão de pânico discreto e aviso imediato a polícia.",
    },

    {
      image: "/adv-family-image.jpg",
      alt: "Proteção para a família",
      subtitle: "Para Sua Família",
      description:
        "Com nosso sistema de alarme residencial monitorado, sua familia e sua residencia estão sempre protegidos e você ainda consegue monitorar e falar com as pessoas no ambiente, em tempo real através de nosso aplicativo.",
    },

    {
      image: "/adv-old-image.jpg",
      alt: "Emergências de saúde",
      subtitle: "Em qualquer emergência",
      description:
        "Em caso de pessoas idosas em casa, nossa central de monitoramento 24h está pronta para atendimento de disparos emergenciais de saúde ou acidente acionados pelo controle de pânico, avisando um contato cadastrado e acionando as autoridades cabiveis ( samu, bombeiros, policia, etc. )",
    },
    {
      image: "/adv-pet-image.jpg",
      alt: "Proteção para seu pet",
      subtitle: "Para seu pet",
      description:
        "O Alarme monitorado total segurança foi desenvolvido pensando também no seu Pet. Com a nossa tecnologia pet imunity, seu pet ( com até 20kg ) pode andar seguro pelo ambiente sem acionar os sensores, evitando disparos acidentais.",
    },
  ],
  advantagesCards: [
    {
      icon: `/card-icon-24h-monitoring.svg`,
      alt: "icone - monitoramento 24h",
      title: "Monitorado 24h",
      description:
        "Com a nossa central de alarme monitorada, você conta com mais de 400 colaboradores treinados para tratar e auxiliar em eventuais emergências",
    },
    {
      icon: "/card-icon-police-call.svg",
      alt: "icone - aviso a polcia",
      title: "Aviso a Policia",
      description:
        "Assim que o sua central de alarme nos envia o sinal de disparo, nossa equipe faz a checagem de segurança e aciona a imediatamente a polícia",
    },
    {
      icon: "/card-icon-sos.svg",
      alt: "icone - botão de pânico",
      title: "Botão de pânico",
      description:
        "Você aciona o botão de pânico, nós enviamos ajuda rapidamente: polícia, bombeiros e ambulância de acordo com a necessidade.",
    },
    {
      icon: "/card-icon-fast-instalation.svg",
      alt: "icone - instalação imadiata",
      title: "Instalação imediata",
      description:
        "Um especialistas irá até o local e fará uma análise detalhada de pontos vulneráveis e seu alarme é instalado em menos de 24 horas",
    },
  ],
  testimonials: [
    {
      image: "/avatar-adriana.svg",
      alt: "Adriana B photo",
      client: "Adriana B.",
      whois: "ALARME RESIDENCIAL",
      testimonial:
        "Moro em uma rua pouco movimentada e tenho medo de ser abordada a noite quando chego em casa. A total segurança me proporcionou uma ótima solução com o controle remoto do meu alarme, assim consigo acionar ele do carro em caso de problemas..",
    },
    {
      image: "/avatar-reginaldo.svg",
      alt: "Reginaldo S photo",
      client: "Reginaldo S",
      whois: "ALARME RESIDENCIAL",
      testimonial:
        "Minha casa foi assaltada duas vezes no mesmo ano e precisei ir atrás de uma empresa de alarmes. Através de uma amiga que me indicou a Total Segurança, tive meu problema resolvido. O serviço de monitoramento atendeu minha necessidade",
    },
    {
      image: "/avatar-silas.svg",
      alt: "Silas K photo",
      client: "Simas T",
      whois: "ALARME EMPRESARIAL",
      testimonial:
        "Tive muito problema com furto em meu escritório, eu tinha um alarme mas a burocracia era muito grande para acionar a polícia e as fotos que ele tirava do meliante eram ruins e não dava para identificar quem era. Mudei para a Total Segurança e agora estou satisfeito.",
    },
    {
      image: "/avatar-simone.svg",
      alt: "Simone L photo",
      client: "Simone L",
      whois: "ALARME RESIDENCIAL",
      testimonial:
        "Eu moro em são paulo mas tenho uma casa em mongaguá que sempre fica parada e já tive problemas com invasão, contatei a Total Segurança e fui super bem atendida. Alarme muito bom e o pessoal do monitoramento são super atenciosos.",
    },
    {
      image: "/avatar-pablo.svg",
      alt: "Paulo M photo",
      client: "Paulo M",
      whois: "ALARME EMPRESARIAL",
      testimonial:
        "Trabalho com minimercados há mais de 5 anos e possuo o alarme da total segurança em todos os meus estabelecimentos. Equipe muito bem preparada para lidar com as situações de disparo e fazem manutenção preventiva com frequência.",
    },
  ],
  equipment: [
    {
      image: "/mobile-camera-image.png",
      alt: "total segurança camera full hd",
      title: "Smart Câmera Full HD com audio bilateral",
      description:
        "Seu sistema de alarme é integrado com câmeras sem fio de alta definição e inteligência artificial para detecção de pessoas e ruídos, além de um sistema de áudio bidirecional que lhe permite ouvir e falar com quem está no ambiente",
    },
    {
      image: "/mobile-sensor-p-image.png",
      alt: "Sensor infravermelho total segurança",
      title: "Sensor Infravermelho com tecnologia Pet Imunity",
      description:
        "Nosso sensor infravermelho possui uma avançada tecnologia para detecção e análise de movimentos e violação que detecta tentativas de retirada de sua posição, mesmo com a central desarmada. Possui também a tecnologia Pet Imnunity que o permite distinguir seu pet de ameaças reais",
    },
    {
      image: "/mobile-sensor-a-image.png",
      alt: "sensor de abertura total segurança",
      title: "Sensor de portas e janelas com sistema anti-impacto",
      description:
        "Os sensores magnéticos de abertura de portas e janelas de nosso sistema de alarme identifica a presença do invasor antes mesmo dele entrar em sua casa através de sua tecnologia anto-impacto inteligente",
    },
    {
      image: "/mobile-sirene-image.png",
      alt: "Sirene de alta potência total segurança",
      title: "Sirene sem Fio de alta potência",
      description:
        "Através de aviso sonoro de alta potência, notifica mudanças de status, invasões ou indicações de emergência. A comunicação entre a sirene e a central é remota e alcança até 600 metros de distância, o que proporciona uma instalação simples e prática.",
    },
    {
      image: "/mobile-central-image.png",
      alt: "Central de alarme total segurança",
      title: "Smart central sem fio",
      description:
        "Elegante e discreta, nossa smart central é o coração do seu alarme. Possui capacidade de arme e desarme em pontos individuais, maior alcance de cobertura e está 100% integrada ao nossos sistema de monitoramento 24h",
    },
    {
      image: "/mobile-control-image.png",
      alt: "Controle de alarme, remoto total segurança",
      title: "Controle Portátil para arme, desarme e pânico",
      description:
        "Com ele você tem o controle de arme e desarme de seu alarme com praticidade. Também conta com um botão S.O.S para casos de emergência. ",
    },
  ],
};

export default websiteData;
