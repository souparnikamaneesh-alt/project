/**
 * Modern Minimalist Calculator
 * Complete Engine with Spring Animations, Ripple Effects, Sound Feedback & History
 */

class Calculator {
  constructor(previousOperandEl, currentOperandEl, displayContainer) {
    this.previousOperandEl = previousOperandEl;
    this.currentOperandEl = currentOperandEl;
    this.displayContainer = displayContainer;
    this.history = JSON.parse(localStorage.getItem('calc_history') || '[]');
    this.soundEnabled = localStorage.getItem('calc_sound') !== 'false';
    this.audioCtx = null;
    this.clear();
  }

  // ------------------------------------------------------------------------
  // Sound Synthesis (Web Audio API)
  // ------------------------------------------------------------------------
  initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playSound(type = 'num') {
    if (!this.soundEnabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const now = this.audioCtx.currentTime;

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      let freq = 520;
      let duration = 0.04;

      if (type === 'num') {
        freq = 460;
        osc.type = 'sine';
      } else if (type === 'op') {
        freq = 680;
        osc.type = 'triangle';
        duration = 0.06;
      } else if (type === 'equals') {
        freq = 840;
        osc.type = 'sine';
        duration = 0.08;
      } else if (type === 'action') {
        freq = 380;
        osc.type = 'triangle';
        duration = 0.05;
      } else if (type === 'error') {
        freq = 180;
        osc.type = 'sawtooth';
        duration = 0.15;
      }

      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Audio not permitted or supported; continue silently
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('calc_sound', this.soundEnabled);
    return this.soundEnabled;
  }

  // ------------------------------------------------------------------------
  // Core Calculator Operations
  // ------------------------------------------------------------------------
  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = false;
    this.isErrorState = false;
  }

  delete() {
    if (this.isErrorState) {
      this.clear();
      return;
    }
    if (this.shouldResetScreen) {
      this.currentOperand = '0';
      this.shouldResetScreen = false;
      return;
    }
    if (this.currentOperand.length === 1 || (this.currentOperand.length === 2 && this.currentOperand.startsWith('-'))) {
      this.currentOperand = '0';
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
    this.playSound('action');
  }

  appendNumber(number) {
    if (this.isErrorState) {
      this.clear();
    }
    if (this.shouldResetScreen) {
      this.currentOperand = number === '.' ? '0.' : number;
      this.shouldResetScreen = false;
      this.playSound('num');
      return;
    }
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number;
    } else {
      if (this.currentOperand.replace(/[-.]/g, '').length >= 14) return;
      this.currentOperand += number;
    }
    this.playSound('num');
  }

  negate() {
    if (this.isErrorState) return;
    if (this.currentOperand === '0') return;
    if (this.currentOperand.startsWith('-')) {
      this.currentOperand = this.currentOperand.slice(1);
    } else {
      this.currentOperand = '-' + this.currentOperand;
    }
    this.playSound('action');
  }

  percent() {
    if (this.isErrorState) return;
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;

    if (this.previousOperand && this.operation) {
      const prev = parseFloat(this.previousOperand);
      if (!isNaN(prev)) {
        if (this.operation === '+' || this.operation === '−') {
          this.currentOperand = this.formatNumber((prev * current) / 100);
        } else {
          this.currentOperand = this.formatNumber(current / 100);
        }
      }
    } else {
      this.currentOperand = this.formatNumber(current / 100);
    }
    this.shouldResetScreen = true;
    this.playSound('action');
  }

  chooseOperation(operation) {
    if (this.isErrorState) return;
    if (this.currentOperand === '' && this.previousOperand === '') return;

    if (this.previousOperand !== '' && !this.shouldResetScreen) {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.shouldResetScreen = true;
    this.playSound('op');
  }

  compute() {
    if (!this.operation || this.previousOperand === '' || this.isErrorState) return;

    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    let computation;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '−':
      case '-':
        computation = prev - current;
        break;
      case '×':
      case '*':
        computation = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) {
          this.handleError("Cannot divide by 0");
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    const expression = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation} ${this.formatDisplayNumber(this.currentOperand)}`;
    const formattedResult = this.formatNumber(computation);

    this.addHistory(expression, formattedResult);

    this.currentOperand = formattedResult;
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = true;

    this.triggerResultAnimation();
    this.playSound('equals');
  }

  handleError(msg) {
    this.currentOperand = msg;
    this.previousOperand = '';
    this.operation = undefined;
    this.isErrorState = true;
    this.shouldResetScreen = true;

    this.displayContainer.classList.add('shake-error');
    setTimeout(() => {
      this.displayContainer.classList.remove('shake-error');
    }, 500);

    this.playSound('error');
  }

  triggerResultAnimation() {
    this.displayContainer.classList.remove('pulse-result');
    void this.displayContainer.offsetWidth;
    this.displayContainer.classList.add('pulse-result');
    setTimeout(() => {
      this.displayContainer.classList.remove('pulse-result');
    }, 400);
  }

  // ------------------------------------------------------------------------
  // Formatting & Precision Helpers
  // ------------------------------------------------------------------------
  formatNumber(number) {
    if (!isFinite(number)) return "Error";
    const rounded = parseFloat(Number(number.toPrecision(12)).toFixed(10));
    if (Math.abs(rounded) > 1e12 || (Math.abs(rounded) < 1e-6 && rounded !== 0)) {
      return rounded.toExponential(6).replace('e+', 'e');
    }
    return rounded.toString();
  }

  formatDisplayNumber(numberStr) {
    if (this.isErrorState || numberStr === "Error") return numberStr;
    if (numberStr.includes('e')) return numberStr;

    const parts = numberStr.toString().split('.');
    const integerPart = parseFloat(parts[0]);
    const decimalPart = parts[1];

    let integerDisplay;
    if (isNaN(integerPart)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerPart.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }

    if (decimalPart != null) {
      return `${integerDisplay}.${decimalPart}`;
    } else {
      return integerDisplay;
    }
  }

  autoFitDisplay() {
    const len = this.currentOperand.length;
    if (len > 14) {
      this.currentOperandEl.style.fontSize = '1.3rem';
    } else if (len > 10) {
      this.currentOperandEl.style.fontSize = '1.7rem';
    } else if (len > 7) {
      this.currentOperandEl.style.fontSize = '2.0rem';
    } else {
      this.currentOperandEl.style.fontSize = '2.35rem';
    }
  }

  updateDisplay() {
    if (this.isErrorState) {
      this.currentOperandEl.innerText = this.currentOperand;
      this.previousOperandEl.innerText = '';
    } else {
      this.currentOperandEl.innerText = this.formatDisplayNumber(this.currentOperand);
      if (this.operation != null) {
        this.previousOperandEl.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation}`;
      } else {
        this.previousOperandEl.innerText = '';
      }
    }
    this.autoFitDisplay();
  }

  // ------------------------------------------------------------------------
  // History Management
  // ------------------------------------------------------------------------
  addHistory(expression, result) {
    const item = { id: Date.now(), expression, result };
    this.history.unshift(item);
    if (this.history.length > 30) this.history.pop();
    try {
      localStorage.setItem('calc_history', JSON.stringify(this.history));
    } catch {
      // LocalStorage fallback
    }
    this.renderHistory();
  }

  clearHistory() {
    this.history = [];
    try {
      localStorage.removeItem('calc_history');
    } catch {
      // LocalStorage fallback
    }
    this.renderHistory();
  }

  renderHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;

    if (this.history.length === 0) {
      historyList.innerHTML = '<div class="history-empty">No calculations yet</div>';
      return;
    }

    historyList.innerHTML = '';
    this.history.forEach(item => {
      const div = document.createElement('div');
      div.className = 'history-item';
      div.innerHTML = `
        <span class="history-expr">${item.expression} =</span>
        <span class="history-res">${item.result}</span>
      `;
      div.addEventListener('click', () => {
        this.currentOperand = item.result;
        this.previousOperand = '';
        this.operation = undefined;
        this.shouldResetScreen = true;
        this.isErrorState = false;
        this.updateDisplay();
        document.getElementById('historyDrawer').classList.remove('active');
        this.playSound('num');
      });
      historyList.appendChild(div);
    });
  }
}

// --------------------------------------------------------------------------
// Initialize & Event Bindings
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const previousOperandEl = document.getElementById('previousOperand');
  const currentOperandEl = document.getElementById('currentOperand');
  const displayContainer = document.getElementById('displayContainer');
  const copyBadge = document.getElementById('copyBadge');
  const themeToggle = document.getElementById('themeToggle');
  const historyToggle = document.getElementById('historyToggle');
  const historyDrawer = document.getElementById('historyDrawer');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  const soundToggle = document.getElementById('soundToggle');

  const calculator = new Calculator(previousOperandEl, currentOperandEl, displayContainer);
  calculator.renderHistory();

  // ------------------------------------------------------------------------
  // Theme Management
  // ------------------------------------------------------------------------
  const savedTheme = localStorage.getItem('calc_theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      document.body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('calc_theme', 'light');
    } else {
      document.body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('calc_theme', 'dark');
    }
    calculator.playSound('action');
  });

  // ------------------------------------------------------------------------
  // Sound Toggle
  // ------------------------------------------------------------------------
  if (!calculator.soundEnabled) {
    document.body.classList.add('sound-muted');
  }

  soundToggle.addEventListener('click', () => {
    const enabled = calculator.toggleSound();
    if (enabled) {
      document.body.classList.remove('sound-muted');
      calculator.playSound('action');
    } else {
      document.body.classList.add('sound-muted');
    }
  });

  // ------------------------------------------------------------------------
  // History Drawer Toggle
  // ------------------------------------------------------------------------
  historyToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    historyDrawer.classList.toggle('active');
    calculator.playSound('action');
  });

  clearHistoryBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    calculator.clearHistory();
    calculator.playSound('action');
  });

  document.addEventListener('click', (e) => {
    if (!historyDrawer.contains(e.target) && !historyToggle.contains(e.target)) {
      historyDrawer.classList.remove('active');
    }
  });

  // ------------------------------------------------------------------------
  // Dynamic Ripple Effect Function
  // ------------------------------------------------------------------------
  function createRipple(event, button) {
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';

    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const x = event && event.clientX ? event.clientX - rect.left - radius : rect.width / 2 - radius;
    const y = event && event.clientY ? event.clientY - rect.top - radius : rect.height / 2 - radius;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  // ------------------------------------------------------------------------
  // Button Event Delegations
  // ------------------------------------------------------------------------
  const buttons = document.querySelectorAll('.key');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      createRipple(e, button);

      if (button.dataset.number != null) {
        calculator.appendNumber(button.dataset.number);
        calculator.updateDisplay();
      } else if (button.dataset.operator != null) {
        calculator.chooseOperation(button.dataset.operator);
        calculator.updateDisplay();
      } else if (button.dataset.action === 'all-clear') {
        calculator.clear();
        calculator.playSound('action');
        calculator.updateDisplay();
      } else if (button.dataset.action === 'delete') {
        calculator.delete();
        calculator.updateDisplay();
      } else if (button.dataset.action === 'equals') {
        calculator.compute();
        calculator.updateDisplay();
      } else if (button.dataset.action === 'percent') {
        calculator.percent();
        calculator.updateDisplay();
      } else if (button.dataset.action === 'negate') {
        calculator.negate();
        calculator.updateDisplay();
      }
    });
  });

  // ------------------------------------------------------------------------
  // Copy to Clipboard on Display Click
  // ------------------------------------------------------------------------
  displayContainer.addEventListener('click', async () => {
    const value = calculator.currentOperand;
    if (!value || calculator.isErrorState) return;

    try {
      await navigator.clipboard.writeText(value);
      copyBadge.classList.add('show');
      calculator.playSound('action');
      setTimeout(() => {
        copyBadge.classList.remove('show');
      }, 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      copyBadge.classList.add('show');
      setTimeout(() => {
        copyBadge.classList.remove('show');
      }, 1800);
    }
  });

  // ------------------------------------------------------------------------
  // Physical Keyboard Support with Visual Key Feedback
  // ------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    let keyToMatch = e.key;

    if (keyToMatch === 'c' || keyToMatch === 'C') {
      keyToMatch = 'Escape';
    }

    if (keyToMatch === 'Enter') keyToMatch = '=';
    if (keyToMatch === '*') keyToMatch = '×';
    if (keyToMatch === '/') {
      e.preventDefault();
      keyToMatch = '÷';
    }
    if (keyToMatch === '-') keyToMatch = '−';

    let targetButton = null;

    if ((!isNaN(keyToMatch) && keyToMatch !== ' ') || keyToMatch === '.') {
      targetButton = document.querySelector(`.key-num[data-number="${keyToMatch}"]`);
    } else if (['+', '−', '×', '÷'].includes(keyToMatch)) {
      targetButton = document.querySelector(`.key-op[data-operator="${keyToMatch}"]`);
    } else if (keyToMatch === '=') {
      targetButton = document.querySelector('.key-equals');
    } else if (e.key === 'Backspace') {
      targetButton = document.querySelector('[data-action="delete"]');
    } else if (keyToMatch === 'Escape') {
      targetButton = document.querySelector('[data-action="all-clear"]');
    } else if (keyToMatch === '%') {
      targetButton = document.querySelector('[data-action="percent"]');
    }

    if (targetButton) {
      targetButton.classList.add('key-active');
      targetButton.click();
      setTimeout(() => {
        targetButton.classList.remove('key-active');
      }, 150);
    }
  });
});
