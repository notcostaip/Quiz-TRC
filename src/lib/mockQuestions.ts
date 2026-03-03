export const mockQuestionBanks: Record<string, any[]> = {
    fundamentos: [
        {
            _id: 'fund_1',
            content: 'O que significa a sigla CPU no contexto de hardware de computadores?',
            studyTopic: 'Processadores e Arquitetura',
            options: [
                { _id: 'fund_1_0', text: 'Unidade Central de Processamento', isCorrect: true },
                { _id: 'fund_1_1', text: 'Unidade Controladora de Potência', isCorrect: false },
                { _id: 'fund_1_2', text: 'Unidade Central de Páginas', isCorrect: false },
                { _id: 'fund_1_3', text: 'Unidade de Controle de Periféricos', isCorrect: false }
            ]
        },
        {
            _id: 'fund_2',
            content: 'Qual componente é responsável por armazenar os dados temporariamente enquanto o processador os executa?',
            studyTopic: 'Memória Primária',
            options: [
                { _id: 'fund_2_0', text: 'Memória RAM', isCorrect: true },
                { _id: 'fund_2_1', text: 'Disco Rígido (HD)', isCorrect: false },
                { _id: 'fund_2_2', text: 'SSD', isCorrect: false },
                { _id: 'fund_2_3', text: 'Placa de Vídeo', isCorrect: false }
            ]
        },
        {
            _id: 'fund_3',
            content: 'Qual das alternativas abaixo é considerada uma característica chave de dispositivos de armazenamento SSD sobre HDDs tradicionais?',
            studyTopic: 'Armazenamento',
            options: [
                { _id: 'fund_3_0', text: 'Ausência de partes mecânicas móveis', isCorrect: true },
                { _id: 'fund_3_1', text: 'Capacidade de armazenamento sempre infinita', isCorrect: false },
                { _id: 'fund_3_2', text: 'Lentidão em altas velocidades mecânicas', isCorrect: false },
                { _id: 'fund_3_3', text: 'Menor custo por gigabyte do mercado', isCorrect: false }
            ]
        },
        {
            _id: 'fund_4',
            content: 'O que é um Sistema Operacional?',
            studyTopic: 'Sistemas Operacionais',
            options: [
                { _id: 'fund_4_0', text: 'Software básico principal que gerencia o hardware e demais softwares do sistema', isCorrect: true },
                { _id: 'fund_4_1', text: 'Uma placa física responsável pela geração de gráficos e sons', isCorrect: false },
                { _id: 'fund_4_2', text: 'Um editor de textos de alta complexidade para programadores', isCorrect: false },
                { _id: 'fund_4_3', text: 'Apenas uma interface visual não exigida pelo computador', isCorrect: false }
            ]
        },
        {
            _id: 'fund_5',
            content: 'Qual a principal diferença entre Software Livre e Proprietário?',
            studyTopic: 'Software Livre vs Proprietário',
            options: [
                { _id: 'fund_5_0', text: 'O software livre garante a liberdade de estudo e modificação de seu código-fonte', isCorrect: true },
                { _id: 'fund_5_1', text: 'O software proprietário é sempre gratuito, e o software livre é sempre cobrado', isCorrect: false },
                { _id: 'fund_5_2', text: 'Apenas o software livre pode ser instalado no Windows', isCorrect: false },
                { _id: 'fund_5_3', text: 'Apenas o software livre não sofre ataque de vírus', isCorrect: false }
            ]
        },
        {
            _id: 'fund_6',
            content: 'Qual a principal função da Placa-mãe (Motherboard)?',
            studyTopic: 'Arquitetura de Computadores',
            options: [
                { _id: 'fund_6_0', text: 'Interligar e permitir a comunicação entre todos os componentes de hardware', isCorrect: true },
                { _id: 'fund_6_1', text: 'Armazenar os arquivos de fotos e vídeos a longo prazo', isCorrect: false },
                { _id: 'fund_6_2', text: 'Processar as informações de algoritmos puramente em texto', isCorrect: false },
                { _id: 'fund_6_3', text: 'Refrigerar os componentes através de capacitores térmicos', isCorrect: false }
            ]
        },
        {
            _id: 'fund_7',
            content: 'Qual dos seguintes é considerado um dispositivo de entrada (Input)?',
            studyTopic: 'Periféricos e I/O',
            options: [
                { _id: 'fund_7_0', text: 'Teclado', isCorrect: true },
                { _id: 'fund_7_1', text: 'Monitor', isCorrect: false },
                { _id: 'fund_7_2', text: 'Impressora', isCorrect: false },
                { _id: 'fund_7_3', text: 'Caixa de Som', isCorrect: false }
            ]
        },
        {
            _id: 'fund_8',
            content: 'Como chamamos a unidade fundamental de informação que os processadores conseguem operar intrinsecamente?',
            studyTopic: 'Sistemas Digitais',
            options: [
                { _id: 'fund_8_0', text: 'Bit (0s ou 1s)', isCorrect: true },
                { _id: 'fund_8_1', text: 'Gigabyte', isCorrect: false },
                { _id: 'fund_8_2', text: 'Frequência Hexadecimal', isCorrect: false },
                { _id: 'fund_8_3', text: 'Pacotes IPv4', isCorrect: false }
            ]
        },
        {
            _id: 'fund_9',
            content: 'Qual o papel fundamental do componente Fonte de Alimentação num computador de mesa?',
            studyTopic: 'Eletrônica e Hardware',
            options: [
                { _id: 'fund_9_0', text: 'Converter a corrente alternada da tomada em correntes contínuas para uso interno', isCorrect: true },
                { _id: 'fund_9_1', text: 'Regular a velocidade da internet em megabits por segundo', isCorrect: false },
                { _id: 'fund_9_2', text: 'Dar suporte aos softwares do Office Word', isCorrect: false },
                { _id: 'fund_9_3', text: 'Manter a carga do computador funcionando duas horas sem tomada', isCorrect: false }
            ]
        },
        {
            _id: 'fund_10',
            content: 'Qual o significado do termo "Volatilidade" quando referimos a memória RAM?',
            studyTopic: 'Memória Primária',
            options: [
                { _id: 'fund_10_0', text: 'Todo o seu conteúdo é apagado quando a energia do micro é desligada', isCorrect: true },
                { _id: 'fund_10_1', text: 'Os dados permanecem ali independentemente da reinicialização', isCorrect: false },
                { _id: 'fund_10_2', text: 'A RAM pode virar uma placa de vídeo', isCorrect: false },
                { _id: 'fund_10_3', text: 'Os arquivos gravados aumentam de tamanho com a perda de bateria', isCorrect: false }
            ]
        },
        {
            _id: 'fund_11',
            content: 'A sigla BIOS refere-se a:',
            studyTopic: 'Arquitetura de Computadores',
            options: [
                { _id: 'fund_11_0', text: 'Basic Input/Output System', isCorrect: true },
                { _id: 'fund_11_1', text: 'Backbone Internet Output Standard', isCorrect: false },
                { _id: 'fund_11_2', text: 'Binary Index Operating System', isCorrect: false },
                { _id: 'fund_11_3', text: 'Backup Integration Output Sequence', isCorrect: false }
            ]
        },
        {
            _id: 'fund_12',
            content: 'Ao aplicar uma pasta térmica num chip principal, entre quais dois componentes você estaria trabalhando?',
            studyTopic: 'Manutenção Preventiva',
            options: [
                { _id: 'fund_12_0', text: 'O topo do Processador e o dissipador de calor metálico (Cooler)', isCorrect: true },
                { _id: 'fund_12_1', text: 'Entre o disco de HD e a carcaça do computador', isCorrect: false },
                { _id: 'fund_12_2', text: 'Dentro da memória RAM, nos seus módulos laterais', isCorrect: false },
                { _id: 'fund_12_3', text: 'Entre o Switch de rede RJ45 e as saídas', isCorrect: false }
            ]
        },
        {
            _id: 'fund_13',
            content: 'Qual software dentre esses é puramente um Navegador de Internet (Browser)?',
            studyTopic: 'Softwares de Utilidade',
            options: [
                { _id: 'fund_13_0', text: 'Google Chrome', isCorrect: true },
                { _id: 'fund_13_1', text: 'Microsoft Word', isCorrect: false },
                { _id: 'fund_13_2', text: 'Adobe Premiere', isCorrect: false },
                { _id: 'fund_13_3', text: 'Linux Ubuntu', isCorrect: false }
            ]
        },
        {
            _id: 'fund_14',
            content: 'Do que é composto essencialmente o Hardware?',
            studyTopic: 'Conceitos Fundamentais',
            options: [
                { _id: 'fund_14_0', text: 'Equipamentos e toda parte física, durável ou tátil do sistema gerido', isCorrect: true },
                { _id: 'fund_14_1', text: 'Instruções lógicas de máquina, linhas de código invisíveis em tela', isCorrect: false },
                { _id: 'fund_14_2', text: 'O sistema operacional rodando na nuvem Amazon', isCorrect: false },
                { _id: 'fund_14_3', text: 'Rede elétrica das companhias que não tocam no PC', isCorrect: false }
            ]
        },
        {
            _id: 'fund_15',
            content: 'Sabendo-se que 1 Byte corresponde a 8 Bits, quantos Bytes existem em 2 Megabytes puros?',
            studyTopic: 'Sistemas Digitais',
            options: [
                { _id: 'fund_15_0', text: 'Aproximadamente dois milhões (2 x 1024 x 1024 bytes)', isCorrect: true },
                { _id: 'fund_15_1', text: '2000 Bytes absolutos', isCorrect: false },
                { _id: 'fund_15_2', text: 'Apenas 1024 Bytes', isCorrect: false },
                { _id: 'fund_15_3', text: 'Aproximadamente dois mil (2 x 1024)', isCorrect: false }
            ]
        },
    ],
    infraestrutura: [
        {
            _id: 'inf_1',
            content: 'Em uma rede configurada em topologia Estrela, qual componente normalmente desempenha o papel do "nó central"?',
            studyTopic: 'Topologias de Rede',
            options: [
                { _id: 'inf_1_0', text: 'Um Switch ou Hub', isCorrect: true },
                { _id: 'inf_1_1', text: 'Um cabo coaxial ponta a ponta', isCorrect: false },
                { _id: 'inf_1_2', text: 'O firewall de hardware', isCorrect: false },
                { _id: 'inf_1_3', text: 'Placa de Vídeo de Servidor', isCorrect: false }
            ]
        },
        {
            _id: 'inf_2',
            content: 'Qual a principal diferença entre um Switch L2 e um Hub simples na camada de acesso de rede?',
            studyTopic: 'Ativos de Rede',
            options: [
                { _id: 'inf_2_0', text: 'O Switch lê endereços MAC e gerencia o pacote isoladamente, o Hub transmite tudo simultaneamente por cópia', isCorrect: true },
                { _id: 'inf_2_1', text: 'O Hub possui antenas de Wi-Fi, o Switch só atua com fibra', isCorrect: false },
                { _id: 'inf_2_2', text: 'Um Hub é muito mais rápido e inteligente que o Switch atual', isCorrect: false },
                { _id: 'inf_2_3', text: 'Apenas o Hub pode conectar dispositivos em Star-Topology', isCorrect: false }
            ]
        },
        {
            _id: 'inf_3',
            content: 'O padrão TIA/EIA define uma limitação máxima de distância teórica ao realizar passagem de cabeamento metálico par-trançado horizontal. Qual é?',
            studyTopic: 'Cabeamento Estruturado',
            options: [
                { _id: 'inf_3_0', text: '100 metros', isCorrect: true },
                { _id: 'inf_3_1', text: '500 metros', isCorrect: false },
                { _id: 'inf_3_2', text: '50 metros', isCorrect: false },
                { _id: 'inf_3_3', text: '1000 metros (1 Km)', isCorrect: false }
            ]
        },
        {
            _id: 'inf_4',
            content: 'Em cabeamentos em categoria 5e e 6, qual padrão de conector plástico modular de clipe é amplamente adotado nas duas pontas?',
            studyTopic: 'Cabeamento Estruturado',
            options: [
                { _id: 'inf_4_0', text: 'RJ-45', isCorrect: true },
                { _id: 'inf_4_1', text: 'RJ-11', isCorrect: false },
                { _id: 'inf_4_2', text: 'BNC Coaxial do Tipo T', isCorrect: false },
                { _id: 'inf_4_3', text: 'SATA2 Data', isCorrect: false }
            ]
        },
        {
            _id: 'inf_5',
            content: 'Qual a finalidade principal de um "Patch Panel" em um rack de infraestrutura?',
            studyTopic: 'Datacenter',
            options: [
                { _id: 'inf_5_0', text: 'Dar organização maciça consolidando tomadas em painéis e permitir roteamento tático flexível com os Switches', isCorrect: true },
                { _id: 'inf_5_1', text: 'Transformar magicamente o pulso 220V do datacenter em informações da internet', isCorrect: false },
                { _id: 'inf_5_2', text: 'Fornecer ventilação (Patch) e resfriamento contínuo nas baias ativas', isCorrect: false },
                { _id: 'inf_5_3', text: 'Um Patch Panel nada mais é que um nome diferente para um Roteador IP Corporativo', isCorrect: false }
            ]
        },
        {
            _id: 'inf_6',
            content: 'Um Rack comumente suporta hardwares em um padrão de medida de altura para servidores conhecida como:',
            studyTopic: 'Datacenter',
            options: [
                { _id: 'inf_6_0', text: 'U (Units - ex: 1U, 2U, 4U)', isCorrect: true },
                { _id: 'inf_6_1', text: 'CM (Centímetros Estritos)', isCorrect: false },
                { _id: 'inf_6_2', text: 'G (Geração Vertical)', isCorrect: false },
                { _id: 'inf_6_3', text: 'Rack-Levels A, B e C', isCorrect: false }
            ]
        },
        {
            _id: 'inf_7',
            content: 'O que o padrão IEEE 802.11 estipula dentro do seu comitê global no campo das telecomunicações?',
            studyTopic: 'Redes Sem Fio (WLAN)',
            options: [
                { _id: 'inf_7_0', text: 'Padrão completo de comunicação Local via Radiofrequência, muito conhecidos como redes Wi-Fi', isCorrect: true },
                { _id: 'inf_7_1', text: 'Padrão fixo de conexões apenas via fibra óptica submarinas', isCorrect: false },
                { _id: 'inf_7_2', text: 'Sistemas padronizados de Bluetooth da Sony para TV', isCorrect: false },
                { _id: 'inf_7_3', text: 'O uso regulado e licenciado das fiações prediais 220 Volts', isCorrect: false }
            ]
        },
        {
            _id: 'inf_8',
            content: 'Pelo aspecto global das infraestruturas de rede moderna, qual tecnologia de cabo baseia-se na reflexão de pulsos de luz?',
            studyTopic: 'Meios Guiados',
            options: [
                { _id: 'inf_8_0', text: 'Cabeamento de Fibra Óptica (Mono e Multimodo)', isCorrect: true },
                { _id: 'inf_8_1', text: 'Cabeamento de Par-Trançado Metálico FTP Blindado', isCorrect: false },
                { _id: 'inf_8_2', text: 'Antenas Direcionais PtP (Point to Point)', isCorrect: false },
                { _id: 'inf_8_3', text: 'Pulsar Coaxial em Frequência Alternada', isCorrect: false }
            ]
        },
        {
            _id: 'inf_9',
            content: 'No contexto do fluxo e resiliência de um provedor/infraestrutura, o Nobreak ou "UPS" tem o papel de:',
            studyTopic: 'Disponibilidade (Energia)',
            options: [
                { _id: 'inf_9_0', text: 'Manter a carga das máquinas fornecendo energia condicionada ativa através de bancos de bateria se houver queda', isCorrect: true },
                { _id: 'inf_9_1', text: 'O Nobreak isoladamente protege a rede contra DDoS ou Invasão Hacker', isCorrect: false },
                { _id: 'inf_9_2', text: 'Atuar de ponte entre provedores de internet, somando as metragens do IP C', isCorrect: false },
                { _id: 'inf_9_3', text: 'É o sistema central de refrigeração evaporativa dos racks 42Us', isCorrect: false }
            ]
        },
        {
            _id: 'inf_10',
            content: 'Com relação aos padrões T568A e T568B, definidos em sistemas de comunicação estruturada, a que se determinam?',
            studyTopic: 'Cabeamento Estruturado',
            options: [
                { _id: 'inf_10_0', text: 'Padronização da sequência ou ordem de cores na crimpagem dos fios nos plugs metálicos dos conectores (RJ-45)', isCorrect: true },
                { _id: 'inf_10_1', text: 'Padrão dos lasers estipulados de envio de gigabits nas emendas de fibras ópticas de rede C', isCorrect: false },
                { _id: 'inf_10_2', text: 'Medidas de proteção para descargas atmosféricas nas caixas estaduais TIA', isCorrect: false },
                { _id: 'inf_10_3', text: 'As métricas de peso autorizadas que as bandejas dos Server Racks 19 polegadas podem segurar livremente', isCorrect: false }
            ]
        },
        {
            _id: 'inf_11',
            content: 'Um endereço MAC é composto de quantos blocos sequenciais hexadecimais (bytes) de base identificadora?',
            studyTopic: 'Endereçamento L2',
            options: [
                { _id: 'inf_11_0', text: '6 Blocos, totalizando 48 Bits', isCorrect: true },
                { _id: 'inf_11_1', text: '4 Blocos de numerais Padrão (Ex: 192.168.0.1)', isCorrect: false },
                { _id: 'inf_11_2', text: '8 Blocos (IPv6)', isCorrect: false },
                { _id: 'inf_11_3', text: 'É aleatório conforme escolhido pelo fabricante do Hub central em até 128 Bytes', isCorrect: false }
            ]
        },
        {
            _id: 'inf_12',
            content: 'No roteamento clássico das redes IP, qual dispositivo opera fundamentalmente na Camada 3 do modelo de referência, separando redes lógicas distintas e interligando fronteiras?',
            studyTopic: 'Ativos de Rede',
            options: [
                { _id: 'inf_12_0', text: 'Roteador (Router)', isCorrect: true },
                { _id: 'inf_12_1', text: 'Switch Não Gerenciável (L2)', isCorrect: false },
                { _id: 'inf_12_2', text: 'Ponto de Acesso Wireless Comum que simula repetidor Bridge', isCorrect: false },
                { _id: 'inf_12_3', text: 'Transceiver Conversor de Mídia', isCorrect: false }
            ]
        },
        {
            _id: 'inf_13',
            content: 'A principal vantagem ao optar pela Topologia "Mesh" (Malha completa) entre 4 datacenters internacionais é:',
            studyTopic: 'Topologias de Rede',
            options: [
                { _id: 'inf_13_0', text: 'Alta tolerância a falhas, pois há redundância cruzada e vários caminhos dinâmicos até o destino caso uma quebre', isCorrect: true },
                { _id: 'inf_13_1', text: 'Sempre requer muito menos cabo e investimentos do que a Topologia de Anel ou Barramento', isCorrect: false },
                { _id: 'inf_13_2', text: 'Todo o processamento é jogado para um servidor de inteligência único no centro', isCorrect: false },
                { _id: 'inf_13_3', text: 'Permitir uso em switches de 10 megabits Half-Duplex com alto tráfego', isCorrect: false }
            ]
        },
        {
            _id: 'inf_14',
            content: 'Uma ferramenta chave e física na análise em manutenções sobre pontas de cabos desconectadas se chama:',
            studyTopic: 'Testes e Troubleshooting',
            options: [
                { _id: 'inf_14_0', text: 'Testador de Cabos / Lan Tester de Continuidade', isCorrect: true },
                { _id: 'inf_14_1', text: 'Estação de Solda Rápida SMD', isCorrect: false },
                { _id: 'inf_14_2', text: 'Sonda USB de Firewall de Hardware', isCorrect: false },
                { _id: 'inf_14_3', text: 'Lâmpada de Infravermelhos', isCorrect: false }
            ]
        },
        {
            _id: 'inf_15',
            content: 'O padrão PoE (Power over Ethernet) em switches de redes corporativas ativas garante aos profissionais de infra que:',
            studyTopic: 'Ativos de Rede',
            options: [
                { _id: 'inf_15_0', text: 'Dá capacidade àquele switch injetar energia elétrica de baixo consumo pelo RJ-45, alimentando, por ex., câmeras e APs Wi-Fi sem precisar de tomadas exclusivas', isCorrect: true },
                { _id: 'inf_15_1', text: 'O Switch não consume nada da conta de luz predial, roubando energia pura via porta Ethernet dos Pcs conectados em si mesmo', isCorrect: false },
                { _id: 'inf_15_2', text: 'Permita uma transferência acima de 40 Gb/s sobre simples cabos não blindados cat5 originais de sucata', isCorrect: false },
                { _id: 'inf_15_3', text: 'Faz uso exato de baterias exclusivas anexadas nas tampas do roteador', isCorrect: false }
            ]
        },
    ],
    sistemas: [
        {
            _id: 'sist_1',
            content: 'Quantas camadas possui a estruturação acadêmica clássica do Modelo de Referência OSI (Open Systems Interconnection)?',
            studyTopic: 'Modelo OSI',
            options: [
                { _id: 'sist_1_0', text: '7 Camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação)', isCorrect: true },
                { _id: 'sist_1_1', text: '4 Camadas (Acesso, Internet, Host e Processos)', isCorrect: false },
                { _id: 'sist_1_2', text: '5 Camadas, somando a Física diretamente no núcleo IP', isCorrect: false },
                { _id: 'sist_1_3', text: '12 Camadas de Abstração ANSI', isCorrect: false }
            ]
        },
        {
            _id: 'sist_2',
            content: 'Qual a principal serventia natural de um servidor ou protocolo de resposta "DHCP" em uma rede IP empresarial?',
            studyTopic: 'Serviços de Rede',
            options: [
                { _id: 'sist_2_0', text: 'Distribuir endereços lógicos IP de forma dinâmica e automatizada as máquinas e hosts clientes, evitando a sua inserção manual pesada', isCorrect: true },
                { _id: 'sist_2_1', text: 'Garantir que os vírus não entrem e nem contaminem a memória do servidor ou Firewall central que bloqueia portas', isCorrect: false },
                { _id: 'sist_2_2', text: 'Trocar IPs legíveis como "google.com" e traduzir com o roteador dinâmico de MAC Adresses na Tabela ARP', isCorrect: false },
                { _id: 'sist_2_3', text: 'Armazenar os nomes de domínios abertos dos diretórios globais .com ou .br', isCorrect: false }
            ]
        },
        {
            _id: 'sist_3',
            content: 'Segundo a IANA, qual é a porta de transporte padrão adotada globalmente pelos softwares navegadores Web ao acessar sites de forma criptografada em um tunelamento TSL e encriptação digital?',
            studyTopic: 'Protocolos de Camada de Aplicação',
            options: [
                { _id: 'sist_3_0', text: 'Porta 443 (Protocolo HTTPS Seguros)', isCorrect: true },
                { _id: 'sist_3_1', text: 'Porta 80 (Protocolo HTTP Bruto)', isCorrect: false },
                { _id: 'sist_3_2', text: 'Porta 21 (Protocolo FTP e SFTP)', isCorrect: false },
                { _id: 'sist_3_3', text: 'Porta 53 (Serviço de DNS Criptografados)', isCorrect: false }
            ]
        },
        {
            _id: 'sist_4',
            content: 'Como nós caracterizamos majoritariamente no mercado corporativo Microsoft a função e aplicação tecnológica de um servidor atuando um papel de "Active Directory" ou AD?',
            studyTopic: 'Sistemas Operacionais Corporativos',
            options: [
                { _id: 'sist_4_0', text: 'Um serviço escalável robusto da Microsoft que implementa gerenciamento super centralizado de contas de usuário e identidades de permissões de máquinas e políticas do domínio', isCorrect: true },
                { _id: 'sist_4_1', text: 'O anti-spam default bloqueador que impede ataques remotos no Firewall de Perímetro via VPN na borda Azure', isCorrect: false },
                { _id: 'sist_4_2', text: 'Apenas uma versão alternativa de File Server via pastas ocultadas .smb e FTP de discos paralelos SCSI', isCorrect: false },
                { _id: 'sist_4_3', text: 'O provedor de conexões diretas entre o Cloud Server Amazon Linux e as credenciais SQL Server Express isoladas', isCorrect: false }
            ]
        },
        {
            _id: 'sist_5',
            content: 'No contexto do protocolo Transmission Control Protocol (TCP), o que vem a significar o famoso processo base de "Three-Way Handshake" no início logístico da conexão antes e envio bruto?',
            studyTopic: 'TCP/IP (Camada Transporte)',
            options: [
                { _id: 'sist_5_0', text: 'Três processos de negociação inicial entre servidor e host (SYN ➔ SYN-ACK ➔ ACK) para estabelecer credibilidade e confiabilidade com sincronia confirmada', isCorrect: true },
                { _id: 'sist_5_1', text: 'A recusa de conexão que força pular para o protocolo rápido padrão, UDP multicast em jogos ou streaming', isCorrect: false },
                { _id: 'sist_5_2', text: 'O uso de três pacotes DHCP contínuos (Request, Oferta, Finalização) visando evitar alocação repetida do IP da porta lógica de saída', isCorrect: false },
                { _id: 'sist_5_3', text: 'As requisições padrão Web (GET, POST e DELETE) do ambiente HTTP', isCorrect: false }
            ]
        },
        {
            _id: 'sist_6',
            content: 'Um ping efetuado a um IP da internet (Ex: ping 8.8.8.8) envia e solicia requisições curtas conhecidas como ECHO-REQUESTS/REPLYS que operam ativamente de trás dos panos via qual Protocolo Lógico Clássico de Diagnóstico IP?',
            studyTopic: 'Testes e Troubleshooting Lógico',
            options: [
                { _id: 'sist_6_0', text: 'ICMP (Internet Control Message Protocol)', isCorrect: true },
                { _id: 'sist_6_1', text: 'TCP (Transmission Protocol Acknowledgment)', isCorrect: false },
                { _id: 'sist_6_2', text: 'SNMP (Simple Network Management Protocol)', isCorrect: false },
                { _id: 'sist_6_3', text: 'UDP (User Datagram Protocol)', isCorrect: false }
            ]
        },
        {
            _id: 'sist_7',
            content: 'A qual serviço nós normalmente delegamos a tarefa primária de transcrever os nomes legíveis para humanos e marcas online clássicas (Exemplo: www.google.com) para o equivalente roteável endereçamento numérico lógico final IP para a nossa máquina se encaminhar?',
            studyTopic: 'Serviços Internet Básicos',
            options: [
                { _id: 'sist_7_0', text: 'DNS (Domain Name System Server)', isCorrect: true },
                { _id: 'sist_7_1', text: 'Gateway de Borda Padrão', isCorrect: false },
                { _id: 'sist_7_2', text: 'Provedor de E-Mail (SMTP)', isCorrect: false },
                { _id: 'sist_7_3', text: 'FTP (File Transfer Protocol Server)', isCorrect: false }
            ]
        },
        {
            _id: 'sist_8',
            content: 'Uma técnica comumente enpregada globalmente nos modens residenciais e de empresas para converter ativamente Múltiplos Ips Internos/Privados mascarados usando uma simples Unica Faixa Livre/IP Publico (Valid IP) para se conectar aos sites fora da sua roteagem principal é conhecida como técnica de tradução lógica de:',
            studyTopic: 'Roteamentos e Máscaras',
            options: [
                { _id: 'sist_8_0', text: 'NAT (Network Address Translation)', isCorrect: true },
                { _id: 'sist_8_1', text: 'ARP (Address Resolution Protocol)', isCorrect: false },
                { _id: 'sist_8_2', text: 'Sub-redes OSPF Internas', isCorrect: false },
                { _id: 'sist_8_3', text: 'BGP (Border Gateway Exterior Routes)', isCorrect: false }
            ]
        },
        {
            _id: 'sist_9',
            content: 'No ecossistema global, o protocolo original padrão concebido unicamente para transmitir envios (Remetente / Saída Frontal) logísticos nativos na confecção e disparo das mensagens cruas para caixas lógicas de e-mail remoto online, nos datacenters atuando na Porta clássica padrão de escuta 25/587:',
            studyTopic: 'Protocolos de Camada de Aplicação',
            options: [
                { _id: 'sist_9_0', text: 'Protocolo de Transferência SMTP (Simple Mail Transfer Protocol)', isCorrect: true },
                { _id: 'sist_9_1', text: 'Protocolo IMAP com base segura na Porta Oculta 993', isCorrect: false },
                { _id: 'sist_9_2', text: 'Protocolo POP3 (Post Office v3 Remanejado Local)', isCorrect: false },
                { _id: 'sist_9_3', text: 'SNMP e Logs Diretos Padrão HTTPS de Mail', isCorrect: false }
            ]
        },
        {
            _id: 'sist_10',
            content: 'Ao utilizar um protocolo de Conectividade Remota CLI/Terminal SSH (Secure Shell) em um Servidor Remoto Linux em Nuvem AWS sem customizar nenhuma das seguranças, ele obrigatoriamente abrirá comunicações primárias seguras de Login encriptadas usando preferencial e mandatoriamente a Porta Clássica...',
            studyTopic: 'Administração de Sistemas Linux',
            options: [
                { _id: 'sist_10_0', text: 'Porta 22 / TCP', isCorrect: true },
                { _id: 'sist_10_1', text: 'Porta 21 / TCP/IP (Protocolo FTP Compartilhado)', isCorrect: false },
                { _id: 'sist_10_2', text: 'Porta 23 / (Herança via o Inseguro Telnet Antigo das Redes)', isCorrect: false },
                { _id: 'sist_10_3', text: 'Porta Dinâmica 3389 Aleatória RDP', isCorrect: false }
            ]
        },
        {
            _id: 'sist_11',
            content: 'Qual Comando universal terminal Linux podemos digitar imediatamente no prompt shell clássico visando exibir ao administrador todas as listagens com interfaces, IPs, Mac e máscaras de rede logicas atuais no OS local clássico? (Sem pacotes IPRoute adicionais novos)',
            studyTopic: 'Administração de Sistemas Linux',
            options: [
                { _id: 'sist_11_0', text: 'ifconfig (Interface Configuration)', isCorrect: true },
                { _id: 'sist_11_1', text: 'ipconfig /all (Padrão nativo herdado global da Microsoft)', isCorrect: false },
                { _id: 'sist_11_2', text: 'netstat -r', isCorrect: false },
                { _id: 'sist_11_3', text: 'nslookup interface', isCorrect: false }
            ]
        },
        {
            _id: 'sist_12',
            content: 'Sistemas Operacionais Windows trazem consigo no coração executável o complexo registro global nativo para manter os drivers, politicas de pastas GPOs lógicas, e instalação cruas salvadas em árvore chamado de Editor Registry do HD. No menu Run (Executar), chamamos ele usando o executável rápido base:',
            studyTopic: 'Sistemas Operacionais Corporativos',
            options: [
                { _id: 'sist_12_0', text: 'regedit.exe (Registry Editor Core)', isCorrect: true },
                { _id: 'sist_12_1', text: 'taskmgr.msc (Task Manager System Console Global)', isCorrect: false },
                { _id: 'sist_12_2', text: 'msconfig.ini (Configurações Micro System Boot Inicial)', isCorrect: false },
                { _id: 'sist_12_3', text: 'cmd.app (Centro Avançado Main Default)', isCorrect: false }
            ]
        },
        {
            _id: 'sist_13',
            content: 'Para que o núcleo clássico e nativo do roteamento corporativo do modelo antigo IP classe / Rede padrão IPv4 nunca caísse nos limites matemáticos absolutos extintos mundiais do IPv4, ele precisou avançar agressivamente de sua base limitada de formato local e comprimento 32-Bits do campo de dados rumo ao poderoso novo formato global IPv6. O formato de endereçamento lógico substituto IPv6 dispõe ativamente nativo e com sobra teórica de capacidade colossal fixado sempre nos:',
            studyTopic: 'Redes Avançadas e Roteamento IPv6',
            options: [
                { _id: 'sist_13_0', text: '128 Bits Endereçaveis puros em blocos hexadecimais longos segmentados via dois-pontos', isCorrect: true },
                { _id: 'sist_13_1', text: '256 Bits Endereçaveis puros limitando 4 camadas em blocos normais pontos sequenciais', isCorrect: false },
                { _id: 'sist_13_2', text: '320 Bits Híbridos alfanuméricos globais limitados ao padrão MAC', isCorrect: false },
                { _id: 'sist_13_3', text: 'Apenas 64 Bits Binários com as portas NAT acopladas fixadas nas chaves e campos', isCorrect: false }
            ]
        },
        {
            _id: 'sist_14',
            content: 'A principal atuação restritiva perimetral das bordas de corporações modernas de hardware ou OS em sistemas contra invasões não tratadas, pacotes UDP inundadores fora da tabela e a fiscalização base ativa contendo Listas ACL base (Políticas Bloqueadoras L3/L4 ou Deep Packet) é puramente e tecnicamente uma barreira de infraestrutura gerida por um ativo referenciado sempre como:',
            studyTopic: 'Segurança em Sistemas de Redes Lógicas',
            options: [
                { _id: 'sist_14_0', text: 'Firewall', isCorrect: true },
                { _id: 'sist_14_1', text: 'Antivírus Endpoint / AntiMalware PC Default Windows C', isCorrect: false },
                { _id: 'sist_14_2', text: 'Virtual Private Tunnel Switch VPN Local Interno', isCorrect: false },
                { _id: 'sist_14_3', text: 'Intrusion Roteador Analítico OSPF L1', isCorrect: false }
            ]
        },
        {
            _id: 'sist_15',
            content: 'O TCP e o UDP agem em esferas parecidas de Transporte, mas diferem abrubtamente. Por que os engenheiros e desenvolvedores utilizam proposital e unicamente campos velozes UDP, para envio em dados brutos como Transmissão de VoIP das Redes, Streaming Globais de Games ou Visor Live de Câmeras na cloud invés do velho confiável formato TCP clássico?',
            studyTopic: 'TCP/IP (Camada Transporte Avançada)',
            options: [
                { _id: 'sist_15_0', text: 'Porque o UDP preza essencialmente focar a Velocidade extrema de envio e de latência do Streaming, abrindo mão totalmente dos controles rigorosos das conexões de erros, da entrega ACK ou ordenação retransmitida caso uma imagem não carregue', isCorrect: true },
                { _id: 'sist_15_1', text: 'Porque o UDP possui um processo complexo de criptografia tripla blindada imensamente poderoso garantindo sigilos de 443 do HTTP a essas conexões corporativas perigosas online, ao ponto do jogo de fps requerer muita banda em megas', isCorrect: false },
                { _id: 'sist_15_2', text: 'Porque as operadoras online estipularam limites pesados nas fibras contra as velhas transmissões pesadas do TCP, que agora sofrem degradação caso use no Twitch online mundial', isCorrect: false },
                { _id: 'sist_15_3', text: 'O UDP faz todo os pacotes chegarem juntos exatamente na mesma proporção e ordem que as caixas originais exigem, limitando as retransmissões perigosas ou perdas cegas com latência', isCorrect: false }
            ]
        }
    ]
};

mockQuestionBanks.protocolos = [...mockQuestionBanks.sistemas].map(q => ({
    ...q,
    _id: q._id.replace('sist_', 'prot_')
}));
