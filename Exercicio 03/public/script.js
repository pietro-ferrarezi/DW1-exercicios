/**
     * Configuracao dos esportes
     * Estrutura preparada para facil expansao
     */
    const SPORTS_CONFIG = {
      'volei': {
        name: 'Voleibol',
        pointsPerSet: 25,
        maxSets: 5,
        rules: 'Sets ate 25 pontos | Melhor de 5 sets'
      },
      'beach-tennis': {
        name: 'Beach Tennis',
        pointsPerSet: 6,
        maxSets: 3,
        rules: 'Games ate 6 pontos | Melhor de 3 sets'
      },
      'tenis-mesa': {
        name: 'Tenis de Mesa',
        pointsPerSet: 11,
        maxSets: 5,
        rules: 'Sets ate 11 pontos | Melhor de 5 sets'
      },
      'generico': {
        name: 'Generico',
        pointsPerSet: null, // Sem limite
        maxSets: null, // Sem limite
        rules: 'Sem limite de pontos ou sets'
      }
    };

    /**
     * Estado do jogo
     */
    let gameState = {
      sport: 'volei',
      team1: {
        name: 'Equipe A',
        score: 0,
        sets: 0
      },
      team2: {
        name: 'Equipe B',
        score: 0,
        sets: 0
      }
    };

    /**
     * Elementos do DOM
     */
    const elements = {
      sportSelect: document.getElementById('sport-select'),
      sportTitle: document.getElementById('sport-title'),
      sportRules: document.getElementById('sport-rules'),
      team1Name: document.getElementById('team1-name'),
      team1Score: document.getElementById('team1-score'),
      team1Sets: document.getElementById('team1-sets'),
      team2Name: document.getElementById('team2-name'),
      team2Score: document.getElementById('team2-score'),
      team2Sets: document.getElementById('team2-sets')
    };

    /**
     * Inicializacao
     */
    function init() {
      loadFromStorage();
      setupEventListeners();
      updateUI();
    }

    /**
     * Configura os event listeners
     */
    function setupEventListeners() {
      // Mudanca de esporte
      elements.sportSelect.addEventListener('change', function(e) {
        gameState.sport = e.target.value;
        updateSportInfo();
        saveToStorage();
      });

      // Edicao dos nomes das equipes
      elements.team1Name.addEventListener('input', function(e) {
        gameState.team1.name = e.target.value || 'Equipe A';
        saveToStorage();
      });

      elements.team2Name.addEventListener('input', function(e) {
        gameState.team2.name = e.target.value || 'Equipe B';
        saveToStorage();
      });

      // Selecionar texto ao focar no nome
      elements.team1Name.addEventListener('focus', function(e) {
        e.target.select();
      });

      elements.team2Name.addEventListener('focus', function(e) {
        e.target.select();
      });
    }

    /**
     * Atualiza a pontuacao de uma equipe
     * @param {number} team - Numero da equipe (1 ou 2)
     * @param {number} delta - Valor a adicionar (positivo ou negativo)
     */
    function updateScore(team, delta) {
      const teamKey = team === 1 ? 'team1' : 'team2';
      const newScore = gameState[teamKey].score + delta;
      
      // Nao permite pontuacao negativa
      if (newScore < 0) return;
      
      gameState[teamKey].score = newScore;
      
      // Atualiza o display com animacao
      const scoreElement = team === 1 ? elements.team1Score : elements.team2Score;
      animateElement(scoreElement);
      scoreElement.textContent = newScore;
      
      saveToStorage();
    }

    /**
     * Atualiza os sets de uma equipe
     * @param {number} team - Numero da equipe (1 ou 2)
     * @param {number} delta - Valor a adicionar (positivo ou negativo)
     */
    function updateSets(team, delta) {
      const teamKey = team === 1 ? 'team1' : 'team2';
      const newSets = gameState[teamKey].sets + delta;
      
      // Nao permite sets negativos
      if (newSets < 0) return;
      
      gameState[teamKey].sets = newSets;
      
      // Atualiza o display com animacao
      const setsElement = team === 1 ? elements.team1Sets : elements.team2Sets;
      animateElement(setsElement);
      setsElement.textContent = newSets;
      
      saveToStorage();
    }

    /**
     * Adiciona animacao a um elemento
     * @param {HTMLElement} element - Elemento a animar
     */
    function animateElement(element) {
      element.classList.add('animate');
      setTimeout(() => {
        element.classList.remove('animate');
      }, 150);
    }

    /**
     * Reseta apenas os pontos (mantendo sets)
     */
    function resetScore() {
      gameState.team1.score = 0;
      gameState.team2.score = 0;
      elements.team1Score.textContent = '0';
      elements.team2Score.textContent = '0';
      animateElement(elements.team1Score);
      animateElement(elements.team2Score);
      saveToStorage();
    }

    /**
     * Reseta apenas os sets (mantendo pontos)
     */
    function resetSets() {
      gameState.team1.sets = 0;
      gameState.team2.sets = 0;
      elements.team1Sets.textContent = '0';
      elements.team2Sets.textContent = '0';
      animateElement(elements.team1Sets);
      animateElement(elements.team2Sets);
      saveToStorage();
    }

    /**
     * Reseta todo o placar (pontos e sets)
     */
    function resetAll() {
      resetScore();
      resetSets();
    }

    /**
     * Atualiza as informacoes do esporte selecionado
     */
    function updateSportInfo() {
      const config = SPORTS_CONFIG[gameState.sport];
      elements.sportTitle.textContent = config.name;
      elements.sportRules.textContent = config.rules;
    }

    /**
     * Atualiza toda a interface com o estado atual
     */
    function updateUI() {
      // Esporte
      elements.sportSelect.value = gameState.sport;
      updateSportInfo();
      
      // Equipe 1
      elements.team1Name.value = gameState.team1.name;
      elements.team1Score.textContent = gameState.team1.score;
      elements.team1Sets.textContent = gameState.team1.sets;
      
      // Equipe 2
      elements.team2Name.value = gameState.team2.name;
      elements.team2Score.textContent = gameState.team2.score;
      elements.team2Sets.textContent = gameState.team2.sets;
    }

    /**
     * Salva o estado no localStorage
     */
    function saveToStorage() {
      try {
        localStorage.setItem('placar-esportivo', JSON.stringify(gameState));
      } catch (e) {
        console.warn('Nao foi possivel salvar no localStorage:', e);
      }
    }

    /**
     * Carrega o estado do localStorage
     */
    function loadFromStorage() {
      try {
        const saved = localStorage.getItem('placar-esportivo');
        if (saved) {
          const parsed = JSON.parse(saved);
          // Merge com estado padrao para garantir todas as propriedades
          gameState = {
            ...gameState,
            ...parsed,
            team1: { ...gameState.team1, ...parsed.team1 },
            team2: { ...gameState.team2, ...parsed.team2 }
          };
        }
      } catch (e) {
        console.warn('Nao foi possivel carregar do localStorage:', e);
      }
    }

    // Inicia o aplicativo quando o DOM estiver pronto
    document.addEventListener('DOMContentLoaded', init);