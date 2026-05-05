// Funções de cálculo de Resistências
function calculateSeriesResistance() {
    const inputs = document.querySelectorAll('#resistanceSeriesInputs input');
    let total = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            total += value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-minimum-value'));
        return;
    }

    const result = total.toFixed(6);
    document.getElementById('resistanceSeriesResult').value = result + ' Ω';
    showSuccess(t('success-series-resistance'));
}

function calculateParallelResistance() {
    const inputs = document.querySelectorAll('#resistanceParallelInputs input');
    let reciprocal = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            reciprocal += 1 / value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-minimum-value'));
        return;
    }

    if (reciprocal === 0) {
        showError(t('error-calculation'));
        return;
    }

    const result = (1 / reciprocal).toFixed(6);
    document.getElementById('resistanceParallelResult').value = result + ' Ω';
    showSuccess(t('success-parallel-resistance'));
}

// Funções de cálculo de Capacitâncias
function calculateSeriesCapacitance() {
    const inputs = document.querySelectorAll('#capacitanceSeriesInputs input');
    let reciprocal = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            reciprocal += 1 / value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    if (reciprocal === 0) {
        showError(t('error-calculation'));
        return;
    }

    const result = (1 / reciprocal).toFixed(6);
    document.getElementById('capacitanceSeriesResult').value = result + ' F';
    showSuccess(t('success-series-capacitance'));
}

function calculateParallelCapacitance() {
    const inputs = document.querySelectorAll('#capacitanceParallelInputs input');
    let total = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            total += value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    const result = total.toFixed(6);
    document.getElementById('capacitanceParallelResult').value = result + ' F';
    showSuccess(t('success-parallel-capacitance'));
}

// Funções de cálculo de Indutâncias
function calculateSeriesInductance() {
    const inputs = document.querySelectorAll('#inductanceSeriesInputs input');
    let total = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            total += value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-invalid-inductance'));
        return;
    }

    const result = total.toFixed(6);
    document.getElementById('inductanceSeriesResult').value = result + ' H';
    showSuccess(t('success-series-inductance'));
}

function calculateParallelInductance() {
    const inputs = document.querySelectorAll('#inductanceParallelInputs input');
    let reciprocal = 0;
    let count = 0;

    for (let input of inputs) {
        const value = parseFloat(input.value);
        if (!isNaN(value) && value > 0) {
            reciprocal += 1 / value;
            count++;
        }
    }

    if (count === 0) {
        showError(t('error-invalid-inductance'));
        return;
    }

    if (reciprocal === 0) {
        showError(t('error-calculation'));
        return;
    }

    const result = (1 / reciprocal).toFixed(6);
    document.getElementById('inductanceParallelResult').value = result + ' H';
    showSuccess(t('success-parallel-inductance'));
}

// Funções para circuito RC transitório
function calculateRCTransient() {
    const V = parseFloat(document.getElementById('rcVoltage').value);
    const R = parseFloat(document.getElementById('rcResistance').value);
    const C = parseFloat(document.getElementById('rcCapacitance').value);
    const t = parseFloat(document.getElementById('rcTime').value);

    if (isNaN(V) || isNaN(R) || isNaN(C) || isNaN(t) || V <= 0 || R <= 0 || C <= 0 || t < 0) {
        showError(t('error-invalid-voltage'));
        return;
    }

    // Constante de tempo: τ = RC
    const tau = R * C;

    // Tensão no capacitor em regime transitório: Vc(t) = V(1 - e^(-t/τ))
    const Vc = V * (1 - Math.exp(-t / tau));

    document.getElementById('rcCapacitorVoltage').value = Vc.toFixed(6) + ' V';
    document.getElementById('rcTimeConstant').value = tau.toFixed(6) + ' s';
    showSuccess(t('success-rc-transient'));
}

// Funções para circuito RL transitório
function calculateRLTransient() {
    const V = parseFloat(document.getElementById('rlVoltage').value);
    const R = parseFloat(document.getElementById('rlResistance').value);
    const L = parseFloat(document.getElementById('rlInductance').value);
    const t = parseFloat(document.getElementById('rlTime').value);

    if (isNaN(V) || isNaN(R) || isNaN(L) || isNaN(t) || V <= 0 || R <= 0 || L <= 0 || t < 0) {
        showError(t('error-invalid-voltage'));
        return;
    }

    // Constante de tempo: τ = L/R
    const tau = L / R;

    // Corrente no indutor em regime transitório: I(t) = (V/R)(1 - e^(-t/τ))
    const I = (V / R) * (1 - Math.exp(-t / tau));

    // Tensão no indutor: VL(t) = V*e^(-t/τ)
    const VL = V * Math.exp(-t / tau);

    document.getElementById('rlInductorVoltage').value = VL.toFixed(6) + ' V';
    document.getElementById('rlTimeConstant').value = tau.toFixed(6) + ' s';
    showSuccess(t('success-rl-transient'));
}

// Funções de limpeza
function calculateConductorResistance() {
    const length = parseFloat(document.getElementById('conductorLength').value);
    const area = parseFloat(document.getElementById('conductorArea').value);
    const resistivity = parseFloat(document.getElementById('conductorResistivity').value);

    if (isNaN(length) || isNaN(area) || isNaN(resistivity)) {
        showError(t('error-invalid-conductor-values'));
        return;
    }

    if (length <= 0 || area <= 0 || resistivity <= 0) {
        showError(t('error-minimum-value'));
        return;
    }

    const R = (resistivity * length) / area;
    document.getElementById('conductorResistanceResult').value = R.toFixed(6) + ' Ω';
    showSuccess(t('success-conductor-resistance'));
}

function clearResistance() {
    document.querySelectorAll('#resistanceSeriesInputs input, #resistanceParallelInputs input, #conductorResistanceInputs input').forEach(input => input.value = '');
    document.getElementById('resistanceSeriesResult').value = '';
    document.getElementById('resistanceParallelResult').value = '';
    document.getElementById('conductorResistanceResult').value = '';
    hideMessages();
}

function clearConductorResistance() {
    document.querySelectorAll('#conductorResistanceInputs input').forEach(input => input.value = '');
    document.getElementById('conductorResistanceResult').value = '';
    hideMessages();
}

function clearCapacitance() {
    document.querySelectorAll('#capacitanceSeriesInputs input, #capacitanceParallelInputs input, #capacitorCapacitanceInputs input').forEach(input => input.value = '');
    document.getElementById('capacitanceSeriesResult').value = '';
    document.getElementById('capacitanceParallelResult').value = '';
    document.getElementById('capacitorCapacitanceResult').value = '';
    hideMessages();
}

function calculateCapacitorCapacitance() {
    const k = parseFloat(document.getElementById('capacitorDielectric').value);
    const A = parseFloat(document.getElementById('capacitorArea').value);
    const d = parseFloat(document.getElementById('capacitorDistance').value);

    if (isNaN(k) || isNaN(A) || isNaN(d)) {
        showError(t('error-invalid-capacitor'));
        return;
    }

    if (k <= 0 || A <= 0 || d <= 0) {
        showError(t('error-minimum-value'));
        return;
    }

    // Fórmula: C = (k × A / d) × 0.00000000000885
    const C = (k * A / d) * 0.00000000000885;
    document.getElementById('capacitorCapacitanceResult').value = C.toFixed(15) + ' F';
    showSuccess(t('success-capacitor-capacitance'));
}

function clearCapacitorCapacitance() {
    document.querySelectorAll('#capacitorCapacitanceInputs input').forEach(input => input.value = '');
    document.getElementById('capacitorCapacitanceResult').value = '';
    hideMessages();
}

function clearInductance() {
    document.querySelectorAll('#inductanceSeriesInputs input, #inductanceParallelInputs input').forEach(input => input.value = '');
    document.getElementById('inductanceSeriesResult').value = '';
    document.getElementById('inductanceParallelResult').value = '';
    hideMessages();
}

function calculateInductorInductance() {
    const u = parseFloat(document.getElementById('inductorPermeability').value);
    const N = parseFloat(document.getElementById('inductorTurns').value);
    const A = parseFloat(document.getElementById('inductorArea').value);
    const s = parseFloat(document.getElementById('inductorLength').value);

    if (isNaN(u) || isNaN(N) || isNaN(A) || isNaN(s)) {
        showError(t('error-invalid-inductance'));
        return;
    }

    if (u <= 0 || N <= 0 || A <= 0 || s <= 0) {
        showError(t('error-minimum-value'));
        return;
    }

    if (s === 0) {
        showError(t('error-calculation'));
        return;
    }

    const L = (u * (N * N) * A*0.00000126) / s;
    document.getElementById('inductorInductanceResult').value = L.toFixed(6) + ' H';
    showSuccess(t('success-series-inductance'));
}

function clearInductorCalculation() {
    document.getElementById('inductorPermeability').value = '';
    document.getElementById('inductorTurns').value = '';
    document.getElementById('inductorArea').value = '';
    document.getElementById('inductorLength').value = '';
    document.getElementById('inductorInductanceResult').value = '';
    hideMessages();
}

function clearRCCircuit() {
    document.getElementById('rcVoltage').value = '';
    document.getElementById('rcResistance').value = '';
    document.getElementById('rcCapacitance').value = '';
    document.getElementById('rcTime').value = '';
    document.getElementById('rcCapacitorVoltage').value = '';
    document.getElementById('rcTimeConstant').value = '';
    hideMessages();
}

function clearRLCircuit() {
    document.getElementById('rlVoltage').value = '';
    document.getElementById('rlResistance').value = '';
    document.getElementById('rlInductance').value = '';
    document.getElementById('rlTime').value = '';
    document.getElementById('rlInductorVoltage').value = '';
    document.getElementById('rlTimeConstant').value = '';
    hideMessages();
}

// Funções de mensagens
function showError(message) {
    hideMessages();
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
        setTimeout(() => errorDiv.classList.remove('show'), 5000);
    }
}

function showSuccess(message) {
    hideMessages();
    const successDiv = document.querySelector('.success-message');
    if (successDiv) {
        successDiv.textContent = message;
        successDiv.classList.add('show');
        setTimeout(() => successDiv.classList.remove('show'), 5000);
    }
}

function hideMessages() {
    document.querySelectorAll('.error-message, .success-message').forEach(msg => msg.classList.remove('show'));
}

// Funções de cálculo de Divisor de Tensão
function calculateVoltageDivider() {
    const R1 = parseFloat(document.getElementById('vdR1').value);
    const R2 = parseFloat(document.getElementById('vdR2').value);
    const R3 = parseFloat(document.getElementById('vdR3').value);
    const R4 = parseFloat(document.getElementById('vdR4').value);
    const Vt = parseFloat(document.getElementById('vdVoltage').value);
    const Rx = parseFloat(document.getElementById('vdMeasuredResistance').value);

    // Criar array com resistências e filtrar valores válidos
    const resistances = [R1, R2, R3, R4].filter(r => !isNaN(r) && r > 0);

    if (resistances.length === 0) {
        showError(t('error-minimum-value'));
        return;
    }

    if (isNaN(Vt) || Vt <= 0) {
        showError(t('error-invalid-voltage'));
        return;
    }

    if (isNaN(Rx) || Rx <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    // Calcular resistência total
    const Rtotal = resistances.reduce((sum, r) => sum + r, 0);

    // Verificar se Rx está no circuito
    if (!resistances.includes(Rx)) {
        showError(t('error-measured-resistance'));
        return;
    }

    // Fórmula do divisor de tensão: Vx = Vt × (Rx / Rtotal)
    const Vx = Vt * (Rx / Rtotal);

    document.getElementById('vdResult').value = Vx.toFixed(6) + ' V';
    showSuccess(t('success-voltage-divider'));
}

function clearVoltageDivider() {
    document.getElementById('vdR1').value = '';
    document.getElementById('vdR2').value = '';
    document.getElementById('vdR3').value = '';
    document.getElementById('vdR4').value = '';
    document.getElementById('vdVoltage').value = '';
    document.getElementById('vdMeasuredResistance').value = '';
    document.getElementById('vdResult').value = '';
    hideMessages();
}

// Funções de cálculo de Divisor de Corrente
function calculateCurrentDivider() {
    const R1 = parseFloat(document.getElementById('cdMeasuredResistance').value);
    const R2 = parseFloat(document.getElementById('cdOppositeResistance').value);
    const It = parseFloat(document.getElementById('cdCurrent').value);

    if (isNaN(R1) || R1 <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(R2) || R2 <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(It) || It <= 0) {
        showError(t('error-invalid-current'));
        return;
    }

    // Fórmula do divisor de corrente: I1 = (R2 / (R1 + R2)) × It
    const I1 = (R2 / (R1 + R2)) * It;

    document.getElementById('cdResult').value = I1.toFixed(6) + ' A';
    showSuccess(t('success-current-divider'));
}

function clearCurrentDivider() {
    document.getElementById('cdOppositeResistance').value = '';
    document.getElementById('cdCurrent').value = '';
    document.getElementById('cdMeasuredResistance').value = '';
    document.getElementById('cdResult').value = '';
    hideMessages();
}

// Funções de cálculo de Filtros
function calculateLowPassFilter() {
    const R = parseFloat(document.getElementById('lpfResistance').value);
    const C = parseFloat(document.getElementById('lpfCapacitance').value);

    if (isNaN(R) || R <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(C) || C <= 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    // Fórmula da frequência de corte: Fo = 1 / (2π × R × C)
    const Fo = 1 / (2 * Math.PI * R * C);

    document.getElementById('lpfResult').value = Fo.toFixed(6) + ' Hz';
    showSuccess(t('success-lpf'));
}

function clearLowPassFilter() {
    document.getElementById('lpfResistance').value = '';
    document.getElementById('lpfCapacitance').value = '';
    document.getElementById('lpfResult').value = '';
    hideMessages();
}

function calculateHighPassFilter() {
    const R = parseFloat(document.getElementById('hpfResistance').value);
    const C = parseFloat(document.getElementById('hpfCapacitance').value);

    if (isNaN(R) || R <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(C) || C <= 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    // Fórmula da frequência de corte: Fo = 1 / (2π × R × C)
    const Fo = 1 / (2 * Math.PI * R * C);

    document.getElementById('hpfResult').value = Fo.toFixed(6) + ' Hz';
    showSuccess(t('success-hpf'));
}

function clearHighPassFilter() {
    document.getElementById('hpfResistance').value = '';
    document.getElementById('hpfCapacitance').value = '';
    document.getElementById('hpfResult').value = '';
    hideMessages();
}

// Funções de cálculo de Filtros - Relação Vo/Vi
function calculateLowPassFilterVoVi() {
    const R = parseFloat(document.getElementById('lpfVoViResistance').value);
    const C = parseFloat(document.getElementById('lpfVoViCapacitance').value);
    const f = parseFloat(document.getElementById('lpfVoViFrequency').value);

    if (isNaN(R) || R <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(C) || C <= 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    if (isNaN(f) || f <= 0) {
        showError(t('error-invalid-frequency'));
        return;
    }

    // Cálculo da reatância capacitiva: Xc = 1 / (2π × f × C)
    const Xc = 1 / (2 * Math.PI * f * C);

    // Cálculo da relação Vo/Vi para filtro passa-baixa: Vo/Vi = Xc / √(R² + Xc²)
    const VoVi = Xc / Math.sqrt(R * R + Xc * Xc);

    document.getElementById('lpfVoViResult').value = VoVi.toFixed(6);
    showSuccess(t('success-lpf-vo-vi'));
}

function clearLowPassFilterVoVi() {
    document.getElementById('lpfVoViResistance').value = '';
    document.getElementById('lpfVoViCapacitance').value = '';
    document.getElementById('lpfVoViFrequency').value = '';
    document.getElementById('lpfVoViResult').value = '';
    hideMessages();
}

function calculateHighPassFilterVoVi() {
    const R = parseFloat(document.getElementById('hpfVoViResistance').value);
    const C = parseFloat(document.getElementById('hpfVoViCapacitance').value);
    const f = parseFloat(document.getElementById('hpfVoViFrequency').value);

    if (isNaN(R) || R <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    if (isNaN(C) || C <= 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    if (isNaN(f) || f <= 0) {
        showError(t('error-invalid-frequency'));
        return;
    }

    // Cálculo da reatância capacitiva: Xc = 1 / (2π × f × C)
    const Xc = 1 / (2 * Math.PI * f * C);

    // Cálculo da relação Vo/Vi para filtro passa-alta: Vo/Vi = R / √(R² + Xc²)
    const VoVi = R / Math.sqrt(R * R + Xc * Xc);

    document.getElementById('hpfVoViResult').value = VoVi.toFixed(6);
    showSuccess(t('success-hpf-vo-vi'));
}

function clearHighPassFilterVoVi() {
    document.getElementById('hpfVoViResistance').value = '';
    document.getElementById('hpfVoViCapacitance').value = '';
    document.getElementById('hpfVoViFrequency').value = '';
    document.getElementById('hpfVoViResult').value = '';
    hideMessages();
}

// Funções de cálculo de Reatâncias
function calculateCapacitiveReactance() {
    const C = parseFloat(document.getElementById('xcCapacitance').value);
    const f = parseFloat(document.getElementById('xcFrequency').value);

    if (isNaN(C) || C <= 0) {
        showError(t('error-invalid-capacitance'));
        return;
    }

    if (isNaN(f) || f <= 0) {
        showError(t('error-invalid-frequency'));
        return;
    }

    // Fórmula da reatância capacitiva: Xc = 1 / (2π × f × C)
    const Xc = 1 / (2 * Math.PI * f * C);

    document.getElementById('xcResult').value = Xc.toFixed(6) + ' Ω';
    showSuccess(t('success-capacitive-reactance'));
}

function clearCapacitiveReactance() {
    document.getElementById('xcCapacitance').value = '';
    document.getElementById('xcFrequency').value = '';
    document.getElementById('xcResult').value = '';
    hideMessages();
}

function calculateInductiveReactance() {
    const L = parseFloat(document.getElementById('xlInductance').value);
    const f = parseFloat(document.getElementById('xlFrequency').value);

    if (isNaN(L) || L <= 0) {
        showError(t('error-invalid-inductance'));
        return;
    }

    if (isNaN(f) || f <= 0) {
        showError(t('error-invalid-frequency'));
        return;
    }

    // Fórmula da reatância indutiva: XL = 2π × f × L
    const XL = 2 * Math.PI * f * L;

    document.getElementById('xlResult').value = XL.toFixed(6) + ' Ω';
    showSuccess(t('success-inductive-reactance'));
}

function clearInductiveReactance() {
    document.getElementById('xlInductance').value = '';
    document.getElementById('xlFrequency').value = '';
    document.getElementById('xlResult').value = '';
    hideMessages();
}

// Funções de cálculo de Conversão de Impedância
function calculateRectangularToPolar() {
    const R = parseFloat(document.getElementById('rectReal').value);
    const X = parseFloat(document.getElementById('rectImaginary').value);

    if (isNaN(R) || isNaN(X)) {
        showError(t('error-invalid-impedance'));
        return;
    }

    // Cálculo do módulo: Z = √(R² + X²)
    const Z = Math.sqrt(R * R + X * X);

    // Cálculo do ângulo em radianos: θ = arctan(X/R)
    const thetaRad = Math.atan2(X, R);
    
    // Conversão para graus
    const thetaDeg = thetaRad * 180 / Math.PI;

    document.getElementById('polarMagnitude').value = Z.toFixed(6) + ' Ω';
    document.getElementById('polarAngle').value = thetaDeg.toFixed(4) + '° (' + thetaRad.toFixed(6) + ' rad)';
    showSuccess(t('success-impedance-conversion'));
}

function calculatePolarToRectangular() {
    const Z = parseFloat(document.getElementById('polarMag').value);
    const theta = parseFloat(document.getElementById('polarAng').value);

    if (isNaN(Z) || isNaN(theta) || Z < 0) {
        showError(t('error-invalid-impedance'));
        return;
    }

    // Conversão do ângulo de graus para radianos
    const thetaRad = theta * Math.PI / 180;

    // Cálculo da parte real: R = Z × cos(θ)
    const R = Z * Math.cos(thetaRad);

    // Cálculo da parte imaginária: X = Z × sin(θ)
    const X = Z * Math.sin(thetaRad);

    document.getElementById('rectangularReal').value = R.toFixed(6) + ' Ω';
    document.getElementById('rectangularImaginary').value = (X >= 0 ? '+' : '') + X.toFixed(6) + ' Ω';
    showSuccess(t('success-impedance-conversion'));
}

function clearRectangularToPolar() {
    document.getElementById('rectReal').value = '';
    document.getElementById('rectImaginary').value = '';
    document.getElementById('polarMagnitude').value = '';
    document.getElementById('polarAngle').value = '';
    hideMessages();
}

function clearPolarToRectangular() {
    document.getElementById('polarMag').value = '';
    document.getElementById('polarAng').value = '';
    document.getElementById('rectangularReal').value = '';
    document.getElementById('rectangularImaginary').value = '';
    hideMessages();
}

// Funções para conversão Delta-Estrela
function calculateStarToDelta() {
    const Ra = parseFloat(document.getElementById('starRa').value);
    const Rb = parseFloat(document.getElementById('starRb').value);
    const Rc = parseFloat(document.getElementById('starRc').value);

    if (isNaN(Ra) || isNaN(Rb) || isNaN(Rc) || Ra <= 0 || Rb <= 0 || Rc <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    // Cálculos das fórmulas de conversão estrela para delta
    const sum = Ra * Rb + Rb * Rc + Rc * Ra;
    const R1 = sum / Rc;  // R1 = (Ra*Rb + Rb*Rc + Rc*Ra) / Rc
    const R2 = sum / Ra;  // R2 = (Ra*Rb + Rb*Rc + Rc*Ra) / Ra
    const R3 = sum / Rb;  // R3 = (Ra*Rb + Rb*Rc + Rc*Ra) / Rb

    document.getElementById('deltaR1').value = R1.toFixed(6) + ' Ω';
    document.getElementById('deltaR2').value = R2.toFixed(6) + ' Ω';
    document.getElementById('deltaR3').value = R3.toFixed(6) + ' Ω';
    showSuccess(t('success-star-to-delta'));
}

function calculateDeltaToStar() {
    const R1 = parseFloat(document.getElementById('deltaR1Input').value);
    const R2 = parseFloat(document.getElementById('deltaR2Input').value);
    const R3 = parseFloat(document.getElementById('deltaR3Input').value);

    if (isNaN(R1) || isNaN(R2) || isNaN(R3) || R1 <= 0 || R2 <= 0 || R3 <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    // Cálculos das fórmulas de conversão delta para estrela
    const sum = R1 + R2 + R3;
    const Ra = (R1 * R3) / sum;  // Ra = R1*R3 / (R1+R2+R3)
    const Rb = (R1 * R2) / sum;  // Rb = R1*R2 / (R1+R2+R3)
    const Rc = (R2 * R3) / sum;  // Rc = R2*R3 / (R1+R2+R3)

    document.getElementById('starRaResult').value = Ra.toFixed(6) + ' Ω';
    document.getElementById('starRbResult').value = Rb.toFixed(6) + ' Ω';
    document.getElementById('starRcResult').value = Rc.toFixed(6) + ' Ω';
    showSuccess(t('success-delta-to-star'));
}

function clearDeltaStarInputs(type) {
    if (type === 'star') {
        document.getElementById('starRa').value = '';
        document.getElementById('starRb').value = '';
        document.getElementById('starRc').value = '';
        document.getElementById('deltaR1').value = '';
        document.getElementById('deltaR2').value = '';
        document.getElementById('deltaR3').value = '';
    } else if (type === 'delta') {
        document.getElementById('deltaR1Input').value = '';
        document.getElementById('deltaR2Input').value = '';
        document.getElementById('deltaR3Input').value = '';
        document.getElementById('starRaResult').value = '';
        document.getElementById('starRbResult').value = '';
        document.getElementById('starRcResult').value = '';
    }
    hideMessages();
}

// Funções para Correção de Fator de Potência
function calculatePowerFactorCorrection() {
    const P = parseFloat(document.getElementById('pfPower').value);
    const I = parseFloat(document.getElementById('pfCurrent').value);
    const V = parseFloat(document.getElementById('pfVoltage').value);
    const f = parseFloat(document.getElementById('pfFrequency').value);

    if (isNaN(P) || isNaN(I) || isNaN(V) || isNaN(f) || P <= 0 || I <= 0 || V <= 0 || f <= 0) {
        showError(t('error-invalid-resistance'));
        return;
    }

    try {
        // Cálculo do ângulo (theta) em radianos
        // theta = cos^-1(P / (V * I))
        const apparentPower = V * I;
        
        if (P > apparentPower) {
            showError(t('error-calculation'));
            return;
        }

        const theta = Math.acos(P / apparentPower);

        // Cálculo da potência reativa
        // Qm = P * tan(theta)
        const Qm = P * Math.tan(theta);

        // Cálculo da corrente capacitiva
        // Ic = Qm / V
        const Ic = Qm / V;

        // Cálculo da reatância capacitiva
        // Xc = V / Ic
        const Xc = V / Ic;

        // Cálculo da capacitância
        // C = 0.159 / (f * Xc)
        const C = 0.159 / (f * Xc);

        document.getElementById('pfCapacitance').value = C.toFixed(9) + ' F';
        showSuccess(t('success-pf-correction'));

    } catch (error) {
        showError(t('error-calculation'));
    }
}

function clearPowerFactorInputs() {
    document.getElementById('pfPower').value = '';
    document.getElementById('pfCurrent').value = '';
    document.getElementById('pfVoltage').value = '';
    document.getElementById('pfFrequency').value = '';
    document.getElementById('pfCapacitance').value = '';
    hideMessages();
}

// Funções para cálculo de Transformadores
function calculateTransformerVoltageRatio() {
    const Np = parseFloat(document.getElementById('trfNpVoltage').value);
    const Ns = parseFloat(document.getElementById('trfNsVoltage').value);
    const Vp = parseFloat(document.getElementById('trfVpInput').value);

    if (isNaN(Np) || isNaN(Ns) || isNaN(Vp) || Np <= 0 || Ns <= 0 || Vp <= 0) {
        showError(t('error-invalid-turns'));
        return;
    }

    // Fórmula: Vs = (Ns/Np) * Vp
    const Vs = (Ns / Np) * Vp;

    document.getElementById('trfVsResult').value = Vs.toFixed(6) + ' V';
    showSuccess(t('success-transformer-voltage'));
}

function clearTransformerVoltageRatio() {
    document.getElementById('trfNpVoltage').value = '';
    document.getElementById('trfNsVoltage').value = '';
    document.getElementById('trfVpInput').value = '';
    document.getElementById('trfVsResult').value = '';
    hideMessages();
}

function calculateTransformerCurrentRatio() {
    const Np = parseFloat(document.getElementById('trfNpCurrent').value);
    const Ns = parseFloat(document.getElementById('trfNsCurrent').value);
    const Ip = parseFloat(document.getElementById('trfIpInput').value);

    if (isNaN(Np) || isNaN(Ns) || isNaN(Ip) || Np <= 0 || Ns <= 0 || Ip <= 0) {
        showError(t('error-invalid-turns'));
        return;
    }

    // Fórmula: Is = (Np/Ns) * Ip
    const Is = (Np / Ns) * Ip;

    document.getElementById('trfIsResult').value = Is.toFixed(6) + ' A';
    showSuccess(t('success-transformer-current'));
}

function clearTransformerCurrentRatio() {
    document.getElementById('trfNpCurrent').value = '';
    document.getElementById('trfNsCurrent').value = '';
    document.getElementById('trfIpInput').value = '';
    document.getElementById('trfIsResult').value = '';
    hideMessages();
}

function calculateTransformerEfficiency() {
    const Pp = parseFloat(document.getElementById('trfPpInput').value);
    const Ps = parseFloat(document.getElementById('trfPsInput').value);

    if (isNaN(Pp) || isNaN(Ps) || Pp <= 0 || Ps <= 0) {
        showError(t('error-invalid-power'));
        return;
    }

    if (Ps > Pp) {
        showError(t('error-calculation'));
        return;
    }

    // Fórmula: Ef = (Ps/Pp) * 100
    const Ef = (Ps / Pp) * 100;

    document.getElementById('trfEffResult').value = Ef.toFixed(2) + ' %';
    showSuccess(t('success-transformer-efficiency'));
}

function clearTransformerEfficiency() {
    document.getElementById('trfPpInput').value = '';
    document.getElementById('trfPsInput').value = '';
    document.getElementById('trfEffResult').value = '';
    hideMessages();
}

function calculateTransformerImpedanceRatio() {
    const Np = parseFloat(document.getElementById('trfNpImp').value);
    const Ns = parseFloat(document.getElementById('trfNsImp').value);
    const Zp = parseFloat(document.getElementById('trfZpInput').value);
    const Zs = parseFloat(document.getElementById('trfZsInput').value);

    if (isNaN(Np) || isNaN(Ns) || Np <= 0 || Ns <= 0) {
        showError(t('error-invalid-turns'));
        return;
    }

    // Verificar se ao menos uma impedância foi preenchida
    if ((isNaN(Zp) || Zp <= 0) && (isNaN(Zs) || Zs <= 0)) {
        showError(t('error-invalid-impedance-transformer'));
        return;
    }

    // Se apenas Zs foi preenchido, calcular apenas Zp
    if ((isNaN(Zp) || Zp <= 0) && !isNaN(Zs) && Zs > 0) {
        // Calcular Zp: Zp = (Np/Ns)² * Zs
        const ZpCalc = Math.pow(Np / Ns, 2) * Zs;
        document.getElementById('trfZpCalc').value = ZpCalc.toFixed(6) + ' Ω';
        document.getElementById('trfZsCalc').value = Zs.toFixed(6) + ' Ω';
    } 
    // Se apenas Zp foi preenchido, calcular apenas Zs
    else if (!isNaN(Zp) && Zp > 0 && (isNaN(Zs) || Zs <= 0)) {
        // Calcular Zs: Zs = (Ns/Np)² * Zp
        const ZsCalc = Math.pow(Ns / Np, 2) * Zp;
        document.getElementById('trfZpCalc').value = Zp.toFixed(6) + ' Ω';
        document.getElementById('trfZsCalc').value = ZsCalc.toFixed(6) + ' Ω';
    }
    // Se ambas foram preenchidas, calcular ambas
    else if (!isNaN(Zp) && Zp > 0 && !isNaN(Zs) && Zs > 0) {
        document.getElementById('trfZpCalc').value = Zp.toFixed(6) + ' Ω';
        document.getElementById('trfZsCalc').value = Zs.toFixed(6) + ' Ω';
    }

    showSuccess(t('success-transformer-impedance'));
}

function clearTransformerImpedanceRatio() {
    document.getElementById('trfNpImp').value = '';
    document.getElementById('trfNsImp').value = '';
    document.getElementById('trfZpInput').value = '';
    document.getElementById('trfZsInput').value = '';
    document.getElementById('trfZpCalc').value = '';
    document.getElementById('trfZsCalc').value = '';
    hideMessages();
}

function calculateTransformerSpecification() {
    const VA = parseFloat(document.getElementById('trfVAInput').value);
    const FP = parseFloat(document.getElementById('trfPowerFactorInput').value);
    const Vs = parseFloat(document.getElementById('trfVsSpecInput').value);

    if (isNaN(VA) || isNaN(FP) || isNaN(Vs) || VA <= 0 || FP <= 0 || FP > 1 || Vs <= 0) {
        showError(t('error-invalid-kva'));
        return;
    }

    // Fórmula: PW = VA * FP
    const PW = VA * FP;

    // Fórmula: Is = VA / Vs
    const Is = VA / Vs;

    document.getElementById('trfWResult').value = PW.toFixed(6) + ' W';
    document.getElementById('trfIsSpecResult').value = Is.toFixed(6) + ' A';
    showSuccess(t('success-transformer-specification'));
}

function clearTransformerSpecification() {
    document.getElementById('trfVAInput').value = '';
    document.getElementById('trfPowerFactorInput').value = '';
    document.getElementById('trfVsSpecInput').value = '';
    document.getElementById('trfWResult').value = '';
    document.getElementById('trfIsSpecResult').value = '';
    hideMessages();
}

// Funções para cálculo de Determinantes de Matrizes
function calculateMatrix2x2Determinant() {
    const a11 = parseFloat(document.getElementById('m2_a11').value);
    const a12 = parseFloat(document.getElementById('m2_a12').value);
    const a21 = parseFloat(document.getElementById('m2_a21').value);
    const a22 = parseFloat(document.getElementById('m2_a22').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22)) {
        showError(t('error-invalid-matrix'));
        return;
    }

    // Fórmula: det = (a11 × a22) - (a12 × a21)
    const determinant = (a11 * a22) - (a12 * a21);

    document.getElementById('matrix2x2Result').value = determinant.toFixed(6);
    showSuccess(t('success-matrix-2x2'));
}

function clearMatrix2x2() {
    document.getElementById('m2_a11').value = '';
    document.getElementById('m2_a12').value = '';
    document.getElementById('m2_a21').value = '';
    document.getElementById('m2_a22').value = '';
    document.getElementById('matrix2x2Result').value = '';
    hideMessages();
}

function calculateMatrix3x3Determinant() {
    const a11 = parseFloat(document.getElementById('m3_a11').value);
    const a12 = parseFloat(document.getElementById('m3_a12').value);
    const a13 = parseFloat(document.getElementById('m3_a13').value);
    const a21 = parseFloat(document.getElementById('m3_a21').value);
    const a22 = parseFloat(document.getElementById('m3_a22').value);
    const a23 = parseFloat(document.getElementById('m3_a23').value);
    const a31 = parseFloat(document.getElementById('m3_a31').value);
    const a32 = parseFloat(document.getElementById('m3_a32').value);
    const a33 = parseFloat(document.getElementById('m3_a33').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a13) || isNaN(a21) || isNaN(a22) || 
        isNaN(a23) || isNaN(a31) || isNaN(a32) || isNaN(a33)) {
        showError(t('error-invalid-matrix'));
        return;
    }

    // Fórmula usando regra de Sarrus: 
    // det = a11(a22*a33 - a23*a32) - a12(a21*a33 - a23*a31) + a13(a21*a32 - a22*a31)
    const determinant = (a11 * (a22 * a33 - a23 * a32)) - 
                        (a12 * (a21 * a33 - a23 * a31)) + 
                        (a13 * (a21 * a32 - a22 * a31));

    document.getElementById('matrix3x3Result').value = determinant.toFixed(6);
    showSuccess(t('success-matrix-3x3'));
}

function clearMatrix3x3() {
    document.getElementById('m3_a11').value = '';
    document.getElementById('m3_a12').value = '';
    document.getElementById('m3_a13').value = '';
    document.getElementById('m3_a21').value = '';
    document.getElementById('m3_a22').value = '';
    document.getElementById('m3_a23').value = '';
    document.getElementById('m3_a31').value = '';
    document.getElementById('m3_a32').value = '';
    document.getElementById('m3_a33').value = '';
    document.getElementById('matrix3x3Result').value = '';
    hideMessages();
}

// Função auxiliar para calcular determinante de matriz 3x3 (usada pela matriz 4x4)
function calculateDeterminant3x3(matrix) {
    // matrix é um array de 9 elementos em ordem de leitura: [m11, m12, m13, m21, m22, m23, m31, m32, m33]
    const m11 = matrix[0], m12 = matrix[1], m13 = matrix[2];
    const m21 = matrix[3], m22 = matrix[4], m23 = matrix[5];
    const m31 = matrix[6], m32 = matrix[7], m33 = matrix[8];

    // Usando regra de Sarrus
    return (m11 * (m22 * m33 - m23 * m32)) - 
           (m12 * (m21 * m33 - m23 * m31)) + 
           (m13 * (m21 * m32 - m22 * m31));
}

function calculateMatrix4x4Determinant() {
    const matrixValues = [];
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            const value = parseFloat(document.getElementById(`m4_a${i}${j}`).value);
            if (isNaN(value)) {
                showError(t('error-invalid-matrix'));
                return;
            }
            matrixValues.push(value);
        }
    }

    // Expand along first row
    // det = a11*M11 - a12*M12 + a13*M13 - a14*M14
    const a11 = matrixValues[0], a12 = matrixValues[1], a13 = matrixValues[2], a14 = matrixValues[3];
    const a21 = matrixValues[4], a22 = matrixValues[5], a23 = matrixValues[6], a24 = matrixValues[7];
    const a31 = matrixValues[8], a32 = matrixValues[9], a33 = matrixValues[10], a34 = matrixValues[11];
    const a41 = matrixValues[12], a42 = matrixValues[13], a43 = matrixValues[14], a44 = matrixValues[15];

    // Calcular M11 (removendo linha 1 e coluna 1)
    let M11 = calculateDeterminant3x3([
        a22, a23, a24,
        a32, a33, a34,
        a42, a43, a44
    ]);

    // Calcular M12 (removendo linha 1 e coluna 2)
    let M12 = calculateDeterminant3x3([
        a21, a23, a24,
        a31, a33, a34,
        a41, a43, a44
    ]);

    // Calcular M13 (removendo linha 1 e coluna 3)
    let M13 = calculateDeterminant3x3([
        a21, a22, a24,
        a31, a32, a34,
        a41, a42, a44
    ]);

    // Calcular M14 (removendo linha 1 e coluna 4)
    let M14 = calculateDeterminant3x3([
        a21, a22, a23,
        a31, a32, a33,
        a41, a42, a43
    ]);

    // Determinar o determinante usando expansão de cofatores
    const determinant = (a11 * M11) - (a12 * M12) + (a13 * M13) - (a14 * M14);

    document.getElementById('matrix4x4Result').value = determinant.toFixed(6);
    showSuccess(t('success-matrix-4x4'));
}

function clearMatrix4x4() {
    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            document.getElementById(`m4_a${i}${j}`).value = '';
        }
    }
    document.getElementById('matrix4x4Result').value = '';
    hideMessages();
}

// Funções de Conversão Digital
function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value.trim();

    if (!binaryInput) {
        showError(t('error-invalid-binary'));
        return;
    }

    // Validar se é um número binário válido
    if (!/^[01]+$/.test(binaryInput)) {
        showError(t('error-invalid-binary'));
        return;
    }

    // Verificar limite de 32 bits
    if (binaryInput.length > 32) {
        showError(t('error-binary-too-large'));
        return;
    }

    // Converter para decimal
    const decimal = parseInt(binaryInput, 2);

    document.getElementById('binaryToDecimalResult').value = decimal.toString();
    showSuccess(t('success-binary-to-decimal'));
}

function clearBinaryToDecimal() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('binaryToDecimalResult').value = '';
    hideMessages();
}

function convertDecimalToBinary() {
    const decimal = parseInt(document.getElementById('decimalToBinaryInput').value);

    if (isNaN(decimal)) {
        showError(t('error-invalid-decimal'));
        return;
    }

    if (decimal < 0 || decimal > 4294967295) { // 2^32 - 1
        showError(t('error-decimal-out-of-range'));
        return;
    }

    // Converter para binário e preencher com zeros até 32 bits
    let binary = decimal.toString(2);
    binary = binary.padStart(32, '0');

    document.getElementById('decimalToBinaryResult').value = binary;
    showSuccess(t('success-decimal-to-binary'));
}

function clearDecimalToBinary() {
    document.getElementById('decimalToBinaryInput').value = '';
    document.getElementById('decimalToBinaryResult').value = '';
    hideMessages();
}

function convertHexadecimalToDecimal() {
    const hexInput = document.getElementById('hexadecimalInput').value.trim();

    if (!hexInput) {
        showError(t('error-invalid-hexadecimal'));
        return;
    }

    // Validar se é um número hexadecimal válido
    if (!/^[0-9A-Fa-f]+$/.test(hexInput)) {
        showError(t('error-invalid-hexadecimal'));
        return;
    }

    // Verificar limite de 32 bits (8 dígitos hexadecimais)
    if (hexInput.length > 8) {
        showError(t('error-hex-too-large'));
        return;
    }

    // Converter para decimal
    const decimal = parseInt(hexInput, 16);

    document.getElementById('hexadecimalToDecimalResult').value = decimal.toString();
    showSuccess(t('success-hex-to-decimal'));
}

function clearHexadecimalToDecimal() {
    document.getElementById('hexadecimalInput').value = '';
    document.getElementById('hexadecimalToDecimalResult').value = '';
    hideMessages();
}

function convertDecimalToHexadecimal() {
    const decimal = parseInt(document.getElementById('decimalToHexInput').value);

    if (isNaN(decimal)) {
        showError(t('error-invalid-decimal'));
        return;
    }

    if (decimal < 0 || decimal > 4294967295) { // 2^32 - 1
        showError(t('error-decimal-out-of-range'));
        return;
    }

    // Converter para hexadecimal e preencher com zeros até 8 dígitos (32 bits)
    let hex = decimal.toString(16).toUpperCase();
    hex = hex.padStart(8, '0');

    document.getElementById('decimalToHexResult').value = hex;
    showSuccess(t('success-decimal-to-hex'));
}

function clearDecimalToHexadecimal() {
    document.getElementById('decimalToHexInput').value = '';
    document.getElementById('decimalToHexResult').value = '';
    hideMessages();
}

// Navegação entre páginas
function showPage(pageId) {
    // Esconder todas as páginas
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

    // Mostrar a página selecionada
    document.getElementById(pageId).classList.add('active');

    // Atualizar links de navegação
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');

    // Limpar mensagens
    hideMessages();

    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Funções para Circuito RLC Série
function calculateRLCSeriesResonance() {
    const R = parseFloat(document.getElementById('rlcSeriesR').value);
    const C = parseFloat(document.getElementById('rlcSeriesC').value);
    const L = parseFloat(document.getElementById('rlcSeriesL').value);

    if (isNaN(R) || isNaN(C) || isNaN(L) || R <= 0 || C <= 0 || L <= 0) {
        showError(t('error-invalid-rlc'));
        return;
    }

    // Cálculo da frequência de ressonância: FR = 0.159 / √(L*C)
    const Fr = 0.159 / Math.sqrt(L * C);

    document.getElementById('rlcSeriesFrResult').value = Fr.toFixed(6) + ' Hz';
    showSuccess(t('success-rlc-series'));
}

function clearRLCSeries() {
    document.getElementById('rlcSeriesR').value = '';
    document.getElementById('rlcSeriesC').value = '';
    document.getElementById('rlcSeriesL').value = '';
    document.getElementById('rlcSeriesFrResult').value = '';
    hideMessages();
}

// Funções para Circuito RLC Paralelo
function calculateRLCParallelResonance() {
    const R = parseFloat(document.getElementById('rlcParallelR').value);
    const C = parseFloat(document.getElementById('rlcParallelC').value);
    const L = parseFloat(document.getElementById('rlcParallelL').value);

    if (isNaN(R) || isNaN(C) || isNaN(L) || R <= 0 || C <= 0 || L <= 0) {
        showError(t('error-invalid-rlc'));
        return;
    }

    // Cálculo da frequência de ressonância RLC Paralelo Real
    // FR = (1/6.28) * √((1/(L*C)) - (R²/L²))
    const LC = L * C;
    const R2_L2 = (R * R) / (L * L);
    const insideSquareRoot = (1 / LC) - R2_L2;

    if (insideSquareRoot <= 0) {
        showError(t('error-rlc-parallel-invalid'));
        return;
    }

    const Fr = (1 / 6.28) * Math.sqrt(insideSquareRoot);

    document.getElementById('rlcParallelFrResult').value = Fr.toFixed(6) + ' Hz';
    showSuccess(t('success-rlc-parallel'));
}

function clearRLCParallel() {
    document.getElementById('rlcParallelR').value = '';
    document.getElementById('rlcParallelC').value = '';
    document.getElementById('rlcParallelL').value = '';
    document.getElementById('rlcParallelFrResult').value = '';
    hideMessages();
}

// Variável global para armazenar os dados de radiação solar
let solarData = [];

// Função para carregar o CSV de radiação solar
async function loadSolarRadiationData() {
    try {
        const response = await fetch('direct_normal_means_sedes-munic.csv');
        const csvText = await response.text();
        const lines = csvText.split('\n');
        const headers = lines[0].split(';');

        // Índices das colunas: D (3) = cidade, G (6) = radiação anual
        const cityIndex = 3; // NAME
        const radiationIndex = 6; // ANNUAL

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.length > 0) {
                const columns = line.split(';');
                if (columns.length > Math.max(cityIndex, radiationIndex)) {
                    solarData.push({
                        city: columns[cityIndex],
                        radiation: parseFloat(columns[radiationIndex])
                    });
                }
            }
        }

        // Popular dropdown de cidades
        const citySelect = document.getElementById('installationCity');
        const uniqueCities = [...new Set(solarData.map(d => d.city))].sort();
        uniqueCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });

        console.log('Dados de radiação solar carregados:', solarData.length, 'registros');
    } catch (error) {
        console.error('Erro ao carregar dados de radiação solar:', error);
    }
}

// Função para calcular painéis solares
function calculateSolarPanels() {
    const Pm = parseFloat(document.getElementById('panelMaxPower').value);
    const Im = parseFloat(document.getElementById('panelMaxCurrent').value);
    const city = document.getElementById('installationCity').value;
    const Pc = parseFloat(document.getElementById('loadPower').value);

    // Validar entradas
    if (isNaN(Pm) || Pm <= 0) {
        showError(t('error-invalid-panel-power'));
        return;
    }
    if (isNaN(Im) || Im <= 0) {
        showError(t('error-invalid-panel-current'));
        return;
    }
    if (!city) {
        showError(t('error-invalid-city'));
        return;
    }
    if (isNaN(Pc) || Pc <= 0) {
        showError(t('error-invalid-load-power'));
        return;
    }

    // Procurar pela radiação solar da cidade
    const cityData = solarData.find(d => d.city === city);
    if (!cityData) {
        showError(t('error-invalid-city'));
        return;
    }

    const radiation = cityData.radiation;

    // Calcular Potência Fornecida: Pf = (Pm * radiation) / 1000
    const Pf = (Pm * radiation) / 1000;

    // Calcular Corrente Fornecida: If = (Im * radiation) / 1000
    const If = (Im * radiation) / 1000;

    // Calcular Quantidade de Painéis: Qp = Pc / Pf
    const Qp = Pc / Pf;

    // Exibir resultados
    document.getElementById('solarPanelPowerResult').value = Pf.toFixed(6) + ' Wh/dia';
    document.getElementById('solarPanelCurrentResult').value = If.toFixed(6) + ' Ah/dia';
    document.getElementById('solarPanelQuantityResult').value = Math.ceil(Qp) + ' painéis';
    document.getElementById('solarRadiationValue').value = radiation.toFixed(6) + ' kWh/m²/dia';

    showSuccess(t('success-solar-panels'));
}

// Função para limpar campos de painéis solares
function clearSolarPanels() {
    document.getElementById('panelMaxPower').value = '';
    document.getElementById('panelMaxCurrent').value = '';
    document.getElementById('installationCity').value = '';
    document.getElementById('loadPower').value = '';
    document.getElementById('solarPanelPowerResult').value = '';
    document.getElementById('solarPanelCurrentResult').value = '';
    document.getElementById('solarPanelQuantityResult').value = '';
    document.getElementById('solarRadiationValue').value = '';
    hideMessages();
}

// Funções para cálculo de Consumo de Energia Elétrica
function initializeEnergyConsumptionInputs() {
    const powerContainer = document.getElementById('powerInputs');
    const timeContainer = document.getElementById('timeInputs');
    
    // Limpar containers
    powerContainer.innerHTML = '';
    timeContainer.innerHTML = '';
    
    // Criar 10 pares de campos (Potência e Tempo)
    for (let i = 1; i <= 10; i++) {
        // Campo de Potência
        const powerField = document.createElement('div');
        powerField.className = 'form-field';
        powerField.innerHTML = `
            <label for="power${i}">PN${i} (W)</label>
            <input type="number" id="power${i}" placeholder="0" step="0.001">
        `;
        powerContainer.appendChild(powerField);
        
        // Campo de Tempo
        const timeField = document.createElement('div');
        timeField.className = 'form-field';
        timeField.innerHTML = `
            <label for="time${i}">TO${i} (h/dia)</label>
            <input type="number" id="time${i}" placeholder="0" step="0.001">
        `;
        timeContainer.appendChild(timeField);
    }
}

function calculateEnergyConsumption() {
    let totalConsumption = 0;
    let count = 0;
    
    // Calcular soma de (PN * TO) para os 10 equipamentos
    for (let i = 1; i <= 10; i++) {
        const power = parseFloat(document.getElementById(`power${i}`).value);
        const time = parseFloat(document.getElementById(`time${i}`).value);
        
        if (!isNaN(power) && !isNaN(time) && power >= 0 && time >= 0) {
            totalConsumption += power * time;
            if (power > 0 && time > 0) {
                count++;
            }
        }
    }
    
    // Obter tarifa
    const tariff = parseFloat(document.getElementById('energyTariff').value);
    
    if (isNaN(tariff) || tariff <= 0) {
        showError(t('error-invalid-energy-tariff'));
        return;
    }
    
    // Calcular consumo mensal: CT = [(PN1*TO1 + ... + PN10*TO10) * 30] / 1000
    const monthlyConsumption = (totalConsumption * 30) / 1000;
    
    // Calcular valor a pagar: VP = CT * Tarifa
    const paymentValue = monthlyConsumption * tariff;
    
    // Exibir resultados
    document.getElementById('energyConsumptionResult').value = monthlyConsumption.toFixed(2) + ' KWh/mês';
    document.getElementById('energyPaymentResult').value = 'R$ ' + paymentValue.toFixed(2);
    
    showSuccess(t('success-energy-consumption'));
}

function clearEnergyConsumption() {
    // Limpar todos os campos
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`power${i}`).value = '';
        document.getElementById(`time${i}`).value = '';
    }
    document.getElementById('energyTariff').value = '';
    document.getElementById('energyConsumptionResult').value = '';
    document.getElementById('energyPaymentResult').value = '';
    hideMessages();
}

// Inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar a primeira página por padrão
    document.getElementById('home').classList.add('active');
    document.querySelector('nav a').classList.add('active');
    
    // Inicializar campos de consumo de energia
    initializeEnergyConsumptionInputs();
    
    // Carregar dados de radiação solar
    loadSolarRadiationData();
});
