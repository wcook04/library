<header class="front">

# Discovering formally verified quantum programs with AI

<ul class="authors">
<li>Sergey Shirobokov</li>
<li>Ben Jaderberg</li>
<li>Katerina Hristova</li>
<li>George Tsoukalas</li>
<li>Johannes Bausch</li>
<li>Eric Wieser</li>
<li>Francisco J.H. Heras</li>
<li>Nicholas C. Rubin</li>
<li>Guang Hao Low</li>
<li>Sébastien Racanière</li>
<li>Nenad Tomašev</li>
<li>Lei M. Zhang</li>
<li>James D. Watson</li>
<li>Tanuj Khattar</li>
<li>Aws Albarghouthi</li>
<li>Stavan Jain</li>
<li>Harun Khan</li>
<li>Leopoldo Sarra</li>
<li>Andrew W. Senior</li>
<li>Michael Broughton</li>
<li>Hussain Masoom</li>
<li>Sergio Boixo</li>
<li>Ryan Babbush</li>
<li>Swarat Chaudhuri</li>
<li>Pushmeet Kohli</li>
</ul>

</header>

<a id="abstract1"></a>

## Abstract

<section class="abstract">

The timeline by which quantum computers can solve breakthrough problems in science depends on improved quantum algorithms as much as on better hardware \[[152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>), [153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>)\]. Such algorithmic advances are typically achieved through many years of expert human collaboration \[[154](<https://arxiv.org/html/2611.09822v3#biba.bibx3>), [155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\]. In mathematics and computer science, large language models have accelerated progress through automated discovery loops \[[156](<https://arxiv.org/html/2611.09822v3#biba.bibx5>), [157](<https://arxiv.org/html/2611.09822v3#biba.bibx6>)\]. However, quantum algorithms can only be evaluated by classical computers on restricted or small instances \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>), [159](<https://arxiv.org/html/2611.09822v3#biba.bibx8>)\]. Here we demonstrate automated discovery of quantum programs beyond these regimes including order-of-magnitude improvements on scientific applications. To achieve this, we build a quantum program library in the Lean theorem prover in which Gemini 4 agents synthesize novel programs against formal problem specifications and verify their correctness and cost. Agent teams collaborate, sharing results and knowledge through wikis and discussing ideas at organized conferences. Our results improve on prior baselines for parallel search \[[160](<https://arxiv.org/html/2611.09822v3#biba.bibx9>)\] (up to $2.57\times$), quantum arithmetic \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\] ($290\times$), and simulations relevant to fusion, photochemistry and drug-metabolism by $12\times$, $8\times$ and $2.5\times$ respectively. Combining human and artificial intelligence at scale, under the rigor of mathematical proof, lets researchers design algorithms that today’s classical and quantum computers cannot test, shortening the path to practical quantum computation.

</section>

![Figure 1](figures/S0.F1.png)

Figure 1: Formally verified multi-agent quantum program discovery. a) Researchers write a Lean quantum Hoare logic specification of correctness and cost, then launch their agent team, which iterates on error feedback from the Lean kernel. Teams publish independently re-verified solutions, partial results and dead ends to a shared wiki, and exchange ideas and critiques in scheduled conferences. b) Bars indicate which problem each approach can reach. AI search checked by numerical tests can only produce solutions that can be simulated classically (dashed line), which for $\arcsin$ means a restricted gate set \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>)\].

Quantum computers promise to tackle problems beyond classical reach across cryptanalysis \[[162](<https://arxiv.org/html/2611.09822v3#biba.bibx11>)\], optimization \[[163](<https://arxiv.org/html/2611.09822v3#biba.bibx12>)\], chemistry and drug discovery \[[164](<https://arxiv.org/html/2611.09822v3#biba.bibx13>), [165](<https://arxiv.org/html/2611.09822v3#biba.bibx14>), [166](<https://arxiv.org/html/2611.09822v3#biba.bibx15>)\], materials science \[[167](<https://arxiv.org/html/2611.09822v3#biba.bibx16>), [168](<https://arxiv.org/html/2611.09822v3#biba.bibx17>)\], and high-energy and plasma physics \[[169](<https://arxiv.org/html/2611.09822v3#biba.bibx18>), [170](<https://arxiv.org/html/2611.09822v3#biba.bibx19>), [171](<https://arxiv.org/html/2611.09822v3#biba.bibx20>)\]. Many of the most promising applications are estimated to require a device with thousands of error-corrected (logical) qubits executing $10^{9}$ to $10^{15}$ logical operations \[[152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>), [172](<https://arxiv.org/html/2611.09822v3#biba.bibx21>)\], well beyond the roughly one million operations projected for early fault-tolerant processors \[[153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>)\]. Beyond improvements in hardware and quantum error correction to build better logical qubits from noisy physical qubits \[[173](<https://arxiv.org/html/2611.09822v3#biba.bibx22>)\], closing this gap relies on cumulative algorithmic resource reductions that lower qubit and gate counts \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>), [175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>), [176](<https://arxiv.org/html/2611.09822v3#biba.bibx25>), [177](<https://arxiv.org/html/2611.09822v3#biba.bibx26>), [178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>)\]. Historically, such reductions take sustained scientific effort over many years \[[154](<https://arxiv.org/html/2611.09822v3#biba.bibx3>), [155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\].

Artificial intelligence (AI) offers a promising route to accelerate these improvements. Traditional machine learning has already been successfully applied to e.g. quantum hardware control \[[179](<https://arxiv.org/html/2611.09822v3#biba.bibx28>), [180](<https://arxiv.org/html/2611.09822v3#biba.bibx29>), [181](<https://arxiv.org/html/2611.09822v3#biba.bibx30>)\], error-correction decoding \[[182](<https://arxiv.org/html/2611.09822v3#biba.bibx31>)\], and small-scale circuit synthesis \[[183](<https://arxiv.org/html/2611.09822v3#biba.bibx32>)\]. While large language models (LLMs) are rapidly advancing mathematics and classical algorithms via execution-based search and automated reasoning \[[184](<https://arxiv.org/html/2611.09822v3#biba.bibx33>), [185](<https://arxiv.org/html/2611.09822v3#biba.bibx34>), [186](<https://arxiv.org/html/2611.09822v3#biba.bibx35>), [156](<https://arxiv.org/html/2611.09822v3#biba.bibx5>), [187](<https://arxiv.org/html/2611.09822v3#biba.bibx36>), [188](<https://arxiv.org/html/2611.09822v3#biba.bibx37>), [189](<https://arxiv.org/html/2611.09822v3#biba.bibx38>), [190](<https://arxiv.org/html/2611.09822v3#biba.bibx39>)\] as well as formal theorem proving for fixed conjectures \[[157](<https://arxiv.org/html/2611.09822v3#biba.bibx6>), [191](<https://arxiv.org/html/2611.09822v3#biba.bibx40>)\], their application to quantum computing lags behind due to the challenge of verifying general correctness without fault-tolerant hardware to test on. High-throughput validation of LLM-generated quantum programs has thus been restricted to circuit regimes that can be classically simulated \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>), [159](<https://arxiv.org/html/2611.09822v3#biba.bibx8>)\], limiting the design space and scale of discovery (Fig. [1](<https://arxiv.org/html/2611.09822v3#S0.F1>)b), whereas concurrent LLM-assisted formalization has focused on verifying known algorithms (Appendix [A](<https://arxiv.org/html/2611.09822v3#A1>)). Bringing AI discovery to general quantum algorithms instead requires pairing formal models of quantum computation with mathematical proofs of correctness and cost, with access to tools such as numerical heuristics where they are effective. Formal reasoning is particularly critical when targeting asymptotic speedups and large-scale applications spanning thousands of qubits—just like scientists have reasoned about quantum algorithms over the past decades.

In this work, we introduce a Lean \[[192](<https://arxiv.org/html/2611.09822v3#biba.bibx41>)\] verification library based on quantum Hoare logic (QHL) \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\], engineer a multi-agent research workflow built around it, and prove new resource reductions across asymptotic algorithms and large-scale scientific simulations. Our library pairs a language for quantum programs and classical control flow with formal proofs of correctness and resource cost, chosen per specification. For fault-tolerant circuits we use the spacetime cost $Q\cdot\mathcal{T}$, the number $Q$ of qubits times the number $\mathcal{T}$ of $T$ gates, which are costly in error-corrected quantum computers \[[194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>)\]. Researchers launch heterogeneous teams of LLM agents that iterate on algorithms, and exchange concepts, partial results, and dead ends through a shared wiki and scheduled cross-team virtual conferences, while an independent verifier audits every proof against a frozen specification written in our library (Fig. [1](<https://arxiv.org/html/2611.09822v3#S0.F1>)a). Across five problems (Fig. [1](<https://arxiv.org/html/2611.09822v3#S0.F1>)b)—computing $\arcsin$, parallel Grover search, cytochrome P450 energy levels, fusion alpha-particle stopping power and non-Born–Oppenheimer molecular dynamics—this workflow discovers new programs and circuits with machine-checked proofs of correctness and cost, reducing resource costs by $290\times$ for $\arcsin$ (combining classical and formal search), and by up to $12\times$ for our scientific applications compared to the strongest prior baselines (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)). Together, these advances shift researchers effort from manual circuit design, optimization, and resource tracking to problem specification and scientific interpretation.

<a id="S1"></a>

## 1 Formally Verified Multi-Agent Discovery

<a id="S1.SS1"></a>

### 1.1 Formal Verification of Quantum Algorithms

<a id="block-S1.SS1-block-1"></a>

We implement our verification and resource-counting library \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\] in the Lean theorem prover \[[192](<https://arxiv.org/html/2611.09822v3#biba.bibx41>)\], building on Mathlib \[[196](<https://arxiv.org/html/2611.09822v3#biba.bibx45>)\] and Physlib’s Lean-QuantumInfo \[[197](<https://arxiv.org/html/2611.09822v3#biba.bibx46>), [198](<https://arxiv.org/html/2611.09822v3#biba.bibx47>)\]. These formalize core objects of quantum information, but reasoning about quantum programs also requires a programming language to express them and a program logic to prove them correct. Our library fills this gap by combining a classical-quantum programming language, a classical-quantum Hoare logic to reason about program correctness \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] and support for resource counting. Besides classical operations such as assignment, conditional branching and unbounded loops, the formalized language supports core quantum operations: unitary transformations, mid-program qubit measurement, and state reset. We include further details in Appendix [A](<https://arxiv.org/html/2611.09822v3#A1>).

<a id="block-S1.SS1-block-2"></a>

Correctness theorems are formulated as so-called Hoare triples of (precondition, program, postcondition), which state that all executions of a program starting in a state satisfying a specified precondition end in a state satisfying a chosen postcondition. Triples are proved backwards from the postcondition by computing the weakest preconditions for each step of the program \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]. Alongside correctness, our library proves bounds on both expected and worst-case resource costs across branches and loops, including $T$-gate count and number of qubits required to execute the algorithm. To pose a program discovery task, we write a problem specification as a Lean file (Fig. [2](<https://arxiv.org/html/2611.09822v3#S1.F2>)) that states the target correctness and cost theorems while leaving placeholders (sorry) to be filled in with a candidate program, its cost bound, and their proofs.

![Figure 2](figures/S1.F2.png)

Figure 2: Lean specifications for discovery tasks. An abridged specification for electronic stopping power in warm-dense hydrogen \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\], where the goal is to construct a quantum program that simulates time evolution under the system Hamiltonian $H$. The agents fill in each sorry statement, which is Lean’s placeholder for an unfilled definition or proof: the ancilla qubit count, the circuit and its claimed cost, and the proofs of the correctness and cost theorems. (1) The system qubits store the momentum of every quantum particle. (2) A unitary matrix $W$ on the system and ancilla qubits (extra qubits used to aid computation) must simulate time evolution $e^{-iH(c)t}$ for every physically allowed electron state, up to a specified error, and return the ancillas to $|0\rangle$. (3) The compiled program must act as $W$ on grid states whenever the ancillas start in $|0\rangle$. (4) The cost is a function of the logical spacetime volume $Q\cdot\mathcal{T}$ multiplied by the repeated runs of the stopping power routine: 50 repeats $\times$ 10 time steps $\times$ $Q\cdot\mathcal{T}$ (Sec. [2.3](<https://arxiv.org/html/2611.09822v3#S2.SS3>)).

<a id="S1.SS2"></a>

### 1.2 Multi-Agent Discovery Architecture

<a id="block-S1.SS2-block-1"></a>

To begin the search on a problem, researchers write the specification and launch independent teams of LLM agents with high-level optimization prompts rather than problem-specific ideas (Fig. [1](<https://arxiv.org/html/2611.09822v3#S0.F1>)a). The agent teams then explore candidate algorithms and prove their correctness and cost against the independent verifier. Each researcher chooses their own team setup, from a single agent iterating on a candidate to hierarchical teams targeting individual subroutines, using tools such as analytical derivations, simulation, and numerical optimization (Appendix [C](<https://arxiv.org/html/2611.09822v3#A3>)). Unlike multi-agent science systems with a fixed architecture \[[200](<https://arxiv.org/html/2611.09822v3#biba.bibx49>), [201](<https://arxiv.org/html/2611.09822v3#biba.bibx50>), [202](<https://arxiv.org/html/2611.09822v3#biba.bibx51>), [203](<https://arxiv.org/html/2611.09822v3#biba.bibx52>)\] or single search loop \[[156](<https://arxiv.org/html/2611.09822v3#biba.bibx5>), [187](<https://arxiv.org/html/2611.09822v3#biba.bibx36>), [204](<https://arxiv.org/html/2611.09822v3#biba.bibx53>), [191](<https://arxiv.org/html/2611.09822v3#biba.bibx40>), [205](<https://arxiv.org/html/2611.09822v3#biba.bibx54>)\], we prescribe no internal team design and fix only the shared specification, verifier, and workflow. All large-scale experimental runs of autonomous discovery were performed using Gemini 4 Carbon models.

Agent teams can share progress through two channels. A wiki stores each problem’s best verified solution, reusable Lean lemmas, and reviewed notes on promising ideas and dead ends \[[206](<https://arxiv.org/html/2611.09822v3#biba.bibx55>)\]. Newly launched teams can start from the wiki’s best solution. Teams also meet in scheduled forum conferences to critique proposals and discuss unverified conjectures, which count as results only once verified.

Because agents can freely modify files in their workspace, they may exploit loopholes by weakening theorem statements, altering definitions, or adding axioms \[[207](<https://arxiv.org/html/2611.09822v3#biba.bibx56>)\]. To prevent this, an external verifier checks every submission against the frozen specification using the Lean Comparator \[[208](<https://arxiv.org/html/2611.09822v3#biba.bibx57>)\], confirming that all target theorems, underlying definitions, and allowed axioms are unchanged (Appendix [B](<https://arxiv.org/html/2611.09822v3#A2>)). Researchers thus review only the specification before a run and can trust that any found and verified solution is a valid algorithm.

<a id="S2"></a>

## 2 Results

![Figure 3](figures/S2.F3.png)

Figure 3: Summary of verified results. a) Quantum algorithm cost for baselines and solutions from this work across application domains. b) Logical-qubit and $T$-gate improvements on the three scientific applications, with feathered hardware horizons (dashed lines at geometric midpoints) for medium-term fault-tolerant quantum computing (FTQC†; teraquop planar architectures \[[212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>), [158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>)\]) and application-scale FTQC‡ (fault-tolerant application-scale quantum computers, FASQ \[[153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>), [152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>), [212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\]). Grey points denote published baselines, red points denote refined baselines incorporating subsequent methodological improvements from the literature, and blue points denote this work. For cytochrome P450, the published ground-state estimate is extended to all eigenstates within $0.1$ Ha of $E_{0}$, raising its cost by $0.85\%$. c) Cost for $25$-bit fixed-point $\arcsin$ ($\varepsilon\leq 1.25\times 10^{-7}$) against piecewise-polynomial evaluation \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\]. d) Speedup in expected number of rounds for large $N$ of our verified parallel Grover circuits over the strongest published baseline \[[213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>), [214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>), [215](<https://arxiv.org/html/2611.09822v3#biba.bibx64>), [216](<https://arxiv.org/html/2611.09822v3#biba.bibx65>), [217](<https://arxiv.org/html/2611.09822v3#biba.bibx66>)\] for powers of two $m,k\leq 2^{10}$ when finding any one or all of $k$ marked targets with $m$ parallel queries per round (dashed contours: $1.00\times$ boundary; $*$ markers: peak speedups of $1.22\times$ and $2.57\times$).

We demonstrate automated quantum program discovery on five applications (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)): parallel unstructured search (Sec. [2.1](<https://arxiv.org/html/2611.09822v3#S2.SS1>)), fault-tolerant arithmetic (Sec. [2.2](<https://arxiv.org/html/2611.09822v3#S2.SS2>)), and three physical and chemical simulations (Secs. [2.3](<https://arxiv.org/html/2611.09822v3#S2.SS3>)–[2.5](<https://arxiv.org/html/2611.09822v3#S2.SS5>)).

<a id="S2.SS1"></a>

### 2.1 Parallel Grover Search

<a id="block-S2.SS1-block-1"></a>

Unstructured search, the problem of finding one or all of $k$ marked items in a list of $N$ candidates, provided one of the earliest provable quantum advantages, with Grover’s algorithm achieving a quadratic speedup over classical search \[[160](<https://arxiv.org/html/2611.09822v3#biba.bibx9>)\]. Marked items are identified by an oracle subroutine assumed to dominate runtime, so cost is measured solely in oracle queries. Allowing up to $m$ parallel queries per round on a shared quantum register (rather than $m$ independent, uncoupled devices) \[[160](<https://arxiv.org/html/2611.09822v3#biba.bibx9>), [214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>)\], we require algorithms to succeed with certainty and score them by their expected oracle rounds for large $N$, evaluated at powers of two up to $1{,}024$ for both $m$ and $k$ (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)d). We compare against the strongest published protocol in each regime \[[213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>), [214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>), [215](<https://arxiv.org/html/2611.09822v3#biba.bibx64>), [216](<https://arxiv.org/html/2611.09822v3#biba.bibx65>), [217](<https://arxiv.org/html/2611.09822v3#biba.bibx66>)\], including Zalka’s partition combined with weakly measured search at $k=1$, evaluated under the same metric (Appendix [E](<https://arxiv.org/html/2611.09822v3#A5>)).

<a id="block-S2.SS1-block-2"></a>

Our Lean-verified circuits match this baseline on the $m=1$ and $k=1$ boundaries for finding a single element and outperform it at all multi-target parallel settings ($m,k\geq 2$), reducing expected rounds by up to $1.22\times$; for finding all elements, they outperform it at all multi-target settings ($k\geq 2$), by up to $2.57\times$. Part of this gain comes from combining published ideas via classical control, such as pairing domain partitioning or parallel restarts with weak measurements, which collapse coherence only partially at the price of only partial success information. The largest find-all gains come from a new coherent mechanism: instead of splitting the list into $m$ blocks with unknown target counts, the circuit holds a superposition over all sets of $m$ candidates, and each parallel query imprints a sign set by the parity of how many remaining targets a set contains. Between queries, a fixed, target-independent walk on the Johnson graph of these sets steers amplitude toward sets containing every remaining target, which a final query records at once (Appendix [E.3](<https://arxiv.org/html/2611.09822v3#A5.SS3>)).

<a id="S2.SS2"></a>

### 2.2 Fixed-Point arcsin

<a id="block-S2.SS2-block-1"></a>

Computing the function $\arcsin(y)$ on a quantum superposition of inputs is an important subroutine for loading numbers into a wavefunction, used in many algorithms including for solving linear systems of equations. We specifically consider the case where the input $y$ is represented by 25-classical bits, and the output must be accurate to an error $\leq 1.25\times 10^{-7}$ across the domain $y\in[-1,1]$. For this setting, the best-known published baseline implementation is a piecewise-polynomial construction \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\], which requires a spacetime cost exceeding $1.08\times 10^{8}$ for an error of $\sim 10^{-6}$.

<a id="block-S2.SS2-block-2"></a>

Unlike the other examples in this work, $\arcsin$ is known to have quantum implementations that can be efficiently simulated classically by using a restricted gate set called kickmix \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>)\]. Therefore, we run automated discovery in two steps. First, the agents only consider kickmix circuits, exploiting that solutions can be verified in a matter of seconds. This leads to fast improvements, overall reducing the spacetime cost to $4.15\times 10^{5}$ ($4{,}152$ $T$ gates on $100$ qubits). Subsequently, we use our formal verification library to lift the kickmix restriction and further optimize the algorithm, using a new quantum gate set that makes the solution hard to verify outside Lean. From this, the agents discover a solution in which a certain component, the coefficient lookup, can be implemented using $33\%$ fewer gates, leading to a further overall $11\%$ lower cost of $3.70\times 10^{5}$ ($3{,}698$ $T$ gates on $100$ qubits), $290\times$ below the baseline \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\].

<a id="S2.SS3"></a>

### 2.3 Stopping Power in Inertial-Confinement Fusion

![Figure 4](figures/S2.F4.png)

Figure 4: Where program improvements come from. a, d) Cost of verified solutions. Arrows mark where the mechanisms in the other panels were introduced. Interestingly, the drop at iteration 49 in a) is not present in the final solution. b) A quantum Fourier transform (QFT) moves the electrons onto a real-space grid and back. On the grid, the pair potential $v(r)$ is split into long-range (blue) and short-range (hatched) parts. The long-range part costs about 30 times less per pair than in the momentum basis (red dashed). For the short-range part, a subroutine bounds the interaction strength of configurations that violate the Pauli exclusion principle, further reducing its cost. c) Protons sit off the grid, so to apply an electron–proton interaction the circuit shifts all electrons to put the proton on a grid point, a phase set by the sum of all $218$ electron momenta. Keeping this sum in a $42$-qubit register between walk steps halves the summations per step. e) To apply the electrostatic interaction $Z_{i}Z_{j}/r_{ij}$, rather than swapping the coordinates of the interacting pair into fixed slots and back, a copy is loaded into ancilla qubits. This can be cleared cheaply by measurement without destroying the originals. f) From the loaded coordinates, $r_{ij}^{2}$ is calculated cheaply and rescaled within each interval to $\tilde{r}_{ij}^{2}\in[0,1)$. Through random sampling, one of four classically precomputed coefficients is chosen, with probabilities set by $\tilde{r}_{ij}^{2}$ (dot area). In expectation, this gives $1/r_{ij}$ as a Bernstein polynomial \[[218](<https://arxiv.org/html/2611.09822v3#biba.bibx67>)\], as shown for one value of $r_{ij}^{2}$ (shaded). g) Each nucleus has integer charge $Z_{n}\in\{1,6,7,8\}$. In the electron–nucleus attraction, rather than preparing these weights via alias sampling \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>)\], a uniform superposition is created and reversible logic assigns $Z_{n}$ of them to each nucleus. Applying a unit-charge interaction on every branch then gives each nucleus its full charge $Z_{n}$.

In inertial-confinement fusion, hydrogen fuel ignites only if the energetic $\alpha$ particles it produces deposit enough of their energy back into the fuel to sustain the reaction \[[219](<https://arxiv.org/html/2611.09822v3#biba.bibx68>), [220](<https://arxiv.org/html/2611.09822v3#biba.bibx69>)\]. Modeling this requires knowing the fuel’s stopping power, the rate at which it absorbs the kinetic energy of an $\alpha$ particle passing through it. No classical method for these dynamics is both efficient and systematically improvable \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>), [221](<https://arxiv.org/html/2611.09822v3#biba.bibx70>), [222](<https://arxiv.org/html/2611.09822v3#biba.bibx71>), [223](<https://arxiv.org/html/2611.09822v3#biba.bibx72>), [224](<https://arxiv.org/html/2611.09822v3#biba.bibx73>)\].

<a id="block-S2.SS3-block-3"></a>

We consider an $\alpha$ particle and $218$ electrons moving among $216$ fixed protons. A candidate circuit must simulate the time evolution of the system $e^{-iHt}$ with error $\varepsilon=10^{-2}$ on every state antisymmetric under exchange of same-spin electrons. The full stopping-power calculation repeats this evolution $500$ times.

<a id="block-S2.SS3-block-4"></a>

Our baseline is constructed from Ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\]: we take the $5{,}650$ logical qubits and parameters in its Table 2 and evaluate its equation (12), giving a spacetime cost of $5.42\times 10^{15}$ per run, averaged over the $500$ runs (Appendix [G](<https://arxiv.org/html/2611.09822v3#A7>)). This builds $e^{-iHt}$ from a sequence of walk steps, each encoding $H/\lambda$, where $\lambda$ is the sum of the absolute weights when $H$ is written as a linear combination of unitaries (LCU). The number of walk steps \[[176](<https://arxiv.org/html/2611.09822v3#biba.bibx25>)\] scales as $\lambda t$.

<a id="block-S2.SS3-block-5"></a>

Running our discovery workflow, we find a solution with $4{,}338$ logical qubits and $11.8\times$ lower spacetime cost (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)a). To understand the main improvement, we note that over $90\%$ of the baseline’s $\lambda$ comes from electron–proton and electron–electron interactions, and that $\lambda$ must account for every state the qubits can be in, including unphysical ones. Our main innovation is to quantum Fourier transform all electrons to a real-space grid to apply these interactions (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)b). Importantly, in real space the solution can exploit Pauli exclusion, which allows at most two opposite spin electrons on any grid point. For the short-range part of the potential, a subroutine kicks back a phase of $i$ in one LCU branch and $-i$ in the other for each electron on a nearby grid point. The branches interfere to apply the correct interaction, up to a constant, for two or fewer electrons, while keeping it no larger for three or more, so these grid points no longer set $\lambda$. In the final circuit, this cuts the walk steps by $12.8\times$, at $1.42\times$ the $T$ gates per step.

<a id="block-S2.SS3-block-6"></a>

The largest other improvement comes from keeping the total electron momentum, needed to apply the electron–proton interaction, in a $42$-qubit register between walk steps. This halves how often it is recomputed and cuts the $T$ gates per step by $10\%$ (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)c). More details are given in Appendix [G](<https://arxiv.org/html/2611.09822v3#A7>).

<a id="S2.SS4"></a>

### 2.4 Non-Born–Oppenheimer Dynamics of C₂₃H₂₀N₃O

Light-driven chemical processes such as solar energy conversion \[[225](<https://arxiv.org/html/2611.09822v3#biba.bibx74>), [226](<https://arxiv.org/html/2611.09822v3#biba.bibx75>)\], photocatalysis \[[227](<https://arxiv.org/html/2611.09822v3#biba.bibx76>)\] and biological photoreception \[[228](<https://arxiv.org/html/2611.09822v3#biba.bibx77>)\] proceed through excited-state pathways where electronic and nuclear motion occur on comparable timescales. This invalidates the Born–Oppenheimer approximation \[[229](<https://arxiv.org/html/2611.09822v3#biba.bibx78>), [230](<https://arxiv.org/html/2611.09822v3#biba.bibx79>), [231](<https://arxiv.org/html/2611.09822v3#biba.bibx80>)\], meaning the nuclei must also be included in the quantum wavefunction. Methods that treat the nuclei classically struggle to simulate quantum tunneling and superpositions of electronic states \[[232](<https://arxiv.org/html/2611.09822v3#biba.bibx81>), [233](<https://arxiv.org/html/2611.09822v3#biba.bibx82>)\], while exact classical simulation scales exponentially with system size \[[229](<https://arxiv.org/html/2611.09822v3#biba.bibx78>), [165](<https://arxiv.org/html/2611.09822v3#biba.bibx14>)\].

<a id="block-S2.SS4-block-2"></a>

Following Reaction 5 of Ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], we simulate time evolution of $\mathrm{C_{23}H_{20}N_{3}O}$, modeled on molecules proposed for photo-activated, proton-coupled electron transfer \[[234](<https://arxiv.org/html/2611.09822v3#biba.bibx83>), [226](<https://arxiv.org/html/2611.09822v3#biba.bibx75>)\]. Unlike the fixed protons of Sec. [2.3](<https://arxiv.org/html/2611.09822v3#S2.SS3>), all $47$ nuclei are treated quantum mechanically alongside the $187$ electrons ($5{,}616$ system qubits). Here a candidate circuit must implement time evolution $e^{-iHt}$ for $t=1$ fs, to within error $\varepsilon=10^{-2}$, for every initial state.

<a id="block-S2.SS4-block-3"></a>

Improving the published estimate \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\] by the authors’ subsequent work \[[210](<https://arxiv.org/html/2611.09822v3#biba.bibx59>)\] gives a baseline cost of $4.98\times 10^{15}$ $Q\cdot\mathcal{T}$ (Appendix [H](<https://arxiv.org/html/2611.09822v3#A8>)). In this work we find a solution that costs only $6.06\times 10^{14}$ $Q\cdot\mathcal{T}$, a reduction of $8.22\times$ (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)d).

Within each walk step, three changes lead to the most significant improvements. First, rather than swapping interacting particles into fixed sets of qubits and back \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], our solution loads their coordinates into ancilla qubits, which can be cleared by cheap measurement \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>), [178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>)\] (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e). Second, instead of evaluating $1/r$ with a multiplication step \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], we obtain $1/r$ in expectation from a piecewise Bernstein polynomial in $r^{2}$ \[[218](<https://arxiv.org/html/2611.09822v3#biba.bibx67>)\], using only comparisons and a table lookup (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)f). Finally, a nucleus of charge $Z_{n}$ attracts an electron just as $Z_{n}$ unit charges at the same point would. The solution exploits this by creating an equal superposition and assigning $Z_{n}$ of the branches to each nucleus via classical Boolean logic \[[178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>)\], rather than preparing unequal weights by alias sampling \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>), [209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\] (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)g). More details are given in Appendix [H](<https://arxiv.org/html/2611.09822v3#A8>).

<a id="S2.SS5"></a>

### 2.5 Cytochrome P450 Compound I

Cytochrome P450 enzymes break down most human medicines, so understanding how they react with a drug candidate helps predict how quickly the drug is cleared from the body and whether it produces toxic byproducts \[[235](<https://arxiv.org/html/2611.09822v3#biba.bibx84>), [236](<https://arxiv.org/html/2611.09822v3#biba.bibx85>), [237](<https://arxiv.org/html/2611.09822v3#biba.bibx86>)\]. These reactions are driven by a short-lived intermediate of the enzyme, Compound I, whose reactivity depends on several closely-spaced spin states. Approximate classical methods such as density functional theory disagree on the energy ordering of these states \[[238](<https://arxiv.org/html/2611.09822v3#biba.bibx87>)\], making it a central target for quantum phase estimation, a quantum algorithm to obtain eigenstate energies \[[154](<https://arxiv.org/html/2611.09822v3#biba.bibx3>), [239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>)\].

<a id="block-S2.SS5-block-2"></a>

We consider a model of Compound I with 63 electrons in 58 orbitals (active space $X$ \[[239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>)\]) with the fixed double-factorized tensor-hypercontraction (DFTHC) Hamiltonian \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]. For every eigenstate within $\Delta=0.1$ Ha of the ground state, the circuit must estimate the energy with root-mean-square error at most $\varepsilon=1$ mHa, including all approximation errors.

<a id="block-S2.SS5-block-3"></a>

For this problem, the best published spacetime cost is $2.26\times 10^{12}$ \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]. To be conservative, we further integrate recent compilation improvements \[[240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>), [212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\], which roughly halve the cost. Finally, since the published estimate is for the ground-state energy only, we adjust it for our task of predicting all energies within $\Delta$ of the ground state, giving a cumulative baseline of $1.09\times 10^{12}$ on $481$ logical qubits (Appendix [I](<https://arxiv.org/html/2611.09822v3#A9>)).

<a id="block-S2.SS5-block-4"></a>

For this problem, we find a solution that achieves a spacetime cost of $4.37\times 10^{11}$, a reduction of $2.49\times$. To understand the main improvement, consider the baseline. To apply a Hamiltonian term, each walk step performs $57$ rotations in orbital space, to define new coordinates in which the term acts on one orbital \[[155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\]. The chosen term is stored as a binary number, which is used to read the rotation angles needed into a $247$-qubit register from a quantum read-only memory \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>)\]. Our circuit instead gives each term its own qubit, and sets only the qubit of the chosen term to $1$ (a one-hot register). Each angle can then be read from these qubits with only cheap (Clifford) gates once the register is built, with no table lookup. Prior work \[[240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>)\] found this narrowly worse than the baseline because it needs more qubits, and suggested mixing one-hot and binary encodings. Our solution uses this both to look up the term weights and to supply the rotation angles, accounting for over $95\%$ of the $T$-gate saving per step and most of the qubit saving. More details are given in Appendix [I](<https://arxiv.org/html/2611.09822v3#A9>).

<a id="S2.SS6"></a>

### 2.6 Collaboration Across Agent Teams

![Figure 5](figures/S2.F5.png)

Figure 5: Cross-team collaboration and idea lineage. a) Lineage of verified circuits for non-Born–Oppenheimer dynamics across Teams 1–3 (of seven participating teams) from the baseline (seed) to the final circuit (star), with the $Q\cdot\mathcal{T}$ reduction of each step. Within-team discoveries enter from below; cross-team conference and wiki ideas enter from above. b) Share of the logarithmic $Q\cdot\mathcal{T}$ reduction from within-team ideas, cross-team wiki entries, and conference exchanges once both channels were active on each scientific application, with reduction factors over this window shown at right and the unweighted average at bottom. c) Cross-team evolution of one stopping-power idea across wiki records #1–#5 and conference critiques, narrowing the shared ancilla register from $288$ to $231$ qubits; later records narrowed it further to $210$ qubits.

We now discuss the dynamics of the agentic runs to better understand the role of multiple agent teams in search. Our best solutions emerged from collaboration across teams rather than any single team working alone. In non-Born–Oppenheimer dynamics, for example, the leading record changed teams eight times after Team 1’s initial run, and the final circuit combines techniques from three agent teams, superseding intermediate improvements from other teams (Figs. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e–g, [5](<https://arxiv.org/html/2611.09822v3#S2.F5>)a). Whereas the wiki transferred verified code, conferences exchanged unverified proposals and critique: the largest single drop ($-34\%$) began as a Team 1 conference proposal that Team 2 refined and proved (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e), and a second key improvement grew from a similar exchange (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)f).

<a id="block-S2.SS6-block-3"></a>

Such cross-team contributions were sustained across all three scientific applications. To estimate each channel’s share once both were active, we classify every verified gain by where its new idea originated (Fig. [5](<https://arxiv.org/html/2611.09822v3#S2.F5>)b). Averaged across the three scientific applications, $61\%$ of the total cost reduction came from within-team ideas, $15\%$ from cross-team wiki entries or Lean files, and $24\%$ from conferences. The cross-team share ranges from $13\%$ in stopping power to $63\%$ in cytochrome P450. Credit is often hard to separate cleanly, as one proof often combines ideas from a team’s own search, the wiki, and conferences.

Figure [5](<https://arxiv.org/html/2611.09822v3#S2.F5>)c traces one such cross-team exchange in stopping power, where Teams 2 and 3 refined a shared ancilla register across five successive wiki records with conference input from Team 1, narrowing it from $288$ to $231$ qubits; later records narrowed it further to $210$ qubits. Beyond complete proofs, dead-end notes and partial proofs also transferred across teams: a note proving why a proposed shortcut fails stopped two proposals from other teams, while helper Lean modules proved by one team were imported by a second and reused in a third team’s stopping-power circuit.

Machine-checked verification is also what makes open collaboration safe at this scale, letting teams build on one another’s Lean proofs without manual code review. Flawed candidates and claims fell into two categories (Appendix [B](<https://arxiv.org/html/2611.09822v3#A2>)): broken proofs or inaccurate script-based estimates (such as candidates that bypassed local Lean checks), which our external verifier and conference critique filtered out, and loopholes in the specifications themselves (such as exploiting how Toffoli gates were counted without improving the circuit), which researchers and teams closed by revising the specification.

<a id="S3"></a>

## 3 Discussion and Outlook

In this work, we show that combining formal verification with LLM agents can push the frontier of quantum algorithm development. We demonstrate this across fundamental algorithms, fault-tolerant subroutines and full-scale scientific applications, achieving up to a $2.57\times$ reduction in expected oracle rounds for parallel Grover search, a $290\times$ spacetime reduction for fixed-point $\arcsin$, and $11.8\times$, $8.22\times$ and $2.49\times$ reductions on simulations relevant to fusion, photochemistry and drug metabolism. Where classical simulation can check candidate circuits, as with $\arcsin$, numerical testing with formal proving on top is effective. For asymptotic bounds and general algorithms on hundreds or thousands of qubits, formal proof is essential.

Beyond these results, our experiments point to a new research workflow. Rather than replacing human researchers, formal AI discovery shifts where human effort is applied. Researchers and domain experts choose the problems and carefully prepare faithful formal specifications. External verification then lets independent agent teams build on one another’s work without manual review, and carry out the search and formal proofs that drive down costs. Finally, researchers interpret the verified solutions to guide future research directions.

<a id="block-S3-block-3"></a>

Our end-to-end simulations still demand far more resources than projected for the first fault-tolerant quantum computers \[[153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>)\] (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b; Appendix [D](<https://arxiv.org/html/2611.09822v3#A4>)), and reaching early hardware will require further orders-of-magnitude improvements. Part of the challenge is for us to choose specifications well, as agents cannot optimize beyond them. For example, to match the baseline, our non-Born–Oppenheimer dynamics specification requires correctness on all input states, even unphysical ones that break exchange symmetry. Similarly, fixing the factorization in cytochrome P450 excludes the representation advances behind recent gains \[[155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>), [239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>), [211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\].

Bringing algorithms onto real hardware also means extending formal specifications to error-correcting codes, qubit routing and physical layout \[[194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>), [212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\], so human–agent teams can optimize algorithms for a given code or co-design both. Furthermore, qubits are expected to be a more limited resource than gates for early machines, suggesting optimizing each factor unequally \[[241](<https://arxiv.org/html/2611.09822v3#biba.bibx90>)\]. Other hardware designs, where $T$ gates can run in parallel, may instead favor minimizing qubits times $T$ depth \[[194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>)\]. Formalizing these architectural constraints allows us to optimize algorithms and fault-tolerant layouts together before large-scale quantum processors exist. Over time, collaborative proof search can thus turn what were once isolated, multi-year derivations into cumulative resource reductions, closing the gap to useful quantum computation from above while physical hardware scales from below.

<a id="Sx1"></a>

## Code availability

Our Lean library, together with the problem specifications and verified solutions discussed in this manuscript, is available at [https://github.com/google-deepmind/formal-quantum-computation](<https://github.com/google-deepmind/formal-quantum-computation>) \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\].

<a id="bib"></a>

## References

<a id="bib.bibx1"></a>

\[1\] Michael. Beverland et al. “Assessing requirements to scale to practical quantum advantage”, 2022 DOI: [10.48550/arXiv.2211.07629](<https://dx.doi.org/10.48550/arXiv.2211.07629>)

<a id="bib.bibx2"></a>

\[2\] John Preskill “Beyond NISQ: The Megaquop Machine” In ACM Transactions on Quantum Computing 6.3, 2025, pp. 1–7 DOI: [10.1145/3723153](<https://dx.doi.org/10.1145/3723153>)

<a id="bib.bibx3"></a>

\[3\] Markus Reiher, Nathan Wiebe, Krysta. Svore, Dave Wecker and Matthias Troyer “Elucidating reaction mechanisms on quantum computers” In Proceedings of the National Academy of Sciences 114.29, 2017, pp. 7555–7560 DOI: [10.1073/pnas.1619152114](<https://dx.doi.org/10.1073/pnas.1619152114>)

<a id="bib.bibx4"></a>

\[4\] Joonho Lee et al. “Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction” In PRX Quantum 2, 2021, pp. 030305 DOI: [10.1103/PRXQuantum.2.030305](<https://dx.doi.org/10.1103/PRXQuantum.2.030305>)

<a id="bib.bibx5"></a>

\[5\] Alexander Novikov et al. “AlphaEvolve: A coding agent for scientific and algorithmic discovery”, 2025 arXiv:[2506.13131 \[cs.AI\]](<https://arxiv.org/abs/2506.13131>)

<a id="bib.bibx6"></a>

\[6\] Thomas Hubert et al. “Olympiad-level formal mathematical reasoning with reinforcement learning” In Nature 651.8106, 2026, pp. 607–613 DOI: [10.1038/s41586-025-09833-y](<https://dx.doi.org/10.1038/s41586-025-09833-y>)

<a id="bib.bibx7"></a>

\[7\] Ryan Babbush et al. “Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations” In PRX Quantum 7, 2026, pp. 031001 DOI: [10.1103/j3xf-bw18](<https://dx.doi.org/10.1103/j3xf-bw18>)

<a id="bib.bibx8"></a>

\[8\] Marcos Crichigno and Steve Flammia “Automating quantum circuit optimization with AI agents”, 2026 arXiv:[2610.31352 \[quant-ph\]](<https://arxiv.org/abs/2610.31352>)

<a id="bib.bibx9"></a>

\[9\] Lov. Grover “A fast quantum mechanical algorithm for database search” In Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, 1996, pp. 212–219 DOI: [10.1145/237814.237866](<https://dx.doi.org/10.1145/237814.237866>)

<a id="bib.bibx10"></a>

\[10\] Thomas Häner, Martin Roetteler and Krysta. Svore “Optimizing Quantum Circuits for Arithmetic”, 2018 arXiv:[1805.12445 \[quant-ph\]](<https://arxiv.org/abs/1805.12445>)

<a id="bib.bibx11"></a>

\[11\] Peter. Shor “Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer” In SIAM Journal on Computing 26.5, 1997, pp. 1484–1509 DOI: [10.1137/S0097539795293172](<https://dx.doi.org/10.1137/S0097539795293172>)

<a id="bib.bibx12"></a>

\[12\] Stephen. Jordan et al. “Optimization by decoded quantum interferometry” In Nature 646.8086, 2025, pp. 831–836 DOI: [10.1038/s41586-025-09527-5](<https://dx.doi.org/10.1038/s41586-025-09527-5>)

<a id="bib.bibx13"></a>

\[13\] Alán Aspuru-Guzik, Anthony. Dutoi, Peter. Love and Martin Head-Gordon “Simulated Quantum Computation of Molecular Energies” In Science 309.5741, 2005, pp. 1704–1707 DOI: [10.1126/science.1113479](<https://dx.doi.org/10.1126/science.1113479>)

<a id="bib.bibx14"></a>

\[14\] Ivan Kassal, Stephen. Jordan, Peter. Love, Masoud Mohseni and Alán Aspuru-Guzik “Polynomial-time quantum algorithm for the simulation of chemical dynamics” In Proceedings of the National Academy of Sciences 105.48, 2008, pp. 18681–18686 DOI: [10.1073/pnas.0808245105](<https://dx.doi.org/10.1073/pnas.0808245105>)

<a id="bib.bibx15"></a>

\[15\] Raffaele Santagati et al. “Drug design on quantum computers” In Nature Physics 20.4, 2024, pp. 549–557 DOI: [10.1038/s41567-024-02411-5](<https://dx.doi.org/10.1038/s41567-024-02411-5>)

<a id="bib.bibx16"></a>

\[16\] Bela Bauer, Sergey Bravyi, Mario Motta and Garnet-Lic Chan “Quantum Algorithms for Quantum Chemistry and Quantum Materials Science” In Chemical Reviews 120.22, 2020, pp. 12685–12717 DOI: [10.1021/acs.chemrev.9b00829](<https://dx.doi.org/10.1021/acs.chemrev.9b00829>)

<a id="bib.bibx17"></a>

\[17\] Alain Delgado et al. “Simulating key properties of lithium-ion batteries with a fault-tolerant quantum computer” In Physical Review A 106.3, 2022, pp. 032428 DOI: [10.1103/PhysRevA.106.032428](<https://dx.doi.org/10.1103/PhysRevA.106.032428>)

<a id="bib.bibx18"></a>

\[18\] Stephen. Jordan, Keith.. Lee and John Preskill “Quantum Algorithms for Quantum Field Theories” In Science 336.6085, 2012, pp. 1130–1133 DOI: [10.1126/science.1217069](<https://dx.doi.org/10.1126/science.1217069>)

<a id="bib.bibx19"></a>

\[19\] Christian. Bauer et al. “Quantum Simulation for High-Energy Physics” In PRX Quantum 4.2, 2023, pp. 027001 DOI: [10.1103/PRXQuantum.4.027001](<https://dx.doi.org/10.1103/PRXQuantum.4.027001>)

<a id="bib.bibx20"></a>

\[20\] I. Joseph et al. “Quantum computing for fusion energy science applications” In Physics of Plasmas 30.1, 2023, pp. 010501 DOI: [10.1063/5.0123765](<https://dx.doi.org/10.1063/5.0123765>)

<a id="bib.bibx21"></a>

\[21\] Alexander. Dalzell et al. “Quantum Algorithms: A Survey of Applications and End-to-end Complexities” Cambridge University Press, 2025 DOI: [10.1017/9781009639651](<https://dx.doi.org/10.1017/9781009639651>)

<a id="bib.bibx22"></a>

\[22\] Rajeev Acharya et al. “Quantum error correction below the surface code threshold” In Nature 638.8052, 2025, pp. 920–926 DOI: [10.1038/s41586-024-08449-y](<https://dx.doi.org/10.1038/s41586-024-08449-y>)

<a id="bib.bibx23"></a>

\[23\] Craig Gidney “Halving the cost of quantum addition” In Quantum 2, 2018, pp. 74 DOI: [10.22331/q-2018-06-18-74](<https://dx.doi.org/10.22331/q-2018-06-18-74>)

<a id="bib.bibx24"></a>

\[24\] Ryan Babbush et al. “Encoding Electronic Spectra in Quantum Circuits with Linear T Complexity” In Physical Review X 8, 2018, pp. 041015 DOI: [10.1103/PhysRevX.8.041015](<https://dx.doi.org/10.1103/PhysRevX.8.041015>)

<a id="bib.bibx25"></a>

\[25\] Guang Low and Isaac. Chuang “Hamiltonian Simulation by Qubitization” In Quantum 3, 2019, pp. 163 DOI: [10.22331/q-2019-07-12-163](<https://dx.doi.org/10.22331/q-2019-07-12-163>)

<a id="bib.bibx26"></a>

\[26\] András Gilyén, Yuan Su, Guang Low and Nathan Wiebe “Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics” In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, 2019, pp. 193–204 DOI: [10.1145/3313276.3316366](<https://dx.doi.org/10.1145/3313276.3316366>)

<a id="bib.bibx27"></a>

\[27\] Yuan Su, Dominic. Berry, Nathan Wiebe, Nicholas Rubin and Ryan Babbush “Fault-Tolerant Quantum Simulations of Chemistry in First Quantization” In PRX Quantum 2, 2021, pp. 040332 DOI: [10.1103/PRXQuantum.2.040332](<https://dx.doi.org/10.1103/PRXQuantum.2.040332>)

<a id="bib.bibx28"></a>

\[28\] Thomas Fösel, Petru Tighineanu, Talitha Weiss and Florian Marquardt “Reinforcement Learning with Neural Networks for Quantum Feedback” In Physical Review X 8.3, 2018, pp. 031084 DOI: [10.1103/PhysRevX.8.031084](<https://dx.doi.org/10.1103/PhysRevX.8.031084>)

<a id="bib.bibx29"></a>

\[29\] V.. Sivak et al. “Real-time quantum error correction beyond break-even” In Nature 616.7955, 2023, pp. 50–55 DOI: [10.1038/s41586-023-05782-6](<https://dx.doi.org/10.1038/s41586-023-05782-6>)

<a id="bib.bibx30"></a>

\[30\] Mario Krenn, Jonas Landgraf, Thomas Foesel and Florian Marquardt “Artificial intelligence and machine learning for quantum technologies” In Physical Review A 107.1, 2023, pp. 010101 DOI: [10.1103/PhysRevA.107.010101](<https://dx.doi.org/10.1103/PhysRevA.107.010101>)

<a id="bib.bibx31"></a>

\[31\] Johannes Bausch et al. “Learning high-accuracy error decoding for quantum processors” In Nature 635.8040, 2024, pp. 834–840 DOI: [10.1038/s41586-024-08148-8](<https://dx.doi.org/10.1038/s41586-024-08148-8>)

<a id="bib.bibx32"></a>

\[32\] Francisco.. Ruiz et al. “Quantum circuit optimization with AlphaTensor” In Nature Machine Intelligence 7.3, 2025, pp. 374–385 DOI: [10.1038/s42256-025-01001-1](<https://dx.doi.org/10.1038/s42256-025-01001-1>)

<a id="bib.bibx33"></a>

\[33\] Alhussein Fawzi et al. “Discovering faster matrix multiplication algorithms with reinforcement learning” In Nature 610.7930, 2022, pp. 47–53 DOI: [10.1038/s41586-022-05172-4](<https://dx.doi.org/10.1038/s41586-022-05172-4>)

<a id="bib.bibx34"></a>

\[34\] Daniel. Mankowitz et al. “Faster sorting algorithms discovered using deep reinforcement learning” In Nature 618.7964, 2023, pp. 257–263 DOI: [10.1038/s41586-023-06004-9](<https://dx.doi.org/10.1038/s41586-023-06004-9>)

<a id="bib.bibx35"></a>

\[35\] Bernardino Romera-Paredes et al. “Mathematical discoveries from program search with large language models” In Nature 625, 2024, pp. 468–475 DOI: [10.1038/s41586-023-06924-6](<https://dx.doi.org/10.1038/s41586-023-06924-6>)

<a id="bib.bibx36"></a>

\[36\] Robert Lange, Yuki Imajuku and Edoardo Cetin “ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution” In International Conference on Learning Representations (ICLR), 2026 arXiv:[2509.19349 \[cs.CL\]](<https://arxiv.org/abs/2509.19349>)

<a id="bib.bibx37"></a>

\[37\] Josh Alman and Virginia Vassilevska “Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs”, 2026 arXiv: [https://arxiv.org/abs/2610.06783](<https://arxiv.org/abs/2610.06783>)

<a id="bib.bibx38"></a>

\[38\] OpenAI “The Exponential Time Hypothesis is False” Preprint, dated October 25, 2026; AI-generated, not peer-reviewed, [https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026](<https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026>), 2026

<a id="bib.bibx39"></a>

\[39\] Anthropic and Claude “A $2^{o(n)}$ Time Algorithm for 3-SAT” Paper and Lean 4 formalization (Lean v4.33.1, Mathlib v4.33.1); AI-generated, not peer-reviewed, [https://github.com/anthropics/formal-math/tree/main/eth](<https://github.com/anthropics/formal-math/tree/main/eth>), 2026

<a id="bib.bibx40"></a>

\[40\] Tudor Achim et al. “Aristotle: IMO-level Automated Theorem Proving”, 2025 arXiv:[2510.01346 \[cs.AI\]](<https://arxiv.org/abs/2510.01346>)

<a id="bib.bibx41"></a>

\[41\] Leonardo de Moura and Sebastian Ullrich “The Lean 4 Theorem Prover and Programming Language” In Automated Deduction – CADE 28 12699, Lecture Notes in Computer Science Springer, 2021, pp. 625–635 DOI: [10.1007/978-3-030-79876-5\_37](<https://dx.doi.org/10.1007/978-3-030-79876-5_37>)

<a id="bib.bibx42"></a>

\[42\] Yuan Feng and Mingsheng Ying “Quantum Hoare Logic with Classical Variables” In ACM Transactions on Quantum Computing 2.4, 2021, pp. 1–43 DOI: [10.1145/3456877](<https://dx.doi.org/10.1145/3456877>)

<a id="bib.bibx43"></a>

\[43\] Daniel Litinski “A Game of Surface Codes: Large-Scale Quantum Computing with Lattice Surgery” In Quantum 3, 2019, pp. 128 DOI: [10.22331/q-2019-03-05-128](<https://dx.doi.org/10.22331/q-2019-03-05-128>)

<a id="bib.bibx44"></a>

\[44\] Google DeepMind “Formal quantum computation in Lean 4”, [https://github.com/google-deepmind/formal-quantum-computation](<https://github.com/google-deepmind/formal-quantum-computation>), 2026

<a id="bib.bibx45"></a>

\[45\] The mathlib Community “The Lean mathematical library” In Proceedings of the 9th ACM SIGPLAN International Conference on Certified Programs and Proofs, 2020, pp. 367–381 DOI: [10.1145/3372885.3373824](<https://dx.doi.org/10.1145/3372885.3373824>)

<a id="bib.bibx46"></a>

\[46\] The Physlib Community “Physlib: The Lean Physics Library”, [https://github.com/leanprover-community/physlib](<https://github.com/leanprover-community/physlib>), 2024

<a id="bib.bibx47"></a>

\[47\] Alex Meiburg “Quantum Information in Lean” In GitHub repository GitHub, [https://github.com/Timeroot/Lean-QuantumInfo](<https://github.com/Timeroot/Lean-QuantumInfo>), 2024

<a id="bib.bibx48"></a>

\[48\] Nicholas. Rubin et al. “Quantum computation of stopping power for inertial fusion target design” In Proceedings of the National Academy of Sciences 121.23, 2024, pp. e2317772121 DOI: [10.1073/pnas.2317772121](<https://dx.doi.org/10.1073/pnas.2317772121>)

<a id="bib.bibx49"></a>

\[49\] Kyle Swanson, Wesley Wu, Nash. Bulaong, John. Pak and James Zou “The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies” In Nature 646.8085, 2025, pp. 716–723 DOI: [10.1038/s41586-025-09442-9](<https://dx.doi.org/10.1038/s41586-025-09442-9>)

<a id="bib.bibx50"></a>

\[50\] Juraj Gottweis, Wei-Hung Weng and Alexander Daryin “Accelerating scientific discovery with Co-Scientist” In Nature 655.8122, 2026, pp. 487–496 DOI: [10.1038/s41586-026-10644-y](<https://dx.doi.org/10.1038/s41586-026-10644-y>)

<a id="bib.bibx51"></a>

\[51\] Chris Lu et al. “Towards end-to-end automation of AI research” In Nature 651.8107, 2026, pp. 914–919 DOI: [10.1038/s41586-026-10265-5](<https://dx.doi.org/10.1038/s41586-026-10265-5>)

<a id="bib.bibx52"></a>

\[52\] Ali. Ghareeb et al. “A multi-agent system for automating scientific discovery” In Nature 655, 2026, pp. 497–505 DOI: [10.1038/s41586-026-10652-y](<https://dx.doi.org/10.1038/s41586-026-10652-y>)

<a id="bib.bibx53"></a>

\[53\] Mert Yuksekgonul et al. “Learning to Discover at Test Time” In Proceedings of the 43rd International Conference on Machine Learning (ICML), 2026 arXiv:[2601.16175 \[cs.LG\]](<https://arxiv.org/abs/2601.16175>)

<a id="bib.bibx54"></a>

\[54\] George Tsoukalas et al. “Advancing mathematics research with AI-driven formal proof search” In Science 394.6820, 2026, pp. 234–239 DOI: [10.1126/science.aej2213](<https://dx.doi.org/10.1126/science.aej2213>)

<a id="bib.bibx55"></a>

\[55\] Ao Qu et al. “CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery” In Proceedings of the Conference on Language Modeling (COLM), 2026 arXiv:[2604.01658 \[cs.AI\]](<https://arxiv.org/abs/2604.01658>)

<a id="bib.bibx56"></a>

\[56\] Ziqian Zhong, Aditi Raghunathan and Nicholas Carlini “ImpossibleBench: Measuring LLMs’ Propensity of Exploiting Test Cases”, 2025 arXiv:[2510.20270](<https://arxiv.org/abs/2510.20270>)

<a id="bib.bibx57"></a>

\[57\] Lean FRO “comparator: A trustworthy judge for Lean proofs from untrusted sources” Accessed Nov. 2026, [https://github.com/leanprover/comparator](<https://github.com/leanprover/comparator>), 2025

<a id="bib.bibx58"></a>

\[58\] Matthew Pocrnic, Ignacio Loaiza, Juan Arrazola, Nathan Wiebe and Danial Motlagh “Efficient Simulation of Pre-Born-Oppenheimer Dynamics on a Quantum Computer”, 2026 arXiv:[2602.11272 \[quant-ph\]](<https://arxiv.org/abs/2602.11272>)

<a id="bib.bibx59"></a>

\[59\] Matthew Pocrnic and Danial Motlagh “Improved constant factors for qubitized Hamiltonian simulation”, 2026 arXiv:[2608.02734 \[quant-ph\]](<https://arxiv.org/abs/2608.02734>)

<a id="bib.bibx60"></a>

\[60\] Guang Low et al. “Fast Quantum Simulation of Electronic Structure by Spectral Amplification” In Physical Review X 15.4, 2025, pp. 041016 DOI: [10.1103/pb2g-j9cw](<https://dx.doi.org/10.1103/pb2g-j9cw>)

<a id="bib.bibx61"></a>

\[61\] Guang Low et al. “A denser planar surface code”, 2026 DOI: [10.48550/arXiv.2605.30455](<https://dx.doi.org/10.48550/arXiv.2605.30455>)

<a id="bib.bibx62"></a>

\[62\] Michel Boyer, Gilles Brassard, Peter Høyer and Alain Tapp “Tight Bounds on Quantum Searching” In Fortschritte der Physik 46.4–5, 1998, pp. 493–505 DOI: [10.1002/(SICI)1521-3978(199806)46:4/5&lt;493::AID-PROP493&gt;3.0.CO;2-P](<https://dx.doi.org/10.1002/(SICI)1521-3978(199806)46:4/5<493::AID-PROP493%3E3.0.CO;2-P>)

<a id="bib.bibx63"></a>

\[63\] Christof Zalka “Grover’s quantum searching algorithm is optimal” In Physical Review A 60.4, 1999, pp. 2746–2751 DOI: [10.1103/PhysRevA.60.2746](<https://dx.doi.org/10.1103/PhysRevA.60.2746>)

<a id="bib.bibx64"></a>

\[64\] Robert. Gingrich, Colin. Williams and Nicolas. Cerf “Generalized quantum search with parallelism” In Physical Review A 61.5, 2000, pp. 052313 DOI: [10.1103/PhysRevA.61.052313](<https://dx.doi.org/10.1103/PhysRevA.61.052313>)

<a id="bib.bibx65"></a>

\[65\] Lov. Grover and Jaikumar Radhakrishnan “Quantum search for multiple items using parallel queries”, 2004 DOI: [10.48550/arXiv.quant-ph/0407217](<https://dx.doi.org/10.48550/arXiv.quant-ph/0407217>)

<a id="bib.bibx66"></a>

\[66\] Wang Fang and Chris Heunen “Weakly Measured Loops for Quantum Amplitude Amplification: Oracle Savings and Adaptive Search with Unknown Target Probability”, 2026 DOI: [10.48550/arXiv.2609.39621](<https://dx.doi.org/10.48550/arXiv.2609.39621>)

<a id="bib.bibx67"></a>

\[67\] Vineet Goyal and Karl Sigman “On simulating a class of Bernstein polynomials” In ACM Transactions on Modeling and Computer Simulation 22.2, 2012, pp. 1–5 DOI: [10.1145/2133390.2133396](<https://dx.doi.org/10.1145/2133390.2133396>)

<a id="bib.bibx68"></a>

\[68\] Thomas. Hentschel et al. “Improving dynamic collision frequencies: Impacts on dynamic structure factors and stopping powers in warm dense matter” In Physics of Plasmas 30.6, 2023, pp. 062703 DOI: [10.1063/5.0143738](<https://dx.doi.org/10.1063/5.0143738>)

<a id="bib.bibx69"></a>

\[69\] O.. Hurricane et al. “Physics principles of inertial confinement fusion and U.S. program overview” In Reviews of Modern Physics 95.2, 2023, pp. 025005 DOI: [10.1103/RevModPhys.95.025005](<https://dx.doi.org/10.1103/RevModPhys.95.025005>)

<a id="bib.bibx70"></a>

\[70\] Paul. Grabowski, Michael. Surh, David. Richards, Frank. Graziani and Michael. Murillo “Molecular Dynamics Simulations of Classical Stopping Power” In Physical Review Letters 111.21, 2013, pp. 215002 DOI: [10.1103/PhysRevLett.111.215002](<https://dx.doi.org/10.1103/PhysRevLett.111.215002>)

<a id="bib.bibx71"></a>

\[71\] Alfredo. Correa “Calculating electronic stopping power in materials from first principles” In Computational Materials Science 150, 2018, pp. 291–303 DOI: [10.1016/j.commatsci.2018.03.064](<https://dx.doi.org/10.1016/j.commatsci.2018.03.064>)

<a id="bib.bibx72"></a>

\[72\] Y.. Ding, A.. White, S.. Hu, O. Certik and L.. Collins “Ab Initio Studies on the Stopping Power of Warm Dense Matter with Time-Dependent Orbital-Free Density Functional Theory” In Physical Review Letters 121.14, 2018, pp. 145001 DOI: [10.1103/PhysRevLett.121.145001](<https://dx.doi.org/10.1103/PhysRevLett.121.145001>)

<a id="bib.bibx73"></a>

\[73\] P.. Grabowski et al. “Review of the first charged-particle transport coefficient comparison workshop” In High Energy Density Physics 37, 2020, pp. 100905 DOI: [10.1016/j.hedp.2020.100905](<https://dx.doi.org/10.1016/j.hedp.2020.100905>)

<a id="bib.bibx74"></a>

\[74\] Gregory. Scholes, Graham. Fleming, Alexandra Olaya-Castro and Rienk van Grondelle “Lessons from nature about solar light harvesting” In Nature Chemistry 3.10, 2011, pp. 763–774 DOI: [10.1038/nchem.1145](<https://dx.doi.org/10.1038/nchem.1145>)

<a id="bib.bibx75"></a>

\[75\] J. Lennox, Daniel. Kurtz, Tao Huang and Jillian. Dempsey “Excited-State Proton-Coupled Electron Transfer: Different Avenues for Promoting Proton/Electron Movement with Solar Photons” In ACS Energy Letters 2.5, 2017, pp. 1246–1256 DOI: [10.1021/acsenergylett.7b00063](<https://dx.doi.org/10.1021/acsenergylett.7b00063>)

<a id="bib.bibx76"></a>

\[76\] Emily. Gentry and Robert. Knowles “Synthetic Applications of Proton-Coupled Electron Transfer” In Accounts of Chemical Research 49.8, 2016, pp. 1546–1556 DOI: [10.1021/acs.accounts.6b00272](<https://dx.doi.org/10.1021/acs.accounts.6b00272>)

<a id="bib.bibx77"></a>

\[77\] Dario Polli et al. “Conical intersection dynamics of the primary photoisomerization event in vision” In Nature 467.7314, 2010, pp. 440–443 DOI: [10.1038/nature09346](<https://dx.doi.org/10.1038/nature09346>)

<a id="bib.bibx78"></a>

\[78\] Graham. Worth and Lorenz. Cederbaum “Beyond Born–Oppenheimer: Molecular Dynamics Through a Conical Intersection” In Annual Review of Physical Chemistry 55.1, 2004, pp. 127–158 DOI: [10.1146/annurev.physchem.55.091602.094335](<https://dx.doi.org/10.1146/annurev.physchem.55.091602.094335>)

<a id="bib.bibx79"></a>

\[79\] Sebastian Mai and Leticia González “Molecular Photochemistry: Recent Developments in Theory” In Angewandte Chemie International Edition 59.39, 2020, pp. 16832–16846 DOI: [10.1002/anie.201916381](<https://dx.doi.org/10.1002/anie.201916381>)

<a id="bib.bibx80"></a>

\[80\] Sharon Hammes-Schiffer and Alexei. Stuchebrukhov “Theory of Coupled Electron and Proton Transfer Reactions” In Chemical Reviews 110.12, 2010, pp. 6939–6960 DOI: [10.1021/cr1001436](<https://dx.doi.org/10.1021/cr1001436>)

<a id="bib.bibx81"></a>

\[81\] Joseph. Subotnik et al. “Understanding the Surface Hopping View of Electronic Transitions and Decoherence” In Annual Review of Physical Chemistry 67.1, 2016, pp. 387–417 DOI: [10.1146/annurev-physchem-040215-112245](<https://dx.doi.org/10.1146/annurev-physchem-040215-112245>)

<a id="bib.bibx82"></a>

\[82\] Rachel Crespo-Otero and Mario Barbatti “Recent Advances and Perspectives on Nonadiabatic Mixed Quantum–Classical Dynamics” In Chemical Reviews 118.15, 2018, pp. 7026–7068 DOI: [10.1021/acs.chemrev.7b00577](<https://dx.doi.org/10.1021/acs.chemrev.7b00577>)

<a id="bib.bibx83"></a>

\[83\] Guanghua Ren, Qingchi Meng, Jinfeng Zhao and Tianshu Chu “Molecular Design for Electron-Driven Double-Proton Transfer: A New Scenario for Excited-State Proton-Coupled Electron Transfer” In The Journal of Physical Chemistry A 122.47, 2018, pp. 9191–9198 DOI: [10.1021/acs.jpca.8b09264](<https://dx.doi.org/10.1021/acs.jpca.8b09264>)

<a id="bib.bibx84"></a>

\[84\] Ilia. Denisov, Thomas. Makris, Stephen. Sligar and Ilme Schlichting “Structure and Chemistry of Cytochrome P450” In Chemical Reviews 105.6, 2005, pp. 2253–2278 DOI: [10.1021/cr0307143](<https://dx.doi.org/10.1021/cr0307143>)

<a id="bib.bibx85"></a>

\[85\] F. Guengerich “Cytochrome P450 and Chemical Toxicology” In Chemical Research in Toxicology 21.1, 2008, pp. 70–83 DOI: [10.1021/tx700079z](<https://dx.doi.org/10.1021/tx700079z>)

<a id="bib.bibx86"></a>

\[86\] Jonathan Rittle and Michael. Green “Cytochrome P450 Compound I: Capture, Characterization, and C–H Bond Activation Kinetics” In Science 330.6006, 2010, pp. 933–937 DOI: [10.1126/science.1193478](<https://dx.doi.org/10.1126/science.1193478>)

<a id="bib.bibx87"></a>

\[87\] Sason Shaik et al. “P450 Enzymes: Their Structure, Reactivity, and Selectivity—Modeled by QM/MM Calculations” In Chemical Reviews 110.2, 2010, pp. 949–1017 DOI: [10.1021/cr900121s](<https://dx.doi.org/10.1021/cr900121s>)

<a id="bib.bibx88"></a>

\[88\] Joshua. Goings et al. “Reliably assessing the electronic structure of cytochrome P450 on today’s classical computers and tomorrow’s quantum computers” In Proceedings of the National Academy of Sciences 119.38, 2022, pp. e2203533119 DOI: [10.1073/pnas.2203533119](<https://dx.doi.org/10.1073/pnas.2203533119>)

<a id="bib.bibx89"></a>

\[89\] Athena Caesura et al. “Faster Quantum Chemistry Simulations on a Quantum Computer with Improved Tensor Factorization and Active Volume Compilation” In PRX Quantum 6.3, 2025, pp. 030337 DOI: [10.1103/yngp-5fpm](<https://dx.doi.org/10.1103/yngp-5fpm>)

<a id="bib.bibx90"></a>

\[90\] Craig Gidney “How to factor 2048 bit RSA integers with less than a million noisy qubits”, 2025 arXiv:[2505.15917 \[quant-ph\]](<https://arxiv.org/abs/2505.15917>)

<a id="bib.bibx91"></a>

\[91\] Kesha Hietala, Robert Rand, Shih-Han Hung, Xiaodi Wu and Michael Hicks “A verified optimizer for quantum circuits” In Proceedings of the ACM on Programming Languages 5.POPL, 2021, pp. 1–29 DOI: [10.1145/3434318](<https://dx.doi.org/10.1145/3434318>)

<a id="bib.bibx92"></a>

\[92\] Li Zhou, Gilles Barthe, Pierre-Yves Strub, Junyi Liu and Mingsheng Ying “CoqQ: Foundational Verification of Quantum Programs” In Proceedings of the ACM on Programming Languages 7.POPL, 2023, pp. 833–865 DOI: [10.1145/3571222](<https://dx.doi.org/10.1145/3571222>)

<a id="bib.bibx93"></a>

\[93\] Mingsheng Ying “Floyd–Hoare logic for quantum programs” In ACM Transactions on Programming Languages and Systems 33.6, 2011, pp. 1–49 DOI: [10.1145/2049706.2049708](<https://dx.doi.org/10.1145/2049706.2049708>)

<a id="bib.bibx94"></a>

\[94\] Junyi Liu et al. “Formal Verification of Quantum Algorithms Using Quantum Hoare Logic” In Computer Aided Verification – CAV 2019 11562, Lecture Notes in Computer Science Springer, 2019, pp. 187–207 DOI: [10.1007/978-3-030-25543-5\_12](<https://dx.doi.org/10.1007/978-3-030-25543-5_12>)

<a id="bib.bibx95"></a>

\[95\] Lei Zhang, Mingrui Jing, Yusheng Zhao, Jiahong Liu and Xin Wang “Lean-QuantumAlg: A Framework for AI Agents to Produce Quantum Algorithms that Humans Can Trust”, 2026 arXiv:[2610.30216 \[quant-ph\]](<https://arxiv.org/abs/2610.30216>)

<a id="bib.bibx96"></a>

\[96\] Yuanjie Ren et al. “QEDIA: Quantum Program Verification in Lean”, 2026 arXiv:[2610.17708 \[quant-ph\]](<https://arxiv.org/abs/2610.17708>)

<a id="bib.bibx97"></a>

\[97\] Mingsheng Ying “A practical quantum Hoare logic with classical variables, I” In Information and Computation 309, 2026, pp. 105417 DOI: [https://doi.org/10.1016/j.ic.2026.105417](<https://dx.doi.org/https://doi.org/10.1016/j.ic.2026.105417>)

<a id="bib.bibx98"></a>

\[98\] Katsuhiro Endo “Reducing Trust Cost in Quantum Application Development Using AI”, 2026 arXiv:[2610.14665 \[quant-ph\]](<https://arxiv.org/abs/2610.14665>)

<a id="bib.bibx99"></a>

\[99\] Carroll Morgan, Annabelle McIver and Karen Seidel “Probabilistic Predicate Transformers” In ACM Transactions on Programming Languages and Systems 18.3, 1996, pp. 325–353 DOI: [10.1145/229542.229547](<https://dx.doi.org/10.1145/229542.229547>)

<a id="bib.bibx100"></a>

\[100\] The Lean Developers “The Lean Language Reference (Lean v4.35.0), Chapter 17: The vcgen Tactic” Lean FRO. Accessed: 2026-11-04, [https://lean-lang.org/doc/reference/4.35.0/The--vcgen--tactic/](<https://lean-lang.org/doc/reference/4.35.0/The--vcgen--tactic/>), 2026

<a id="bib.bibx101"></a>

\[101\] Vladimir Gladshtein, George Pîrlea, Qiyuan Zhao, Vitaly Kurin and Ilya Sergey “Foundational Multi-Modal Program Verifiers” In Proceedings of the ACM on Programming Languages 10.POPL, 2026, pp. 2233–2264 DOI: [10.1145/3776719](<https://dx.doi.org/10.1145/3776719>)

<a id="bib.bibx102"></a>

\[102\] VERSE Lab “Loom: A Framework for Foundational Multi-Modal Program Verifiers in Lean” GitHub repository. Accessed: 2026-11-04, [https://github.com/verse-lab/loom](<https://github.com/verse-lab/loom>), 2026

<a id="bib.bibx103"></a>

\[103\] Stanley. Gudder and Richard Greechie “Effect Algebra Counterexamples” In Mathematica Slovaca 46.4, 1996, pp. 317–325 URL: [http://eudml.org/doc/31741](<http://eudml.org/doc/31741>)

<a id="bib.bibx104"></a>

\[104\] Bowen Baker et al. “Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation”, 2025 arXiv:[2503.11926 \[cs.AI\]](<https://arxiv.org/abs/2503.11926>)

<a id="bib.bibx105"></a>

\[105\] Samuel Schmidgall and Michael Moor “AgentRxiv: Towards Collaborative Autonomous Research”, 2025 arXiv:[2503.18102](<https://arxiv.org/abs/2503.18102>)

<a id="bib.bibx106"></a>

\[106\] Yukun Jiang, Yage Zhang, Xinyue Shen, Michael Backes and Yang Zhang ““Humans welcome to observe”: A First Look at the Agent Social Network Moltbook”, 2026 arXiv:[2602.10127](<https://arxiv.org/abs/2602.10127>)

<a id="bib.bibx107"></a>

\[107\] Yongqiang Chen, Gang Niu, James Cheng, Bo Han and Masashi Sugiyama “When and Why Does Multi-Agent Debate Fail and Does It Really Underperform?” In Proceedings of the 43rd International Conference on Machine Learning (ICML), 2026 arXiv:[2510.20963 \[cs.LG\]](<https://arxiv.org/abs/2510.20963>)

<a id="bib.bibx108"></a>

\[108\] Cody Jones “Low-overhead constructions for the fault-tolerant Toffoli gate” In Physical Review A 87, 2013, pp. 022328 DOI: [10.1103/PhysRevA.87.022328](<https://dx.doi.org/10.1103/PhysRevA.87.022328>)

<a id="bib.bibx109"></a>

\[109\] Tanuj Khattar and Craig Gidney “Rise of conditionally clean ancillae for efficient quantum circuit constructions” In Quantum 9, 2025, pp. 1752 DOI: [10.22331/q-2025-05-21-1752](<https://dx.doi.org/10.22331/q-2025-05-21-1752>)

<a id="bib.bibx110"></a>

\[110\] Austin. Fowler, Matteo Mariantoni, John. Martinis and Andrew. Cleland “Surface codes: Towards practical large-scale quantum computation” In Physical Review A 86.3, 2012, pp. 032324 DOI: [10.1103/PhysRevA.86.032324](<https://dx.doi.org/10.1103/PhysRevA.86.032324>)

<a id="bib.bibx111"></a>

\[111\] Dominic Horsman, Austin. Fowler, Simon Devitt and Rodney Van “Surface code quantum computing by lattice surgery” In New Journal of Physics 14.12, 2012, pp. 123011 DOI: [10.1088/1367-2630/14/12/123011](<https://dx.doi.org/10.1088/1367-2630/14/12/123011>)

<a id="bib.bibx112"></a>

\[112\] Sergey Bravyi and Alexei Kitaev “Universal quantum computation with ideal Clifford gates and noisy ancillas” In Physical Review A 71.2, 2005, pp. 022316 DOI: [10.1103/PhysRevA.71.022316](<https://dx.doi.org/10.1103/PhysRevA.71.022316>)

<a id="bib.bibx113"></a>

\[113\] Craig Gidney and Austin. Fowler “Efficient magic state factories with a catalyzed $|{CCZ}\rangle$ to $2|{T}\rangle$ transformation” In Quantum 3, 2019, pp. 135 DOI: [10.22331/q-2019-04-30-135](<https://dx.doi.org/10.22331/q-2019-04-30-135>)

<a id="bib.bibx114"></a>

\[114\] Craig Gidney, Noah Shutty and Cody Jones “Magic state cultivation: growing T states as cheap as CNOT gates”, 2024 DOI: [10.48550/arXiv.2409.17595](<https://dx.doi.org/10.48550/arXiv.2409.17595>)

<a id="bib.bibx115"></a>

\[115\] Craig Gidney, Michael Newman, Austin Fowler and Michael Broughton “A Fault-Tolerant Honeycomb Memory” In Quantum 5, 2021, pp. 605 DOI: [10.22331/q-2021-12-20-605](<https://dx.doi.org/10.22331/q-2021-12-20-605>)

<a id="bib.bibx116"></a>

\[116\] Isaac. Kim et al. “Fault-tolerant resource estimate for quantum chemical simulations: Case study on Li-ion battery electrolyte molecules” In Physical Review Research 4.2, 2022, pp. 023019 DOI: [10.1103/PhysRevResearch.4.023019](<https://dx.doi.org/10.1103/PhysRevResearch.4.023019>)

<a id="bib.bibx117"></a>

\[117\] Dominic. Berry, Craig Gidney, Mario Motta, Jarrod. McClean and Ryan Babbush “Qubitization of Arbitrary Basis Quantum Chemistry Leveraging Sparsity and Low Rank Factorization” In Quantum 3, 2019, pp. 208 DOI: [10.22331/q-2019-12-02-208](<https://dx.doi.org/10.22331/q-2019-12-02-208>)

<a id="bib.bibx118"></a>

\[118\] Andi Gu, Alek. Kemeny, Susanne. Yelin and Mikhail. Lukin “Discovering state-of-the-art quantum circuits with large language models”, 2026 arXiv:[2610.22367 \[quant-ph\]](<https://arxiv.org/abs/2610.22367>)

<a id="bib.bibx119"></a>

\[119\] Vera von Burg et al. “Quantum computing enhanced computational catalysis” In Physical Review Research 3.3, 2021, pp. 033055 DOI: [10.1103/PhysRevResearch.3.033055](<https://dx.doi.org/10.1103/PhysRevResearch.3.033055>)

<a id="bib.bibx120"></a>

\[120\] Nicholas. Rubin et al. “Fault-Tolerant Quantum Simulation of Materials Using Bloch Orbitals” In PRX Quantum 4.4, 2023, pp. 040303 DOI: [10.1103/PRXQuantum.4.040303](<https://dx.doi.org/10.1103/PRXQuantum.4.040303>)

<a id="bib.bibx121"></a>

\[121\] Daniel Litinski and Naomi Nickerson “Active volume: An architecture for efficient fault-tolerant quantum computers with limited non-local connections”, 2022 arXiv:[2211.15465 \[quant-ph\]](<https://arxiv.org/abs/2211.15465>)

<a id="bib.bibx122"></a>

\[122\] Sergey Bravyi et al. “High-threshold and low-overhead fault-tolerant quantum memory” In Nature 627.8005, 2024, pp. 778–782 DOI: [10.1038/s41586-024-07107-7](<https://dx.doi.org/10.1038/s41586-024-07107-7>)

<a id="bib.bibx123"></a>

\[123\] Craig Gidney and Martin Ekerå “How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits” In Quantum 5, 2021, pp. 433 DOI: [10.22331/q-2021-04-15-433](<https://dx.doi.org/10.22331/q-2021-04-15-433>)

<a id="bib.bibx124"></a>

\[124\] Stacey Jeffery, Frederic Magniez and Ronald de Wolf “Optimal Parallel Quantum Query Algorithms” In Algorithmica 79.2 Springer ScienceBusiness Media LLC, 2016, pp. 509–529 DOI: [10.1007/s00453-016-0206-z](<https://dx.doi.org/10.1007/s00453-016-0206-z>)

<a id="bib.bibx125"></a>

\[125\] Charles. Bennett, Ethan Bernstein, Gilles Brassard and Umesh Vazirani “Strengths and Weaknesses of Quantum Computing” In SIAM Journal on Computing 26.5, 1997, pp. 1510–1523 DOI: [10.1137/S0097539796300933](<https://dx.doi.org/10.1137/S0097539796300933>)

<a id="bib.bibx126"></a>

\[126\] Peter Høyer “Arbitrary phases in quantum amplitude amplification” In Physical Review A 62.5, 2000, pp. 052304 DOI: [10.1103/PhysRevA.62.052304](<https://dx.doi.org/10.1103/PhysRevA.62.052304>)

<a id="bib.bibx127"></a>

\[127\] G.. Long “Grover algorithm with zero theoretical failure rate” In Physical Review A 64.2, 2001, pp. 022307 DOI: [10.1103/PhysRevA.64.022307](<https://dx.doi.org/10.1103/PhysRevA.64.022307>)

<a id="bib.bibx128"></a>

\[128\] Gilles Brassard, Peter Høyer, Michele Mosca and Alain Tapp “Quantum amplitude amplification and estimation” In Quantum Computation and Information 305, Contemporary Mathematics American Mathematical Society, 2002, pp. 53–74 DOI: [10.1090/conm/305/05215](<https://dx.doi.org/10.1090/conm/305/05215>)

<a id="bib.bibx129"></a>

\[129\] Theodore. Yoder, Guang Low and Isaac. Chuang “Fixed-Point Quantum Search with an Optimal Number of Queries” In Physical Review Letters 113.21, 2014, pp. 210501 DOI: [10.1103/PhysRevLett.113.210501](<https://dx.doi.org/10.1103/PhysRevLett.113.210501>)

<a id="bib.bibx130"></a>

\[130\] David Aldenbro and Alexander Skalski “Comparing Grover’s algorithm to linear search when finding multiple queried elements”, 2024

<a id="bib.bibx131"></a>

\[131\] Ari Mizel “Critically Damped Quantum Search” In Physical Review Letters 102.15, 2009, pp. 150501 DOI: [10.1103/PhysRevLett.102.150501](<https://dx.doi.org/10.1103/PhysRevLett.102.150501>)

<a id="bib.bibx132"></a>

\[132\] Pablo Andrés-Martínez and Chris Heunen “Weakly measured while loops: peeking at quantum states” In Quantum Science and Technology 7.2, 2022, pp. 025007 DOI: [10.1088/2058-9565/ac47f1](<https://dx.doi.org/10.1088/2058-9565/ac47f1>)

<a id="bib.bibx133"></a>

\[133\] Lov Grover and Terry Rudolph “Creating superpositions that correspond to efficiently integrable probability distributions”, 2002 arXiv:[quant-ph/0208112](<https://arxiv.org/abs/quant-ph/0208112>)

<a id="bib.bibx134"></a>

\[134\] Aram. Harrow, Avinatan Hassidim and Seth Lloyd “Quantum Algorithm for Linear Systems of Equations” In Physical Review Letters 103.15, 2009, pp. 150502 DOI: [10.1103/PhysRevLett.103.150502](<https://dx.doi.org/10.1103/PhysRevLett.103.150502>)

<a id="bib.bibx135"></a>

\[135\] K. Temme, T.. Osborne, K.. Vollbrecht, D. Poulin and F. Verstraete “Quantum Metropolis sampling” In Nature 471.7336, 2011, pp. 87–90 DOI: [10.1038/nature09770](<https://dx.doi.org/10.1038/nature09770>)

<a id="bib.bibx136"></a>

\[136\] Maris Ozols, Martin Roetteler and Jérémie Roland “Quantum rejection sampling” In ACM Transactions on Computation Theory 5.3, 2013, pp. 1–33 DOI: [10.1145/2493252.2493256](<https://dx.doi.org/10.1145/2493252.2493256>)

<a id="bib.bibx137"></a>

\[137\] Yuval. Sanders, Guang Low, Artur Scherer and Dominic. Berry “Black-Box Quantum State Preparation without Arithmetic” In Physical Review Letters 122.2, 2019, pp. 020502 DOI: [10.1103/PhysRevLett.122.020502](<https://dx.doi.org/10.1103/PhysRevLett.122.020502>)

<a id="bib.bibx138"></a>

\[138\] Iain Burge, Michel Barbeau and Joaquin Garcia-Alfaro “Quantum CORDIC – Arcsine on a Budget”, 2024 arXiv:[2411.14434 \[quant-ph\]](<https://arxiv.org/abs/2411.14434>)

<a id="bib.bibx139"></a>

\[139\] Tanuj Khattar et al. “Leveraging verifiable structure in quantum circuits to find more efficient compilations with agentic AI”, 2026 arXiv: [https://arxiv.org/abs/2610.23832](<https://arxiv.org/abs/2610.23832>)

<a id="bib.bibx140"></a>

\[140\] Danial Motlagh and Nathan Wiebe “Generalized Quantum Signal Processing” In PRX Quantum 5, 2024, pp. 020368 DOI: [10.1103/PRXQuantum.5.020368](<https://dx.doi.org/10.1103/PRXQuantum.5.020368>)

<a id="bib.bibx141"></a>

\[141\] Dominic. Berry, Danial Motlagh, Giacomo Pantaleoni and Nathan Wiebe “Doubling the efficiency of Hamiltonian simulation via generalized quantum signal processing” In Physical Review A 110, 2024, pp. 012612 DOI: [10.1103/PhysRevA.110.012612](<https://dx.doi.org/10.1103/PhysRevA.110.012612>)

<a id="bib.bibx142"></a>

\[142\] Elliot. Eklund et al. “End-to-End Simulation of Chemical Dynamics on a Quantum Computer”, 2026 arXiv:[2603.19007 \[quant-ph\]](<https://arxiv.org/abs/2603.19007>)

<a id="bib.bibx143"></a>

\[143\] Şerban Nacu and Yuval Peres “Fast simulation of new coins from old” In The Annals of Applied Probability 15.1A, 2005, pp. 93–115 DOI: [10.1214/105051604000000549](<https://dx.doi.org/10.1214/105051604000000549>)

<a id="bib.bibx144"></a>

\[144\] Earl Campbell “Shorter gate sequences for quantum computing by mixing unitaries” In Physical Review A 95.4, 2017, pp. 042306 DOI: [10.1103/PhysRevA.95.042306](<https://dx.doi.org/10.1103/PhysRevA.95.042306>)

<a id="bib.bibx145"></a>

\[145\] Matthew. Hastings “Turning gate synthesis errors into incoherent errors” In Quantum Information and Computation 17.5&amp;6, 2017, pp. 488–494 arXiv:[1612.01011](<https://arxiv.org/abs/1612.01011>)

<a id="bib.bibx146"></a>

\[146\] Jeongwan Haah “Product Decomposition of Periodic Functions in Quantum Signal Processing” In Quantum 3, 2019, pp. 190 DOI: [10.22331/q-2019-10-07-190](<https://dx.doi.org/10.22331/q-2019-10-07-190>)

<a id="bib.bibx147"></a>

\[147\] Andor Menczer et al. “Parallel Implementation of the Density Matrix Renormalization Group Method Achieving a Quarter petaFLOPS Performance on a Single DGX-H100 GPU Node” In Journal of Chemical Theory and Computation 20.19, 2024, pp. 8397–8404 DOI: [10.1021/acs.jctc.4c00903](<https://dx.doi.org/10.1021/acs.jctc.4c00903>)

<a id="bib.bibx148"></a>

\[148\] Nicholas Rubin “Fast quantum simulation of electronic structure by spectral amplification”, Zenodo, 2025 DOI: [10.5281/zenodo.17066718](<https://dx.doi.org/10.5281/zenodo.17066718>)

<a id="bib.bibx149"></a>

\[149\] Daniel. Abrams and Seth Lloyd “Quantum Algorithm Providing Exponential Speed Increase for Finding Eigenvalues and Eigenvectors” In Physical Review Letters 83.24, 1999, pp. 5162–5165 DOI: [10.1103/PhysRevLett.83.5162](<https://dx.doi.org/10.1103/PhysRevLett.83.5162>)

<a id="bib.bibx150"></a>

\[150\] Seunghoon Lee et al. “Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry” In Nature Communications 14, 2023, pp. 1952 DOI: [10.1038/s41467-023-37587-6](<https://dx.doi.org/10.1038/s41467-023-37587-6>)

<a id="bib.bibx151"></a>

\[151\] Robbie King, Guang Low, Ryan Babbush, Rolando. Somma and Nicholas. Rubin “Quantum Simulation with Sum-of-Squares Spectral Amplification” In Physical Review Letters 136.11, 2026, pp. 110601 DOI: [10.1103/m3fj-m4rm](<https://dx.doi.org/10.1103/m3fj-m4rm>)

<a id="A1"></a>

## Appendix A Formal Quantum Computation Library

We formalize our verification and resource-counting framework for quantum algorithms in Lean \[[192](<https://arxiv.org/html/2611.09822v3#biba.bibx41>)\], an interactive theorem proving language based on dependent type theory. We chose Lean for its already established rich library ecosystem for broad mathematics, physics, and quantum information theory \[[196](<https://arxiv.org/html/2611.09822v3#biba.bibx45>), [197](<https://arxiv.org/html/2611.09822v3#biba.bibx46>), [198](<https://arxiv.org/html/2611.09822v3#biba.bibx47>)\]. Moreover, Lean has seen significant traction in recent months for verification of AI-generated proofs. In particular, formalizing quantum algorithms in Lean allows us to model a broader semantics of quantum programming, complementing fast fuzz-testing evaluators like kickmix \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>)\]. Prior formal frameworks for quantum program verification have been developed across several interactive theorem provers. In Rocq (formerly Coq), SQIR \[[242](<https://arxiv.org/html/2611.09822v3#biba.bibx91>)\] verifies unitary quantum circuits, while CoqQ \[[243](<https://arxiv.org/html/2611.09822v3#biba.bibx92>)\] formalizes quantum Hoare logic \[[244](<https://arxiv.org/html/2611.09822v3#biba.bibx93>)\] for pure quantum while programs. In Isabelle/HOL, QHLProver \[[245](<https://arxiv.org/html/2611.09822v3#biba.bibx94>)\] provides an earlier mechanization of quantum Hoare logic for imperative quantum algorithms. Concurrent work has also explored quantum verification in Lean \[[246](<https://arxiv.org/html/2611.09822v3#biba.bibx95>)\], most notably QEDIA \[[247](<https://arxiv.org/html/2611.09822v3#biba.bibx96>)\], which formalizes classical-quantum Hoare logic \[[248](<https://arxiv.org/html/2611.09822v3#biba.bibx97>)\] for partial and total correctness. Ref. \[[249](<https://arxiv.org/html/2611.09822v3#biba.bibx98>)\] also separates human-reviewed specifications from machine-checked proofs to reduce the human “trust cost” of AI-generated quantum circuits, a division our workflow mirrors. Beyond correctness verification, our framework includes formal support for measuring the worst-case and expected resource costs of algorithms, which is critical for quantum algorithm discovery.

![Figure S1](figures/A1.F1.png)

Figure S1: Verification library and specification stack. Built on Mathlib \[[196](<https://arxiv.org/html/2611.09822v3#biba.bibx45>)\], Physlib’s Lean-QuantumInfo \[[198](<https://arxiv.org/html/2611.09822v3#biba.bibx47>), [197](<https://arxiv.org/html/2611.09822v3#biba.bibx46>)\] in Lean, our quantum Hoare logic \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>), [248](<https://arxiv.org/html/2611.09822v3#biba.bibx97>)\] formalizes classical–quantum states, weakest preconditions and resource costs, supporting problem specifications (correctness theorem and cost bound) across dynamic Clifford+$T$ circuits and black-box query algorithms.

<a id="block-A1-block-3"></a>

The core of our Lean library is formed by a formalization of a classical-quantum imperative while language with an associated classical-quantum Hoare logic \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]. Supporting classical variables and classical control flow is crucial in practice: realistic quantum algorithms routinely interleave quantum operations with classical arithmetic, loops, and measurement-dependent branching. Handling classical states natively avoids the state-space overhead of encoding classical data into quantum registers.

<a id="block-A1-block-4"></a>

Correctness in this work is expressed through total Hoare triples $\{\!\!\{\Theta\}\!\!\}\;P\;\{\!\!\{\Psi\}\!\!\}$. These assert that for every initial (classical-quantum) state $\Delta$ satisfying the precondition $\Theta$, all executions of the program $P$ terminate in a (classical-quantum) state satisfying the postcondition $\Psi$. In the classical case, pre– and postconditions are predicates on the state. In the quantum case, a state no longer simply satisfies or violates an assertion, the condition is quantitative and takes value in $[0,1]$. We call this the expectation of satisfaction. A triple then asserts that, for every initial state $\Delta$, the expectation of $\Delta$ satisfying an assertion $\Theta$ is bounded above by the expectation of the resulting state $\Delta^{\prime}$ (obtained after running the program $P$ on $\Delta$) to satisfy $\Psi$.

Verification is performed via reasoning about weakest preconditions. Starting from a given postcondition $\Psi$, we compute the weakest precondition for this to hold by inductively reasoning about the program backwards. The full semantics of weakest preconditions is given in Figure [S3](<https://arxiv.org/html/2611.09822v3#A1.F3>). We follow the source closely but not fully faithfully: we have made certain modifications both to fit our verification purposes and to address ambiguities in the paper. We next outline the main ingredients of the logic and where our formalization differs from Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\].

<a id="A1.SS0.SSS0.Px1"></a>

### Variable types.

Programs operate on two kinds of variables: classical and quantum. In Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] classical variables can have two types, boolean and integer. We focus on integer-valued classical variables. This is without loss of generality, since boolean values can be encoded as integers. More precisely, given a type $\mathsf{Var}$ of classical variables, the type of classical states (stores) is:

```lean
abbrev Store (Var : Type) : Type := Var → ℤ
```

For quantum variables, Feng and Ying \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] consider a countably infinite set $\mathsf{qVar}$ of quantum variables $q_{1},q_{2},\ldots$ each associated with a Hilbert space of dimension $d_{q_{1}},d_{q_{2}},\ldots$ respectively. We restrict our set-up to a single quantum variable $q$ with associated Hilbert space $\mathcal{H}(d)$ of dimension $d$, where $d$ is a positive natural number. In practice, $\mathcal{H}(d)$ can be identified with $\mathbb{C}^{d}$. This loses no expressiveness if we limit ourselves to finitely many quantum variables: if these are of dimensions $d_{1},\dots,d_{n}$ can be combined into one register of dimension $d=\prod_{i=1}^{n}d_{i}$. Although, this requires lifting operations to the full space explicitly. Supporting multiple named quantum variables is left for future work.

<a id="A1.SS0.SSS0.Px2"></a>

### Classical-quantum states.

Let $\mathcal{L}(d)$ be the set of Hermitian operators (matrices) on $\mathcal{H}(d)$ and $\mathcal{D}(d)=\{\rho\in\mathcal{L}(d)\mid 0\preceq\rho,\;\mathrm{Tr}(\rho)\leq 1\}$ the set of partial density operators, ordered by the Löwner order. A classical-quantum state $\Delta$ is a function $\Delta:\texttt{Store Var}\to\mathcal{D}(d)$ with countable support whose total trace $\sum_{\sigma}\mathrm{tr}(\Delta(\sigma))$ is at most $1$. In particular, any deficit $1-\|\Delta\|$ represents nontermination. In other words, for a classical store $\sigma$, $\mathrm{tr}(\Delta(\sigma))$ is the probability of being in the classical branch $\sigma$ and $\Delta(\sigma)$, suitably normalized, is the quantum state in that branch. We represent this slightly more generally as:

```lean
def CQState (State : Type*) (d : ℕ) : Type :=
  {Δ : State → mcalD d // ∃ c, HasSum (fun σ ↦ (Δ σ).trace) c ∧ c ≤ 1}
```

<a id="block-A1.SS0.SSS0.Px2-block-3"></a>

and our formalization shows that CQState (Store Var) d is equivalent to Definition 3.1 of Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]; countable support need not be separately imposed, since a suitable family of non-negative reals has countable support (covered by HasSum). The formalization and proofs of this can be found in CQState.lean \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\].

<a id="A1.SS0.SSS0.Px3"></a>

### Classical-quantum assertions.

<a id="block-A1.SS0.SSS0.Px3-block-1"></a>

We define the set of unit-interval observables \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] (quantum predicates) as $\mathcal{O}(d)=\{M\in\mathcal{L}(d)\mid 0\preceq M\preceq I\}$, where $0$ and $I$ are the zero and identity matrix respectively. A classical-quantum assertion is a map $\Theta:\texttt{Store Var}\to\mathcal{O}(d)$. This approach is inspired by classical probabilistic program logics, mirroring the use of by real-valued expectations there \[[250](<https://arxiv.org/html/2611.09822v3#biba.bibx99>)\]. We formalize this (again slightly more generally) as follows, where Observable $d$ is our formalization of $\mathcal{O}(d)$:

```lean
abbrev CQAssertion (State : Type*) (d : ℕ) : Type :=
  State → Observable d
```

As an example, Figure [S2](<https://arxiv.org/html/2611.09822v3#A1.F2>) shows how CQAssertion is used to express the clean-ancilla property for subroutines that initialize workspace qubits in $|0\rangle$ and uncompute them upon completion.

![Figure S2](figures/A1.F2.png)

Figure S2: A formal definition of the clean-ancilla property. Here, a program P implements the unitary $U$ on register rTarget and returns the disjoint ancilla register rAnc to $|0\cdots 0\rangle$: for every predicate $M$, from any input with clean ancillas, P must end with clean ancillas and satisfy $M$ at least as often as applying $U$ would. Since $M$ is arbitrary, P acts exactly as $U$ on all such inputs.

Similarly to CQState, CQAssertion has a partial order: we can lift the Löwner order on observables by declaring $\Theta_{1}\preceq\Theta_{2}$, if $\Theta_{1}(\sigma)\preceq\Theta_{2}(\sigma)$ for all classical stores $\sigma$. Note that since we work with a single quantum variable, in contrast to Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\], we need not impose further conditions on the quantum variables used when defining the order. CQAssertion is a pointed $\omega$-CPO with respect to the Löwner order: it has a least element, and every increasing chain $\Theta_{0}\preceq\Theta_{1}\preceq\cdots$ has a supremum. This structure is crucial as it allows us to define the weakest precondition on a while loop as the supremum of the weakest preconditions of its finite unrollings and to prove the soundness of the while loop rule. In most logics, assertions form a complete lattice, a stronger structure in which every set of assertions has a supremum and an infimum. This matters in practice: existing verification generator frameworks such as Lean’s vcgen tactic \[[251](<https://arxiv.org/html/2611.09822v3#biba.bibx100>)\] and Loom \[[252](<https://arxiv.org/html/2611.09822v3#biba.bibx101>), [253](<https://arxiv.org/html/2611.09822v3#biba.bibx102>)\] require this. The observables on a Hilbert space of dimension at least $2$ \[[254](<https://arxiv.org/html/2611.09822v3#biba.bibx103>)\], do not even form a lattice under the Löwner order, so these frameworks are not presently applicable. Therefore, we implemented the quantum Hoare logic and weakest precondition calculus from scratch.

At first glance, the formalization of CQAssertion (Store Var) above differs from Definition 3.5 of Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\], which includes the two conditions on $\Theta:\texttt{Store Var}\to\mathcal{O}(d)$:

The image set $\Theta(\texttt{Store Var})$ is countable;

For each $M\in\Theta(\texttt{Store Var})$, the preimage $\Theta^{-1}(M)$ is definable by a classical assertion.

We do not need to impose condition (1) separately: when the set of classical variables Var is finite, $\texttt{Store Var}=\texttt{Var}\to\mathbb{Z}$ is countable, so the image of $\Theta:\texttt{Store Var}\to\mathcal{O}(d)$ is automatically countable. We prove this in CQAssertion.equivCountable. Condition (2) holds automatically since we represent classical assertions as predicates $\texttt{Store}\ \texttt{Var}\to\texttt{Prop}$. However, if the classical assertions are first-order logic formulas over Var as is stated in the beginning of Section 3.2 of Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\], cq-assertions are no longer closed under suprema of increasing chains in the Löwner order and therefore, not an $\omega$-CPO. We encounter the same roadblock to the $\omega$-CPO structure if we explicitly impose condition (1) on the cq-assertions while allowing countably infinitely many classical variables, as opposed to obtaining it naturally by restricting to finitely many classical variables. The full formalization can be found in CQAssertion.lean \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\].

<a id="A1.SS0.SSS0.Px4"></a>

### Expectation.

To reason about program correctness, we need a quantifiable notion of how much a cq-state satisfies a cq-assertion. In the quantum case, this is no longer a boolean predicate; instead, we consider the expectation of a cq-state $\Delta$ satisfying a cq-assertion $\Theta$:

$$
\mathbb{E}[\Delta\models\Theta]\;\overset{\triangle}{=}\;\sum_{\sigma}\mathrm{tr}\!\left(\Theta(\sigma)\,\Delta(\sigma)\right)\;\in\;[0,1].\tag{1}
$$

<a id="block-A1.SS0.SSS0.Px4-block-3"></a>

This can be thought of as the expected satisfaction of $\Theta$ in state $\Delta$, averaging over all possible classical branches $\sigma$. Note that since we have one quantum variable, our formula is a simplified version of Definition 3.7 in Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\].

We formalize Equation [1](<https://arxiv.org/html/2611.09822v3#A1.E1>) as follows:

```lean
def expect (Δ : CQState State d) (θ : CQAssertion State d) : ℝ :=
  ∑' σ, ⟪(θ σ).val, Δ σ⟫_ℝ
notation "bbE[" Δ " ⊨ " θ "]" => expect Δ θ
```

This definition and Equation [1](<https://arxiv.org/html/2611.09822v3#A1.E1>) are equivalent: the inner product of the Hermitian matrices $\Theta(\sigma)$ and $\Delta(\sigma)$ is the real value of the trace of their product as defined in Equation [1](<https://arxiv.org/html/2611.09822v3#A1.E1>). The prime around the sum stands for Mathlib’s tsum, or topological sum, the limit of finite partial sums of possibly infinite index type. Finally, $\mathtt{expect}\ \Delta\ \Theta$ takes values in the unit-interval, even though its return type is the real numbers. This follows from the trace of positive semi-definite matrices being non-negative combined with lemmas we prove in our library establishing the term inside the sum is bounded above by $1$ (see theorems expect\_mono, expect\_top, CQState.trace\_le\_one in Expectation.lean \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\]).

<a id="A1.SS0.SSS0.Px5"></a>

### Syntax.

Programs are expressed in the following variant of the classical-quantum imperative while-language of Feng and Ying \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]:

$$
\displaystyle P\;\Coloneqq
$$

$$
\displaystyle\texttt{skip}\;\mid\;\texttt{abort}\;\mid\;x\coloneqq e\;\mid\;\texttt{qset}\;\mid\;\texttt{apply}\;U\tag{2}
$$

$$
\displaystyle\mid
$$

$$
\displaystyle x\coloneqq\texttt{measure}\;\mathcal{M}\;\mid\;P_{1}\;;\;P_{2}
$$

$$
\displaystyle\mid
$$

$$
\displaystyle\texttt{qif}\;b\;\texttt{then}\;P_{1}\;\texttt{else}\;P_{2}\;\mid\;\texttt{qwhile}\;b\;\texttt{loop}\;P
$$

<a id="block-A1.SS0.SSS0.Px5-block-3"></a>

Our formalization diverges from Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] in the following ways: we omit random assignment $x\mathrel{:=_{\$}}g$, we work with a single quantum system rather than several quantum variables, and we represent expressions $e$ and guards $b$ directly as Lean functions on the classical store. We embed this language in Lean as an inductive datatype QProg, with the commands as constructors.

A QProg program is parameterized by a finite type Var of integer-valued classical variables $x$ and on a single $d$-dimensional quantum system ($d$ an arbitrary positive natural number, with $d=2^{n}$ for $n$ qubits). Classical expressions $e:\texttt{Store}\ \texttt{Var}\to\mathbb{Z}$ and decidable guards $b:\texttt{Store}\ \texttt{Var}\to\texttt{Prop}$ are shallowly embedded as functions of the classical store $\sigma$, avoiding the need to encode boolean guards as nonzero integers and aligning branch conditions directly with Lean’s propositional tactics. The command qset resets the quantum system to $|0\rangle$, $\texttt{apply}\;U$ applies a unitary operator $U$, and $x\coloneqq\texttt{measure}\;\mathcal{M}$ performs an $i$-outcome quantum measurement with Kraus operators $\mathcal{M}=\{M_{o}\}_{o<i}$, $\sum_{o}M_{o}^{\dagger}M_{o}\preceq I$, storing the outcome $o$ in $x$. The commands qif and qwhile respectively branch and loop on classical guards. As an example, simple applications of qwhile provide support for repeat-until-success loops. Denotational semantics for QProg are given in Figure [S3](<https://arxiv.org/html/2611.09822v3#A1.F3>).

<a id="A1.SS0.SSS0.Px6"></a>

### Weakest Preconditions.

<a id="block-A1.SS0.SSS0.Px6-block-1"></a>

Program verification is performed backwards using the weakest precondition (wp) transformer (Figure [S3](<https://arxiv.org/html/2611.09822v3#A1.F3>)), which takes a program and a target postcondition and computes the weakest assertion that must hold before execution:

```lean
def wp : QProg Var d → CQAssertion (Store Var) d → CQAssertion (Store Var) d
```

This formalizes the predicate transformer of Table 3 in Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]. Since we are interested in terminating classical-quantum programs, we focus our attention on total correctness. Therefore, we formalize the weakest precondition calculus from Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\] and omit the weakest liberal preconditions, which are only needed for partial correctness.

Particularly, given a classical-quantum program $P$ and a postcondition $\Psi$, $\texttt{wp}\ P\ \Psi$ computes the “weakest” cq-assertion whose expectation in any initial state $\Delta$ equals the expectation of $\Psi$ in the state reached after executing $P$. Since cq-assertions form an $\omega$-CPO under the Löwner order, the weakest precondition is the largest element with respect to the Löwner order for which the desired postcondition still holds.

The wp rules on basic commands are described in Figure [S3](<https://arxiv.org/html/2611.09822v3#A1.F3>). They are all faithfully formalized to the source, apart from the syntax and variable-type choices in QProg, and can be found in WP.lean \[[195](<https://arxiv.org/html/2611.09822v3#biba.bibx44>)\].

We use the weakest precondition calculus to prove total-correctness Hoare triples $\{\!\!\{\Theta\}\!\!\}\;P\;\{\!\!\{\Psi\}\!\!\}$, formalized as propositions:

```lean
def Triple (Θ : CQAssertion (Store Var) d) (c : QProg Var d)
    (Ψ : CQAssertion (Store Var) d) : Prop :=
  ∀ Δ : CQState (Store Var) d, bbE[Δ ⊨ Θ] ≤ bbE[(interp c).toStateFun Δ ⊨ Ψ]
```

<a id="block-A1.SS0.SSS0.Px6-block-8"></a>

Here $(\texttt{interp}\ c).\texttt{toStateFun}\ \Delta$ formalizes the output state $\llbracket c\rrbracket(\Delta)$ of Figure [S3](<https://arxiv.org/html/2611.09822v3#A1.F3>). The central property connecting the forward denotational semantics and the backward wp transformer is exact expectation duality (Lemma 4.14 in Ref. \[[193](<https://arxiv.org/html/2611.09822v3#biba.bibx42>)\]):

```lean
theorem expect_wp (c : QProg Var d) (Δ : CQState (Store Var) d)
    (Ψ : CQAssertion (Store Var) d) :
    bbE[Δ ⊨ wp c Ψ] = bbE[(interp c).toStateFun Δ ⊨ Ψ]
```

Exact expectation duality (expect\_wp) immediately implies soundness: that $\texttt{wp}\ c\ \Psi$ is itself a valid precondition, and that it is indeed the weakest such precondition. These are formalized in wp\_soundness and wp\_weakest in WP.lean.

<a id="A1.SS0.SSS0.Px7"></a>

### Resource Counting and Cost Models.

<a id="block-A1.SS0.SSS0.Px7-block-1"></a>

Alongside correctness, our library supports two ways of calculating the resource cost of a program: syntactic gate counting over structured circuits, and semantic expected-cost accounting over program executions with branching and unbounded loops. At the circuit level, straight-line circuits are represented as the inductive type Circuit parametrized by the number of wires $n$. This is built sequentially from nine primitive unitary gates PrimitiveGate (Clifford+$T$, SWAP and TOFF gates). The count of each gate type is obtained simply by summing its occurrences along the sequence. Because each gate type is tracked separately, the cost assigned to each gate is tunable in a specification (for instance, counting only $T$ gates while treating Cliffords as free). Circuits can also include mid-circuit single-qubit measurements and classical branching, packaged in the type DynamicCircuit which appears in the problems described in this work. For these, we set the resource counting to have measurements add $0$ to gate counts, while the cost of a classical branch is the maximum of its two branch counts, giving a worst-case bound. Through the typing of the output circuit, we also keep track of the number of qubits used to include in resource counts. All of this can be found in the folder Circuits, with basic definitions in Basic.lean, and the resource counting framework in ResourceCounting.lean.

To calculate exact expected resource usage directly on QProg, a user-supplied cost model (CostModel) assigns nonnegative integer weights $w$ to each primitive command (assignmentCost, resetCost, measurementCost, and unitaryCost). Unitary and measurement weights may depend on the operator applied. For instance, one can charge $1$ for a designated oracle unitary and $0$ for all other operations.

Given $w$ and an initial cq-state $\Delta$ with total trace $\|\Delta\|=\sum_{\sigma}\mathrm{tr}(\Delta(\sigma))$, the branch-weighted expected cost $\mathrm{cost}_{w}(P,\Delta)$ (expectedCost) is defined by structural recursion on $P$ alongside the denotational semantics $\llbracket P\rrbracket(\Delta)$:

$$
\displaystyle\mathrm{cost}_{w}(\texttt{skip},\Delta)
$$

$$
\displaystyle=\mathrm{cost}_{w}(\texttt{abort},\Delta)=0,\qquad\mathrm{cost}_{w}(c,\Delta)=\|\Delta\|\cdot w(c),\tag{3}
$$

$$
\displaystyle\mathrm{cost}_{w}(P_{1}\;;\;P_{2},\Delta)
$$

$$
\displaystyle=\mathrm{cost}_{w}(P_{1},\Delta)+\mathrm{cost}_{w}(P_{2},\llbracket P_{1}\rrbracket(\Delta)),
$$

$$
\displaystyle\mathrm{cost}_{w}(\texttt{qif}\;b\;\texttt{then}\;P_{1}\;\texttt{else}\;P_{2},\Delta)
$$

$$
\displaystyle=\mathrm{cost}_{w}(P_{1},\Delta|_{b})+\mathrm{cost}_{w}(P_{2},\Delta|_{\neg b}),
$$

$$
\displaystyle\mathrm{cost}_{w}(\texttt{qwhile}\;b\;\texttt{loop}\;P,\Delta)
$$

$$
\displaystyle=\bigsqcup_{n\geq 0}C_{n}(\Delta),\quad C_{0}(\Delta)=0,\;C_{n+1}(\Delta)=\mathrm{cost}_{w}(P,\Delta|_{b})+C_{n}(\llbracket P\rrbracket(\Delta|_{b})),
$$

<a id="block-A1.SS0.SSS0.Px7-block-5"></a>

for primitive commands $c$, taking values in $[0,\infty]$ so that loop suprema always exist. The total trace, which could also be seen as the probability mass of entering the current branch of the program, is formalized as stateMass. Our library provides compositional rules to upper-bound $\mathrm{cost}_{w}(P,\Delta)$ across sequences, branches, and loops, bounding a qwhile loop by its per-iteration cost times the expected number of iterations, which can itself be bounded via wp. These definitions and compositional rules on the costs (formalized as CostBound) are mechanized in QuantumHoareLogic/ResourceCounting.

Each problem specification specializes this framework along two axes. First, the counted resource is chosen to match the computational model, such as gate counts &amp; spacetime, or black-box oracle calls (charging weight $1$ per oracle application and $0$ for all other operations, as in parallel Grover search; Appendix [E](<https://arxiv.org/html/2611.09822v3#A5>)). Second, costs can be measured either as concrete numerical bounds at a fixed problem size (like the arcsin problem) or as asymptotic bounds. In many cases, these asymptotic bounds are enforced to be of the form $c\cdot N^{a}$ as the input size $N$ grows, ordered lexicographically on $(a,c)$, which gives a straightforward ordering on discovered solutions.

<table>
<tr><th>Program $P$</th><th>Denotational semantics $\llbracket P\rrbracket(\Delta)$</th><th>Weakest precondition $\mathrm{wp}(P,\Psi)$</th></tr>
<tr><th>skip</th><td>$\Delta$</td><td>$\Psi$</td></tr>
<tr><th>abort</th><td>$0$</td><td>$0$</td></tr>
<tr><th>$x\coloneqq e$</th><td>$\sigma^{\prime}\mapsto\sum_{\sigma:\,\sigma[x\mapsto e(\sigma)]=\sigma^{\prime}}\Delta(\sigma)$</td><td>$\sigma\mapsto\Psi(\sigma[x\mapsto e(\sigma)])$</td></tr>
<tr><th>qset</th><td>$\sigma\mapsto\mathrm{Tr}(\Delta(\sigma))\,|0\rangle\langle 0|$</td><td>$\sigma\mapsto\langle 0|\Psi(\sigma)|0\rangle\,I$</td></tr>
<tr><th>$\texttt{apply}\;U$</th><td>$\sigma\mapsto U\,\Delta(\sigma)\,U^{\dagger}$</td><td>$\sigma\mapsto U^{\dagger}\,\Psi(\sigma)\,U$</td></tr>
<tr><th>$x\coloneqq\texttt{measure}\;\mathcal{M}$</th><td>$\sigma^{\prime}\mapsto\sum_{o}M_{o}\,\llbracket x\coloneqq o\rrbracket(\Delta)\,M_{o}^{\dagger}$</td><td>$\sigma\mapsto\sum_{o}M_{o}^{\dagger}\,\Psi(\sigma[x\mapsto o])\,M_{o}$</td></tr>
<tr><th>$P_{1}\;;\;P_{2}$</th><td>$\llbracket P_{2}\rrbracket(\llbracket P_{1}\rrbracket(\Delta))$</td><td>$\mathrm{wp}(P_{1},\mathrm{wp}(P_{2},\Psi))$</td></tr>
<tr><th>$\texttt{qif}\;b\;\texttt{then}\;P_{1}\;\texttt{else}\;P_{2}$</th><td>$\llbracket P_{1}\rrbracket(\Delta|_{b})+\llbracket P_{2}\rrbracket(\Delta|_{\neg b})$</td><td>$\mathrm{wp}(P_{1},\Psi)|_{b}+\mathrm{wp}(P_{2},\Psi)|_{\neg b}$</td></tr>
<tr><th>$\texttt{qwhile}\;b\;\texttt{loop}\;P$</th><td>$\bigsqcup_{n\geq 0}W_{n}(\Delta)$</td><td>$\bigsqcup_{n\geq 0}\Psi_{n}$</td></tr>
</table>

$$
\mathrm{where}\hskip 4.55254ptW_{n+1}(\Delta)=\Delta|_{\neg b}+W_{n}(\llbracket P\rrbracket(\Delta|_{b})),\hskip 17.00024pt\Psi_{n+1}=\mathrm{wp}(P,\Psi_{n})|_{b}+\Psi|_{\neg b}.
$$

Figure S3: Inductive definitions of the denotational semantics $\llbracket P\rrbracket(\Delta)$ and weakest precondition $\mathrm{wp}(P,\Psi)$. For a guard $b$, $\Delta|_{b}$ retains $\Delta(\sigma)$ where $b(\sigma)\neq 0$ and sets all other branches to $0$ (similarly for $\Psi|_{b}$ and $\neg b$). Loop unrollings start from $W_{0}(\Delta)=0$ and $\Psi_{0}=0$.

<a id="A2"></a>

## Appendix B Verification Pipeline

<a id="block-A2-block-1"></a>

Each problem is defined by a specification file pinned to a frozen repository commit, declaring the target correctness theorem and resource-cost function with typed sorry placeholders for the candidate construction, workspace parameters, and proofs (Sec. [1.1](<https://arxiv.org/html/2611.09822v3#S1.SS1>)). Because agents may game local checks without discovering or improving the algorithm, for instance by weakening theorem statements, modifying helper definitions, adding axioms, disabling local kernel checks, or misreporting costs \[[255](<https://arxiv.org/html/2611.09822v3#biba.bibx104>), [207](<https://arxiv.org/html/2611.09822v3#biba.bibx56>)\], candidate grading is isolated from the agent environment.

<a id="block-A2-block-2"></a>

Every submission is replayed in a clean sandbox by an external verifier using the Lean Comparator \[[208](<https://arxiv.org/html/2611.09822v3#biba.bibx57>)\] against the frozen specification. A submission passes only if: (i) all target theorem statements and every transitive definition they depend on match the specification; (ii) the compiled proof terms depend solely on standard Lean axioms (propext, Quot.sound, and Classical.choice), with no sorry or custom axioms; and (iii) the proved resource theorem reduces to the claimed closed-form cost. The same check runs automatically before any solution is merged into the shared wiki. Numerical estimates and agent-reported figures are used only internally by teams to prioritize search directions, whereas researchers need only audit the physical model and cost conventions of the specification itself, revising the pinned specification if an unintended modeling loophole is found.

<a id="A3"></a>

## Appendix C Multi-Agent Orchestration

<a id="A3.SS0.SSS0.Px1"></a>

### Agent teams.

Each researcher configures and operates an independent team of LLM agents, choosing the agent framework, models, prompts, and division of labor. Setups ranged from a single agent iterating on a candidate construction to multi-agent hierarchical organizations that split subroutine design, error analysis, and Lean proof engineering across specialized workers. In this study, researchers put their domain knowledge, discussion, and design into the problem specification itself rather than seeding domain knowledge or steering the research while underway, though the workflow naturally supports active human seeding and steering as well. During exploration, agents may invoke any external tools, including natural-language derivations, classical simulation, numerical optimization, and remote compute clusters.

<a id="A3.SS0.SSS0.Px2"></a>

### Shared wiki.

<a id="block-A3.SS0.SSS0.Px2-block-1"></a>

Teams exchange persistent artifacts through a version-controlled repository with one directory per problem \[[256](<https://arxiv.org/html/2611.09822v3#biba.bibx105>), [206](<https://arxiv.org/html/2611.09822v3#biba.bibx55>)\]. Each entry contains: (i) the current best verified solution, which any new run can adopt as its starting point; (ii) reusable partial Lean files verified to compile against the shared library; and (iii) reviewed notes classifying explored idea families as verified, promising, or dead ends, alongside short technical lessons. Whereas solutions and partial Lean files are machine-checked, idea notes are reviewed summaries rather than formal proofs (see Fig. [S4](<https://arxiv.org/html/2611.09822v3#A3.F4>)). A candidate solution is merged only if it passes automatic re-verification against the frozen specification and clears a minimum relative cost-improvement threshold ($5\%$ by default) so that teams do not spend effort adapting to frequent minor updates. Because verified Lean solutions grow large across successive iterations, problems with established solutions also accept updates that substantially shorten the Lean code (by at least $20\%$) while strictly reducing cost, keeping files within agent context limits and reducing Lean compilation time. Recording negative results with concrete obstructions (such as numerical counterexamples or Lean lemmas) prevents later runs across all teams from repeating known dead ends.

![Figure S4](figures/A3.F4.png)

Figure S4: Layout of one problem directory in the shared wiki (stopping power). The best solution and the reusable partial Lean modules are checked by the external verifier against the frozen specification before merging, while idea notes are reviewed summaries labeled verified, promising, or dead-end. Each verified record in history.md lists the teams credited for it.

<a id="A3.SS0.SSS0.Px3"></a>

### Conferences.

<a id="block-A3.SS0.SSS0.Px3-block-1"></a>

Because many useful exchanges discuss unverified conjectures, teams convene periodically every four hours on a shared forum open across participating researchers and agent frameworks. During each session, agents pose questions, critique claims, and propose candidate constructions for other teams to test (see Fig. [S5](<https://arxiv.org/html/2611.09822v3#A3.F5>)). Discussion rules encourage direct replies between teams as opposed to standalone status reports, preventing the one-way broadcasting typical of unstructured agent boards \[[257](<https://arxiv.org/html/2611.09822v3#biba.bibx106>), [258](<https://arxiv.org/html/2611.09822v3#biba.bibx107>)\]. To uphold the correctness of intermediate work, statements and cost projections posted in a conference carry no weight until independently verified and published to the wiki.

![Figure S5](figures/A3.F5.png)

Figure S5: A cross-team conference exchange between two verified records in the stopping power problem (records #1 and #2 of Fig. [5](<https://arxiv.org/html/2611.09822v3#S2.F5>)c). Each numbered post replies directly to the one above it, across two conference sessions. Colored bars mark the team, the italic line is an analysis summary, and quoted text is verbatim from the conference; “…” marks omitted text, and words in square brackets, such as \[the subroutine\], replace Lean code snippets used in the original posts.

<a id="A4"></a>

## Appendix D Fault-Tolerant Cost Metric and Hardware Horizons

<a id="A4.SS1"></a>

### D.1 Logical spacetime volume and architectural assumptions

<a id="block-A4.SS1-block-1"></a>

Throughout the fault-tolerant benchmarks in this work, candidate circuits and literature baselines are compared at matched system encodings and error budgets by their logical spacetime volume $Q\cdot\mathcal{T}$, defined as total peak logical qubits $Q$ (including clean workspace ancillas) multiplied by total $T$-gate count $\mathcal{T}$, pricing clean-ancilla Toffoli gates at $4\,\mathcal{T}$ via measurement-based temporary-$\mathrm{AND}$ uncomputation \[[259](<https://arxiv.org/html/2611.09822v3#biba.bibx108>), [174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>), [260](<https://arxiv.org/html/2611.09822v3#biba.bibx109>)\]. This metric models compilation onto two-dimensional planar surface-code architectures using lattice surgery \[[261](<https://arxiv.org/html/2611.09822v3#biba.bibx110>), [262](<https://arxiv.org/html/2611.09822v3#biba.bibx111>), [194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>)\]. Because Clifford gates can be tracked in the classical Pauli frame or absorbed into multi-qubit Pauli product measurements, fault-tolerant overhead is dominated by preparing non-Clifford magic states through distillation or cultivation \[[263](<https://arxiv.org/html/2611.09822v3#biba.bibx112>), [264](<https://arxiv.org/html/2611.09822v3#biba.bibx113>), [265](<https://arxiv.org/html/2611.09822v3#biba.bibx114>), [194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>)\]. Under Pauli-based or serial-factory execution—where magic states are consumed at a fixed logical cycle rate—execution time tracks $\mathcal{T}$ while memory footprint tracks $Q$, making $Q\cdot\mathcal{T}$ proportional to $Q_{\mathrm{logical}}\cdot D_{\mathrm{cycles}}$, the topological spacetime volume \[[194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>), [266](<https://arxiv.org/html/2611.09822v3#biba.bibx115>), [152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>), [267](<https://arxiv.org/html/2611.09822v3#biba.bibx116>), [240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>), [153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>)\]. Optimizing $Q\cdot\mathcal{T}$ also regularizes space–time tradeoffs against degenerate extremes—neither permitting unbounded clean-ancilla QROAM replication to suppress $T$-gate count \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>), [268](<https://arxiv.org/html/2611.09822v3#biba.bibx117>), [155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\] nor forcing deep ancilla-starved recomputation to save a handful of qubits \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>), [269](<https://arxiv.org/html/2611.09822v3#biba.bibx118>)\]—and aligns directly with the $(Q,\text{Toffoli}/\mathcal{T})$ metrics reported across standard resource-estimation benchmarks \[[154](<https://arxiv.org/html/2611.09822v3#biba.bibx3>), [270](<https://arxiv.org/html/2611.09822v3#biba.bibx119>), [178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>), [239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>), [271](<https://arxiv.org/html/2611.09822v3#biba.bibx120>), [199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>), [211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>), [209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\].

Physical device cost departs from $Q\cdot\mathcal{T}$ in two principal architectural regimes. First, provisioning parallel magic-state factories compresses execution depth from $\mathcal{T}$ toward $T$-depth at the expense of dedicated factory footprint and routing overhead \[[194](<https://arxiv.org/html/2611.09822v3#biba.bibx43>), [152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>), [267](<https://arxiv.org/html/2611.09822v3#biba.bibx116>)\]. Second, architectures incorporating non-local connectivity, high-rate quantum low-density parity-check (qLDPC) memory, or Active Volume compilation decouple idle memory storage from active reaction layers, lowering the spatial cost of inactive data qubits relative to active workspace \[[272](<https://arxiv.org/html/2611.09822v3#biba.bibx121>), [273](<https://arxiv.org/html/2611.09822v3#biba.bibx122>), [240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>), [241](<https://arxiv.org/html/2611.09822v3#biba.bibx90>), [212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\]. Because every verified scientific simulation in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b reduces both $Q$ and $\mathcal{T}$ relative to its baseline, our improvements hold under any monotone weighting of logical space and non-Clifford-gate count.

<a id="A4.SS2"></a>

### D.2 Fault-tolerant capability regimes and hardware horizons

Table S1: Fault-tolerant capability regimes and hardware horizons. Summary of the capability regimes referenced in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b, listing plotted dashed-line midpoints $(Q,\mathcal{T})$, nominal upper-bound ceilings $(Q_{\max},\mathcal{T}_{\max})$ (rendered in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b with 14-step normal-quantile feathering spanning $Q\approx 5.9\times 10^{2}\text{--}1.7\times 10^{3}$, $\mathcal{T}\approx 3.5\times 10^{8}\text{--}2.9\times 10^{9}$ for teraquop planar and $Q\approx 5.0\times 10^{3}\text{--}2.0\times 10^{4}$, $\mathcal{T}\approx 3.5\times 10^{10}\text{--}2.9\times 10^{11}$ for FASQ), nominal spacetime volume $Q\cdot\mathcal{T}$, and representative benchmarks and references.

<table>
<tr><th>Capability regime</th><th>Midpoint $(Q,\mathcal{T})$</th><th>$Q$ ceiling</th><th>$\mathcal{T}$ ceiling</th><th>$Q{\cdot}\mathcal{T}$</th><th>Benchmarks &amp; references</th></tr>
<tr><td>Medium-term FTQC (teraquop)</td><td>$(10^{3},\,10^{9})$</td><td>$5{\times}10^{2}\text{--}2{\times}10^{3}$</td><td>$3{\times}10^{8}\text{--}3{\times}10^{9}$</td><td>$10^{12}$</td><td>Cytochrome P450; compact catalysis &amp; ECC [<a href="https://arxiv.org/html/2611.09822v3#biba.bibx115">266</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx119">270</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx88">239</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx114">265</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx89">240</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx60">211</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx61">212</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx7">158</a>]</td></tr>
<tr><td>Application-scale FTQC (FASQ)</td><td>$(10^{4},\,10^{11})$</td><td>$5{\times}10^{3}\text{--}2{\times}10^{4}$</td><td>$3{\times}10^{10}\text{--}3{\times}10^{11}$</td><td>$10^{15}$</td><td>Stopping power, $\mathrm{C_{23}H_{20}N_{3}O}$ dynamics; catalysis, materials &amp; RSA [<a href="https://arxiv.org/html/2611.09822v3#biba.bibx3">154</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx123">274</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx27">178</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx1">152</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx116">267</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx121">272</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx120">271</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx48">199</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx2">153</a>, <a href="https://arxiv.org/html/2611.09822v3#biba.bibx58">209</a>]</td></tr>
</table>

<a id="block-A4.SS2-block-3"></a>

To place end-to-end logical resource counts in hardware context, Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b overlays two fault-tolerant capability regimes (Table [S1](<https://arxiv.org/html/2611.09822v3#A4.T1>)) as upper-bound resource envelopes $(Q\leq Q_{\max},\,\mathcal{T}\leq\mathcal{T}_{\max})$, with dashed lines at reference midpoints and feathered boundaries reflecting spread across estimates.

<a id="A4.SS2.SSS0.Px1"></a>

#### Medium-term FTQC (teraquop planar).

Gidney et al. \[[266](<https://arxiv.org/html/2611.09822v3#biba.bibx115>)\] (Sec. 2.1) define the teraquop scale at $10^{12}$ reliable logical operations ($\sim 10^{3}$ logical qubits over $\sim 10^{9}$ steps at per-step error $\sim 10^{-12}$), and Low et al. \[[212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\] quantify how denser planar surface-code layouts and magic-state cultivation set the corresponding qubit and $T$-gate ceilings across planar code distances. This regime sits at midpoint $Q=10^{3}$, $\mathcal{T}=10^{9}$, and $Q\cdot\mathcal{T}=10^{12}$, with feathered ceiling $Q\in[5\times 10^{2},\,2\times 10^{3}]$ and $\mathcal{T}\in[3\times 10^{8},\,3\times 10^{9}]$.

<a id="A4.SS2.SSS0.Px2"></a>

#### Application-scale FTQC (FASQ / petaquop).

Preskill \[[153](<https://arxiv.org/html/2611.09822v3#biba.bibx2>)\] defines the fault-tolerant application-scale quantum (FASQ) regime for full-scale scientific and cryptographic workloads, and Beverland et al. \[[152](<https://arxiv.org/html/2611.09822v3#biba.bibx1>)\] (Table I) establish the logical-qubit and $T$-gate budgets required across materials, chemistry, dynamics, and factoring. This regime sits at midpoint $Q=10^{4}$, $\mathcal{T}=10^{11}$, and $Q\cdot\mathcal{T}=10^{15}$, with feathered ceiling $Q\in[5\times 10^{3},\,2\times 10^{4}]$ and $\mathcal{T}\in[3\times 10^{10},\,3\times 10^{11}]$.

<a id="A5"></a>

## Appendix E Parallel Grover Search

<a id="A5.SS1"></a>

### E.1 Problem specification and oracle model

![Figure S6](figures/A5.F6.png)

<a id="block-A5.SS1-block-1"></a>

Figure S6: Parallel Grover query model. Workspace allocation (qset, $+0$ query cost) initializes $m$ query registers of $n+1$ qubits and $w$ ancilla qubits in $|0\rangle^{\otimes Q}$ together with a classical state $\sigma\in\Sigma$. Unitary evolution (step, $+0$) applies any $S$-independent unitary $U\in\mathrm{U}(2^{Q})$ across all $Q$ qubits. Parallel oracle querying (oracle, $+1$) applies $O_{S}^{\otimes m}$ (Eq. ([5](<https://arxiv.org/html/2611.09822v3#A5.E5>))) simultaneously across $m$ disjoint $(n+1)$-qubit subregisters. Projective measurement (measure, $+0$) measures a subregister into classical variable $y$ in $\sigma$ while leaving unmeasured wires coherent. Classical control (qif/qwhile; Appendix [A](<https://arxiv.org/html/2611.09822v3#A1>)) branches and loops on predicates of $\sigma$, weighting each oracle round by the active-branch probability $\sum_{\sigma:\,b(\sigma)}\mathrm{Tr}(\Delta_{t}(\sigma))$ until $\neg b(\sigma)$ outputs the result.

<a id="block-A5.SS1-block-2"></a>

Given a search space $\{0,\dots,N-1\}$ of size $N=2^{n}$ ($n\geq 1$) and an unknown marked subset $S\subseteq\{0,\dots,N-1\}$ of known size $|S|=k\leq N$, we study two exact (zero-error) search problems across $(m,k)\in\{1,2,4,\dots,1024\}^{2}$ ($121$ settings): Find-Any, which must terminate with probability $1$ and output an index $x\in S$, and Find-All, which must terminate with probability $1$ and output all $k$ elements of $S$ (so algorithms cannot trade error probability for fewer queries). We allow up to $m$ parallel queries per round \[[214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>), [275](<https://arxiv.org/html/2611.09822v3#biba.bibx124>)\] (Fig. [S6](<https://arxiv.org/html/2611.09822v3#A5.F6>)). Access to $S$ is given by the $(n+1)$-qubit reversible marking oracle

$$
O_{S}|b\rangle|x\rangle=|b\oplus[x\in S]\rangle|x\rangle,\qquad b\in\{0,1\},\;x\in\{0,\dots,N-1\},\tag{4}
$$

<a id="block-A5.SS1-block-4"></a>

where $b$ is a single-qubit target bit and $x$ is the $n$-qubit index. Starting from $|0\rangle^{\otimes Q}$ on an unconstrained $Q$-qubit workspace, an algorithm interleaves zero-cost $S$-independent unitaries, projective measurements, and classical branching or loops with parallel $m$-query rounds

$$
O_{S}^{\otimes m}=\bigotimes_{j=1}^{m}O_{S}^{(j)}\tag{5}
$$

<a id="block-A5.SS1-block-6"></a>

on any $m$ disjoint $(n+1)$-qubit registers, weighted in expectation by the probability of being in an active loop branch. To query fewer than $m$ registers in a round, the remaining target qubits are prepared in $|+\rangle$, on which $O_{S}$ acts as the identity. Our cost metric is the expected number of parallel query rounds (query depth).

Depending on how the target qubit $b$ is prepared (and optionally measured), a single call to $O_{S}$ implements three operations. Preparing $|b\rangle=|-\rangle$ applies the phase flip $(I-2\Pi_{S})$ for $\Pi_{S}=\sum_{x\in S}|x\rangle\!\langle x|$, while preparing $|b\rangle=|0\rangle$ and measuring $b$ tests whether $x\in S$ (and once a subset $F\subseteq S$ has been found, unmarking $F$ via $|b\rangle|x\rangle\mapsto|b\oplus[x\in F]\rangle|x\rangle$ is independent of $S$ and costs zero queries). More generally, preparing $|\chi_{\gamma}\rangle=\cos\gamma\,|0\rangle-\sin\gamma\,|1\rangle$ for $\gamma\in(0,\pi/4)$ leaves $|\chi_{\gamma}\rangle$ unchanged for $x\notin S$ while mapping $|\chi_{\gamma}\rangle\mapsto-\sin(2\gamma)|\chi_{\gamma}\rangle+\cos(2\gamma)|\chi_{\gamma}^{\perp}\rangle$ for $x\in S$, where $|\chi_{\gamma}^{\perp}\rangle=\sin\gamma\,|0\rangle+\cos\gamma\,|1\rangle$. Measuring $b$ in $\{|\chi_{\gamma}\rangle,|\chi_{\gamma}^{\perp}\rangle\}$ therefore applies, with $\kappa=\cos^{2}(2\gamma)\in(0,1)$,

$$
M_{1}=\sqrt{\kappa}\,\Pi_{S}\;(\text{outcome }|\chi_{\gamma}^{\perp}\rangle),\qquad M_{0}=(I-\Pi_{S})-\sqrt{1-\kappa}\,\Pi_{S}\;(\text{outcome }|\chi_{\gamma}\rangle)\text{:}\tag{6}
$$

<a id="block-A5.SS1-block-9"></a>

a click ($|\chi_{\gamma}^{\perp}\rangle$) projects onto $S$ with no false positives, while a no-click ($|\chi_{\gamma}\rangle$) only slightly damps the marked amplitude and still flips its sign by $-1$ for the next Grover diffusion step.

<a id="block-A5.SS1-block-10"></a>

To compare algorithms independent of the domain size $N=2^{n}$, let $\mathbb{E}[D_{n}(S)]$ be a program’s expected query depth on marked set $S$, and let $\overline{D}_{n,m,k}=\binom{N}{k}^{-1}\sum_{|S|=k}\mathbb{E}[D_{n}(S)]$ be its average over all $k$-element subsets (which equals the worst-case expected depth over $|S|=k$, since indices can be randomly permuted at zero query cost). We normalize $\overline{D}_{n,m,k}$ by the fixed reference scales

$$
D_{\mathrm{std}}^{\mathrm{any}}(N,m,k)=\frac{\pi}{4}\sqrt{\frac{N}{mk}},\quad D_{\mathrm{std}}^{\mathrm{all}}(N,m,k)=\sum_{r=1}^{k}\frac{\pi}{4}\sqrt{\frac{N}{mr}}=\frac{\pi}{4}\,H_{k}^{(1/2)}\sqrt{\frac{N}{m}},\quad H_{k}^{(1/2)}=\sum_{r=1}^{k}\frac{1}{\sqrt{r}},\tag{7}
$$

<a id="block-A5.SS1-block-12"></a>

and certify in Lean a rational constant $R(m,k)$ satisfying $\overline{D}_{n,m,k}\leq R(m,k)\,D_{\mathrm{std}}(2^{n},m,k)$ for all sufficiently large $n$. Because $D_{\mathrm{std}}$ is only a fixed reference scale rather than a lower bound, all speedups are computed as ratios against published baselines in the same metric, so $D_{\mathrm{std}}$ cancels out.

<a id="A5.SS2"></a>

### E.2 Published prior baselines

<a id="block-A5.SS2-block-1"></a>

Every quantum search protocol obeys $\Theta(\sqrt{N})$ scaling in domain size \[[276](<https://arxiv.org/html/2611.09822v3#biba.bibx125>), [213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>), [214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>)\], with parallel round lower bounds $\Omega(\sqrt{N/(mk)})$ for Find-Any (Zalka’s bound \[[214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>)\] for $k=1$; the general case follows from the parallel adversary bound \[[275](<https://arxiv.org/html/2611.09822v3#biba.bibx124>)\]) and $\Omega(\sqrt{Nk/(m\min(m,k))})$ for Find-All \[[216](<https://arxiv.org/html/2611.09822v3#biba.bibx65>)\], so protocols at fixed $(m,k)$ compete on their asymptotic leading constant $r(m,k)=\lim_{N\to\infty}\overline{D}_{n,m,k}/D_{\mathrm{std}}(N,m,k)$. Prior work spans exact and fixed-point amplitude amplification \[[160](<https://arxiv.org/html/2611.09822v3#biba.bibx9>), [277](<https://arxiv.org/html/2611.09822v3#biba.bibx126>), [278](<https://arxiv.org/html/2611.09822v3#biba.bibx127>), [279](<https://arxiv.org/html/2611.09822v3#biba.bibx128>), [280](<https://arxiv.org/html/2611.09822v3#biba.bibx129>)\]; early-stopped projective restarts with domain partitioning, independent parallel runs, or sequential strike-out \[[213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>), [214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>), [215](<https://arxiv.org/html/2611.09822v3#biba.bibx64>), [281](<https://arxiv.org/html/2611.09822v3#biba.bibx130>)\]; and damped or weakly measured loops \[[282](<https://arxiv.org/html/2611.09822v3#biba.bibx131>), [283](<https://arxiv.org/html/2611.09822v3#biba.bibx132>), [217](<https://arxiv.org/html/2611.09822v3#biba.bibx66>)\]. We compare against the strongest published protocol in each $(m,k)$ regime, together with the direct combination of Zalka’s partition \[[214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>)\] and weakly measured search \[[217](<https://arxiv.org/html/2611.09822v3#biba.bibx66>)\] on the $k=1$ boundary (Fig. [S7](<https://arxiv.org/html/2611.09822v3#A5.F7>)). Parallel quantum-walk and learning-graph algorithms \[[275](<https://arxiv.org/html/2611.09822v3#biba.bibx124>)\] target multi-element certificates and do not tighten these baselines.

![Figure S7](figures/A5.F7.png)

Figure S7: Published parallel Grover baselines and verified bounds across $m,k\in\{1,2,4,\dots,1024\}$. a Each row evaluates a prior baseline protocol in our zero-error asymptotic metric (⋆ marks the winning baseline in each regime); the bottom rows summarize our Lean-verified circuits and speedups over the baseline envelope. Values report asymptotic expected parallel rounds as $N=2^{n}\to\infty$ relative to $D_{\mathrm{std}}$ (Eq. ([7](<https://arxiv.org/html/2611.09822v3#A5.E7>))). b, c Winning baseline envelopes for finding any one (b) or all $k$ (c) targets, on a logarithmic colour scale, with dashed contours marking regime boundaries.

<a id="A5.SS2.SSS0.Px1"></a>

#### Boundary regime (m = 1 or k = 1; BBHT, ZK, WG).

On a single register ($m=1$) with $k$ marked items, each Grover iteration rotates the state toward $S$ by $2\theta=2\arcsin\sqrt{k/N}\approx 2\sqrt{k/N}$, so $j$ iterations reach angle $\phi=(2j+1)\theta\approx 2j\sqrt{k/N}$ and find a marked item upon measurement with probability $\sin^{2}\phi$. Standard Grover runs to $\phi=\pi/2$ ($r=1$), where $\sin^{2}\phi$ flattens out and the final queries buy little success probability. Boyer, Brassard, Høyer and Tapp \[[213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>)\] (BBHT) instead stop early at $\phi<\pi/2$ and restart from scratch on failure: each run costs $j\approx\frac{\phi}{2}\sqrt{N/k}$ queries and succeeds after $1/\sin^{2}\phi$ expected runs, minimizing expected queries $\frac{\phi}{2\sin^{2}\phi}\sqrt{N/k}$ at

$$
r_{\mathrm{BBHT}}=\frac{2\phi^{*}}{\pi\sin^{2}\phi^{*}}\approx 0.878567,\qquad\tan\phi^{*}=2\phi^{*}\;\;(\phi^{*}\approx 1.1656,\;\sin^{2}\phi^{*}\approx 0.845).\tag{8}
$$

Across the $m=1$ and $k=1$ boundaries of Find-Any and Find-All (which coincide when $k=1$), $r_{\mathrm{BBHT}}$ sets the projective-restart baseline. For $k=1$ and $m\geq 2$ in both tasks, Zalka \[[214](<https://arxiv.org/html/2611.09822v3#biba.bibx63>)\] (ZK) splits $\{0,\dots,N-1\}$ into $m$ disjoint blocks of size $N/m$ so the unique block containing the target runs at $\phi^{*}$ ($r_{\mathrm{ZK}}=r_{\mathrm{BBHT}}$). For $m=1$ and $k\geq 2$ in Find-All, repeating early-stopped search $k$ times while unmarking each found item at zero query cost \[[213](<https://arxiv.org/html/2611.09822v3#biba.bibx62>), [281](<https://arxiv.org/html/2611.09822v3#biba.bibx130>)\] achieves $r_{\mathrm{BBHT}}$ at every stage.

<a id="block-A5.SS2.SSS0.Px1-block-4"></a>

On the single-register boundary ($m=1,k\geq 1$ for Find-Any, and $(1,1)$ for Find-All), early-stopped projective search is superseded by Fang and Heunen’s weakly measured loop \[[217](<https://arxiv.org/html/2611.09822v3#biba.bibx66>)\] (WG), which avoids discarding the amplified state when a check misses. Instead, WG first runs standard Grover halfway to $\alpha^{*}=\pi/4$ ($50\%$ marked weight, costing $\frac{1}{2}\,D_{\mathrm{std}}^{\mathrm{any}}$), and then alternates calibrated weak checks (Eq. ([6](<https://arxiv.org/html/2611.09822v3#A5.E6>)), $\kappa\approx 8\sqrt{k/N}$) with single zero-query diffusion steps. Whenever a check does not click, its slight damping and $-1$ phase flip are offset by the diffusion step to return the state back to $\pi/4$ without losing superposition; waiting for a click adds $\frac{1}{\pi}\,D_{\mathrm{std}}^{\mathrm{any}}$ expected queries, giving

$$
r_{\mathrm{WG}}=\frac{1}{2}+\frac{1}{\pi}\approx 0.818310.\tag{9}
$$

For $k=1$ and $m\geq 2$ in both tasks, running WG inside each of Zalka’s $m$ disjoint blocks of size $N/m$ (ZK+WG) is a direct substitution—the $m-1$ empty blocks never click while the unique target block evolves at scale $\sqrt{N/m}$—upgrading the $k=1$ boundary from $r_{\mathrm{ZK}}\approx 0.879$ to $r_{\mathrm{WG}}\approx 0.818$.

<a id="A5.SS2.SSS0.Px2"></a>

#### Interior Find-Any (m,k ≥ 2; GW).

<a id="block-A5.SS2.SSS0.Px2-block-1"></a>

When both $m\geq 2$ and $k\geq 2$, naive domain splitting breaks down because each of the $m$ blocks receives a random, unknown number of targets (and most blocks are empty when $k<m$), causing multi-target blocks to rotate faster and overshoot $\pi/2$ under any fixed schedule. Gingrich, Williams and Cerf \[[215](<https://arxiv.org/html/2611.09822v3#biba.bibx64>)\] (GW) avoid this unknown-load problem by running all $m$ registers independently over the full domain $\{0,\dots,N-1\}$. Stopping all $m$ registers synchronously after $j\approx\frac{\phi}{2}\sqrt{N/k}$ rounds finds a target unless all $m$ independent measurements miss (probability $\cos^{2m}\phi$); minimizing expected rounds $\frac{\phi}{2(1-\cos^{2m}\phi)}\sqrt{N/k}$ selects $\phi^{*}(m)<\phi^{*}$ with

$$
r_{\mathrm{GW}}(m)=\frac{2\sqrt{m}\,\phi^{*}(m)}{\pi\bigl(1-\cos^{2m}\phi^{*}(m)\bigr)},\qquad 1-\cos^{2m}\phi^{*}(m)\bigl(1+2m\phi^{*}(m)\tan\phi^{*}(m)\bigr)=0.\tag{10}
$$

Because $m$ unentangled copies combine success probabilities classically rather than coherently, $r_{\mathrm{GW}}(m)$ is independent of $k$ and degrades from $0.942$ at $m=2$ to $0.997$ at $m=1024$, setting the published baseline on all $100$ interior cells (Fig. [S7](<https://arxiv.org/html/2611.09822v3#A5.F7>)b).

<a id="A5.SS2.SSS0.Px3"></a>

#### Interior Find-All (m,k ≥ 2; GR0).

<a id="block-A5.SS2.SSS0.Px3-block-1"></a>

To let $m$ registers find distinct targets in parallel at $\sqrt{N/m}$ block scale, Grover and Radhakrishnan \[[216](<https://arxiv.org/html/2611.09822v3#biba.bibx65>)\] randomly partition $\{0,\dots,N-1\}$ into $m$ blocks of size $N/m$. Each block receives an unknown target count $c$, which they clear via a descending staircase of exact amplitude-amplification stages \[[279](<https://arxiv.org/html/2611.09822v3#biba.bibx128>)\] at assumed counts $s=t,t-1,\dots,1$ (total depth $H_{t}^{(1/2)}\frac{\pi}{4}\sqrt{N/m}$), testing and unmarking hits after each stage. Counting down guarantees emptying every block with $c\leq t$: even if stages $s>c$ miss, once $s$ reaches a block’s remaining count $c$, the assumed and actual counts match, finding a target with certainty and stepping $c\to c-1$ in lockstep with $s$ (while mismatched stages $s\neq c$ still hit with probability $\sin^{2}(\frac{\pi}{2}\sqrt{c/s})$). Because Theorem 3 of ref. \[[216](<https://arxiv.org/html/2611.09822v3#biba.bibx65>)\] leaves tail cleanup at $\Theta(\cdot)$ order, we evaluate a concrete two-pass schedule (GR0): Pass 1 runs a staircase from the optimal integer cap $1\leq t_{1}^{*}(m,k)<k$ down to $1$, and Pass 2 clears all $R_{1}=k-|\text{found}|$ remaining targets via a second staircase from $R_{1}$ down to $1$ (Fig. [S7](<https://arxiv.org/html/2611.09822v3#A5.F7>)c).

<a id="A5.SS3"></a>

### E.3 Algorithmic mechanisms in verified circuits

<a id="block-A5.SS3-block-1"></a>

Beyond the $k=1$ boundary (ZK+WG), our interior baselines are single-paper protocols; Fig. [S8](<https://arxiv.org/html/2611.09822v3#A5.F8>)a separates automatic recombinations, which join unchanged published subroutines by new classical control, from new coherent mechanisms, which alter the quantum dynamics or measurements within a search stage, listing a few of the many mechanisms found per class. Since mechanisms interact, Fig. [S7](<https://arxiv.org/html/2611.09822v3#A5.F7>)a reports only joint speedups, while Fig. [S8](<https://arxiv.org/html/2611.09822v3#A5.F8>)b,c details the verified relative round costs and winning circuit regimes across $(m,k)$.

<a id="block-A5.SS3-block-2"></a>

Unlike distributed baselines such as GW and GR0 that run $m$ uncoupled registers, our shared-workspace model allows inter-slot entanglement: coupling all $m$ slots via odd-parity fanout in Find-Any extends the boundary constant $r_{\mathrm{WG}}$ to every interior $(m,k\geq 2)$, while Find-All entangles slot and storage registers. In our strongest Find-All mechanism ($k\lesssim m$; Fig. [S9](<https://arxiv.org/html/2611.09822v3#A5.F9>)), three ideas avoid the bin-load variance of partitioned search: (i) preparing a uniform superposition over $m$-element subsets $|E\rangle$ so one $|-\rangle$-marked call to $O_{S}^{\otimes m}$ (unmarking archived hits $F$) supplies all target information via the hit-parity phase $(-1)^{|E\cap(S\setminus F)|}$; (ii) alternating that query with a fixed, $S$-independent reflection on the Johnson-scheme eigenspaces of $m$-subsets \[[275](<https://arxiv.org/html/2611.09822v3#biba.bibx124>)\]—analogous to Grover’s uniform diffusion step and compiled via quantum singular value transformation (QSVT) \[[177](<https://arxiv.org/html/2611.09822v3#biba.bibx26>)\], plus a terminal phase kick, driving the hit count $w=|E\cap(S\setminus F)|$ coherently from $0$ to $r=|S\setminus F|$ in under $\sqrt{N/m}$ rounds; and (iii) batch readout, where one final query writes all $w\in[w_{\mathrm{lo}},r]$ hits into $|F\rangle$ at once, retrying or clearing any remainder via exact loops. Although $S$-independent unitaries carry zero query cost in the black-box specification, our verified circuits use $O((m+k)n)$ qubits and each unitary step compiles into $\mathrm{poly}(n,m,k)$ elementary gates (within error $2^{-\Omega(n)}$ for the QSVT-compiled diffusion steps).

![Figure S8](figures/A5.F8.png)

<a id="block-A5.SS3-block-4"></a>

Figure S8: Verified parallel Grover mechanisms and relative round costs across $m,k\in\{1,2,4,\dots,1024\}$. a Selected algorithmic mechanisms in our Lean-verified circuits (not exhaustive). b, c Verified asymptotic expected parallel rounds relative to $D_{\mathrm{std}}$ (Eq. ([7](<https://arxiv.org/html/2611.09822v3#A5.E7>))) for finding any one (b) or all $k$ (c) targets, on a logarithmic colour scale, with dashed contours and labels marking the winning mechanism in each region (cf. panel a; WG and ZK+WG denote ties with the baseline).

![Figure S9](figures/A5.F9.png)

<a id="block-A5.SS3-block-5"></a>

Figure S9: High-level circuit for the collective Johnson-graph walk. Registers hold $m$ address slots ($|0\rangle^{\otimes mn}$), $m$ flag qubits ($|0\rangle^{\otimes m}$), and a $kn$-qubit archive $|F\rangle$ of found targets. (1) prep prepares the uniform superposition $\binom{N}{m}^{-1/2}\sum_{|E|=m}|E\rangle$ over $m$-subsets $E\subseteq\{0,\dots,N-1\}$. (2) For $L<\sqrt{N/m}$ rounds ($L\times$), $(XH)^{\otimes m}$ ($X$ then $H$) and $(HX)^{\otimes m}$ switch the flags between $|0\rangle^{\otimes m}$ and $|-\rangle^{\otimes m}$; $O_{S}^{\otimes m}$ is the parallel marking oracle; $U_{F}$ unmarks slots already in $F$, so the dotted block applies $(-1)^{|E\cap(S\setminus F)|}$; and $R_{\mathrm{J}}$ is an $S$-independent Johnson-graph reflection compiled via QSVT. (3) After one call to $O_{S}^{\otimes m}$ and $U_{F}$, $U_{\mathrm{store}}$ records new hits into $|F^{\prime}\rangle$ and measuring the flags outputs the hit count $w=|E\cap(S\setminus F)|$.

<a id="A6"></a>

## Appendix F Fixed-Point arcsin

<a id="A6.SS1"></a>

### F.1 Problem and specification

Many fault-tolerant quantum algorithms require converting amplitudes held in a quantum register into single-qubit rotation angles, including probability-distribution loading and state preparation \[[284](<https://arxiv.org/html/2611.09822v3#biba.bibx133>)\], eigenvalue inversion in quantum linear-system solvers \[[285](<https://arxiv.org/html/2611.09822v3#biba.bibx134>)\], and quantum rejection and Metropolis sampling \[[286](<https://arxiv.org/html/2611.09822v3#biba.bibx135>), [287](<https://arxiv.org/html/2611.09822v3#biba.bibx136>)\]. Implementing these rotations via phase kickback or controlled Pauli gates first evaluates $\arcsin(y)$ reversibly on a fixed-point register, a subroutine that often dominates the non-Clifford gate count \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>), [288](<https://arxiv.org/html/2611.09822v3#biba.bibx137>)\].

<a id="block-A6.SS1-block-2"></a>

We consider reversible evaluation $|y\rangle|b\rangle|0\rangle^{\otimes m}\mapsto|y\rangle|(b+z(y))\bmod 2^{k}\rangle|0\rangle^{\otimes m}$ on $k=25$ signed two’s-complement registers, where $y$ is the input register, $b$ is the output register, and $z(y)$ approximates $\arcsin(y)$. Because $\frac{\mathrm{d}}{\mathrm{d}y}\arcsin(y)=(1-y^{2})^{-1/2}$ diverges as $|y|\to 1$, uniform polynomial approximations require high degree near the endpoints, while iterative shift-and-add methods accumulate deep chains of reversible multiplications \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>), [289](<https://arxiv.org/html/2611.09822v3#biba.bibx138>)\]. Our signed two’s complement representation ($1$ sign, $1$ integer and $23$ fractional bits) matches the float32 mantissa size. With $23$ fractional bits, the smallest representable value is $2^{-23}\simeq 1.19\times 10^{-7}$. Allowing for some small rounding error, we require a maximum absolute error $|z(y)-\arcsin(y)|\leq 1.25\times 10^{-7}$ across all $2^{24}+1=16{,}777{,}217$ inputs $y\in[-1,1]$. Using $m$ clean ancillas, a candidate program in Clifford+$T$ gates and mid-circuit measurements must apply this exact action across all $2^{50}$ basis states $(y,b)$ and return all ancillas to $|0\rangle^{\otimes m}$.

![Figure S10](figures/A6.F10.png)

Figure S10: Baseline circuit to implement the $\arcsin$ function \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\], using $n=35$, $m=3$, $d=3$. After restricting to the positive range, the approximation splits the calculation of $\arcsin$ between a degree-$3$ polynomial in the interval $[0,0.5]$ and a Newton iteration for the square root function in $[0.5,1]$. Number of $T$ gates and number of qubits calculated as in their Appendix, for reversible computation.

<a id="A6.SS2"></a>

### F.2 Baseline

<a id="block-A6.SS2-block-1"></a>

We consider as baseline the algorithm by Häner et al. \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\], which uses a piecewise-polynomial approach.11 1 This approximation is stronger than the quantum CORDIC paper \[[289](<https://arxiv.org/html/2611.09822v3#biba.bibx138>)\]. While their paper does not report results for our input type, we ran the code from their github repository and got a maximum error of $9\times 10^{-3}$. We compare against their $(n,m,d)=(35,3,3)$ fixed-point two’s-complement configuration, whose maximum error $\sim 10^{-6}$ is driven by the error in the square root computation (Fig. 6 of ref. \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\]), and larger than our target bound of $1.25\times 10^{-7}$, thus providing a lower bound on the spacetime cost. As shown in Fig. [S10](<https://arxiv.org/html/2611.09822v3#A6.F10>), this baseline splits the computation of $\arcsin$ on the interval $\left[-1,1\right]$ between a degree-$3$ polynomial evaluation on $\left[-0.5,0.5\right]$ and a Newton iteration for $\sqrt{z}=z\cdot 1/\sqrt{z}$.22 2 Our baseline requires $\sqrt{z}=z/\sqrt{z}$. A recent circuit \[[290](<https://arxiv.org/html/2611.09822v3#biba.bibx139>)\] computes $1/\sqrt{x}$ to $2^{-24}$ relative error in $7{,}735$ Toffoli gates and $260$ qubits. Using this here would slightly increase the total number of qubits but significantly reduce the number of gates. The number of gates for the square-root could be cut by a factor of up to $10$, and the baseline \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\] cost by up to $3\times$. As their Appendix D describes, the former can be implemented using $140$ qubits and requires $17{,}304$ Toffoli gates and the same amount for reversing the computation, for a total of $34{,}608$ Toffoli gates ($138{,}432$ $T$ gates). The latter can be implemented using $245$ qubits and requires $73{,}442$ Toffoli gates to implement it as the product of $z$ with $1/\sqrt{z}$, as described in their Appendix C.2, and an additional $2{,}094$ Toffoli gates to also reverse the product operation, being $1/\sqrt{z}$ already a reversible operation, for a total of $75{,}536$ Toffolis ($302{,}144$ $T$ gates).

<a id="block-A6.SS2-block-2"></a>

We calculate a lower bound of the full circuit spacetime cost of $1.08\times 10^{8}$ by using the maximum number of required qubits in the two subcircuits, $245$, and the sum of the $T$ gates required for them, $440{,}576$ $T$ gates. We thus ignore persistent registers and the smaller branch-selection and combination blocks, which would further increase the cost.

<a id="A6.SS3"></a>

### F.3 Program Discovery

<a id="block-A6.SS3-block-1"></a>

While our library lets us represent arbitrary gates and formally verify the cost of algorithms, the kickmix model \[[158](<https://arxiv.org/html/2611.09822v3#biba.bibx7>)\] restricts circuits to classical reversible gates ($X$, $\mathrm{CNOT}$, Toffoli and $\mathrm{CSWAP}$), Pauli-$X$ measurement-based uncomputation \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>)\], and diagonal $Z$, $CZ$ and $CCZ$ phase corrections so that every basis input stays a single signed basis state $(-1)^{\phi}|x\rangle$ along each measurement branch, enabling fast classical fuzz-testing without statevector simulation. The fact that agentic systems can produce compact arithmetic quantum circuits by using the feedback from kickmix testing is already known \[[269](<https://arxiv.org/html/2611.09822v3#biba.bibx118>), [290](<https://arxiv.org/html/2611.09822v3#biba.bibx139>)\], and has also been applied to a related $\arcsin(c/X)$ subroutine, but on a restricted input range rather than $[-1,1]$. We exploited this speed by first running our multi-agent system to search for circuits using kickmix. The result was a circuit of spacetime cost $498{,}168$ ($102$ qubits, $4{,}884$ $T$ gates).

<a id="block-A6.SS3-block-2"></a>

However, the kickmix gate set is limited, and we expect that the full Clifford+$T$ gate set could allow for a more efficient implementation. To obtain more general algorithms that are not limited by the kickmix restrictions, we need a different way to verify the circuit, and this is where our formal library helps. Starting from the algorithm obtained with kickmix, we instructed agents to start using our quantum algorithm specification and verification framework to further optimize the algorithm. For a while, agents were able to continue optimizing the circuit up to a cost of $415{,}200$ ($100$ qubits, $4{,}152$ $T$ gates, Fig. [S11](<https://arxiv.org/html/2611.09822v3#A6.F11>)a and Table [S2](<https://arxiv.org/html/2611.09822v3#A6.T2>)), which continued using a restricted set of gates, and could still be translated to kickmix. Subsequently, the agents truly took advantage of our library and produced circuits that could not be expressed and efficiently simulated with kickmix (Fig. [S11](<https://arxiv.org/html/2611.09822v3#A6.F11>)b,c). This drove the cost down by a further $11\%$ to $369{,}800$ ($100$ qubits, $3{,}698$ $T$ gates), $290\times$ below the baseline \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\] (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)a,c).

In other words, for this problem, our agents using kickmix can do an efficient search in the restricted subspace without the overhead of a formal proof. Afterwards, our agents using formal verification lift the gate-set restriction and allow further optimization that would not be easily testable classically. Every circuit that can be simulated with kickmix can also be proven in Lean, and seeding a Lean discovery agent from a kickmix solution further improves the solution.

<a id="block-A6.SS3-block-4"></a>

Table S2: Summary for fixed-point $\arcsin(y)$ on $[-1,1]$ at $k=25$. The baseline evaluates the $(n,m,d)=(35,3,3)$ configuration \[[161](<https://arxiv.org/html/2611.09822v3#biba.bibx10>)\], assuming $4\,T$ per Toffoli \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>), [259](<https://arxiv.org/html/2611.09822v3#biba.bibx108>)\]. We derive a lower bound on its spacetime cost by summing the two dominant reversible submodules on the $245$-qubit square-root workspace while neglecting persistent registers and the steps that combine the two parts. In the non-kickmix Lean 4 circuit, the $3{,}698$ $T$ gates comprise $776$ four-$T$ temporary-$\mathrm{AND}$ gates ($3{,}104\,T$) plus $594$ single-qubit $T$/$T^{\dagger}$ gates across $41$ inner-product gadgets.

<a id="block-A6.SS3-block-5"></a>

<table>
<tr><td>Method</td><td>$\boldsymbol{\varepsilon}$</td><td>Toffoli</td><td>$\boldsymbol{\mathcal{T}}$</td><td>$Q$</td><td>Spacetime cost ($Q\cdot\mathcal{T}$)</td></tr>
<tr><td>Baseline [<a href="https://arxiv.org/html/2611.09822v3#biba.bibx10">161</a>] (lower bound)</td><td>$\sim 10^{-6}$</td><td>$110{,}144$</td><td>$440{,}576$</td><td>$245$</td><td>$1.08\times 10^{8}$</td></tr>
<tr><td>– $\arcsin$ on $[-0.5,0.5]$</td><td></td><td>$34{,}608$</td><td>$138{,}432$</td><td>—</td><td>—</td></tr>
<tr><td>– $1/\sqrt{z}$</td><td></td><td>$75{,}536$</td><td>$302{,}144$</td><td>—</td><td>—</td></tr>
<tr><td>Kickmix</td><td>$1.25\times 10^{-7}$</td><td>$1{,}038$</td><td>$4{,}152$</td><td>$100$</td><td>$415{,}200$</td></tr>
<tr><td>Non-kickmix (Lean 4)</td><td>$1.25\times 10^{-7}$</td><td>$776$</td><td>$3{,}698$</td><td>$100$</td><td>$\mathbf{369{,}800}$</td></tr>
</table>

![Figure S11](figures/A6.F11.png)

<a id="block-A6.SS3-block-16"></a>

Figure S11: Sketch of the algorithm to implement the fixed-point $\arcsin$ module. (a) Full kickmix circuit. It uses $50$ data qubits ($|y\rangle$ and $|b\rangle$, $25$ each) and $50$ ancilla qubits reused across stages, and a total of $4{,}152$ $T$ gates. The bin index $s$ has $9$ bits but needs only $2$ extra ancillas. After "shift $|y|\to t$", $6$ bits of $s$ are simply the top $6$ bits of $t$, which identify the bin within its group. A $7$th bit replaces the $\tfrac{1}{2}$ bit of $|y|$, which can be recomputed from $s$ and is erased. The remaining $2$ bits use one ancilla each: one is stored directly, and the other replaces the top bit of $|y\rangle$, whose value is moved into an ancilla. $t^{2}$ is computed into the ancillas freed by clearing $A$. At peak, the ancillas hold $A$ ($19$), $B$ and $C$ ($24$), $5$ lookup work qubits, $1$ bit of $s$, and the moved bit of $|y\rangle$. (b) Improved block in the non-kickmix circuit. Algorithm verification with our formal quantum computation library allows further optimization of the circuit. Specifically, the coefficient lookup block can be replaced with a more efficient block, saving overall $454$ $T$ gates. Each coefficient bit is computed by one inner-product block taking a variable number $r\in\{2,\dots,7\}$ of product pairs and using $2r+2$ $T$ gates. We have $26$ blocks totaling $364$ $T$ gates before $+A$, and $15$ blocks totaling $230$ $T$ gates on the freed qubits after clearing $A$. Each inner-product block leaves an extra sign phase that is then removed before returning the result. The whole circuit requires now $3{,}698$ $T$ gates instead of $4{,}152$ $T$ gates. (c) Example of the optimized inner-product block for two product pairs, using $6$ $T$ gates, which could not be expressed in the kickmix framework.

<a id="A6.SS4"></a>

### F.4 Interpretation

Fig. [S11](<https://arxiv.org/html/2611.09822v3#A6.F11>) provides an interpretation of the algorithms that we obtained, and shows where the optimization using the Lean verifier obtained an improvement.

<a id="block-A6.SS4-block-2"></a>

Since $\arcsin$ is an odd function, i.e. $z(-y)=-z(y)$, we can perform the calculation only for positive inputs, and flip the output register according to the sign. Subsequently, we also split off the linear part, $z(|y|)=|y|+r(|y|)$ and approximate the remainder $r(|y|)\approx\arcsin(|y|)-|y|$ using a separate quadratic polynomial on $440$ intervals of $[0,1]$. Each interval is chosen to have a width roughly proportional to its distance to $1$, so on each interval the square root is smooth, a second order polynomial fits well, and the fit error shrinks when getting closer to $1$. The intervals get narrower toward $|y|=1$, where $\arcsin(|y|)\approx\frac{\pi}{2}-\sqrt{2(1-|y|)}$ grows steeply. The closest input to $1$ on the fixed-point grid is $2^{-23}$ away, so finitely many intervals cover all inputs. The point $|y|=1$ is handled separately. Subsequently, the circuit looks for the interval that contains $|y|$ and stores its index in a $9$-bit register $s$. It does so by using a barrel shift, i.e. it counts the leading zeros of $1-|y|$, and shifts the magnitude bits left using controlled swaps to form the local offset $t$. A lookup block then computes the interval’s coefficients $A$, $B$, $C$ for $s$, and squarer and adder circuits add $A+Bt+Ct^{2}$ to $b$. As an optimization, the $19$ high bits of $A$ are added to $b$ and erased so that the remaining coefficient bits can be computed on the same qubits. Similarly, $C$ and $t^{2}$ are erased midway so their qubits can be reused for the rest of $+Bt$. Measurements with $Z$ and $CZ$ corrections erase the coefficients and all other scratch qubits at zero $T$ cost. Finally, the circuit is made reversible by undoing the shift and the sign conversion, restoring $y$ and returning all ancillas to $|0\rangle$.

As shown in Fig. [S11](<https://arxiv.org/html/2611.09822v3#A6.F11>), a large amount of the total kickmix $T$ gates are spent on the coefficient lookup phase. Specifically, each coefficient bit is a fixed function of the interval number $s$, given by a table with one entry per interval. Any such table can be written as an XOR of products of bits of $s$, e.g. $s_{1}s_{4}\oplus s_{2}s_{3}s_{7}\oplus s_{5}$. The kickmix circuit first builds a few products that many coefficient bits share, and then builds each coefficient bit by XOR-ing in the products it needs using a $4\,T$ AND circuit for each product.

<a id="block-A6.SS4-block-4"></a>

The non-kickmix circuit replaces most of these bitwise product blocks with $41$ inner-product circuits that need roughly half as many $T$ gates. Indeed, each block puts its coefficient qubit in an equal superposition of $0$ and $1$ states, writes the products as a relative phase between the two branches using $T$ and $T^{\dagger}$ gates, and then makes the branches interfere to get the appropriate bit. However, each inner-product circuit leaves a sign $\pm 1$ that depends on the specific $s$, which is cancelled across each lookup pass with $Z$ and $CZ$ gates at zero $T$ cost. Because each inner product writes directly into its target coefficient qubit and needs no extra scratch qubits, the circuit can postpone more coefficient bits of $B$ and $C$ until after $A$ has been added to $b$ and cleared, leaving more spare qubits for that adder and reducing the lookup-and-add stage from $1{,}348$ to $894$ $T$ gates. Together, these changes lower the full circuit from $4{,}152$ to $3{,}698$ $T$ gates on the same $100$ qubits.

<a id="A7"></a>

## Appendix G Stopping Power in Inertial-confinement Fusion

<a id="A7.SS1"></a>

### G.1 Hamiltonian and specification

<a id="block-A7.SS1-block-1"></a>

Following Eqs. (1)–(7) and Tables 1–2 of ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\], the system consists of $\eta=218$ electrons ($\zeta_{e}=-1$, mass $1$) and one $\alpha$-particle projectile ($\zeta_{\mathrm{proj}}=+2$, mass $M_{\mathrm{proj}}=7{,}294.29954171\,m_{e}$, matching $3.9726$ proton masses in Table 2 of ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\]) in a periodic cubic cell of volume $\Omega=2{,}419.68282\;a_{0}^{3}$ containing $216$ fixed protons at arbitrary positions $R_{\ell}\in\mathbb{R}^{3}$. In plane-wave first quantization, each electron momentum coordinate is stored in $n_{p}=6$ signed-magnitude qubits and each projectile coordinate in $n_{n}=8$ signed-magnitude qubits \[[178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>), [199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\], giving $Q_{\mathrm{sys}}=3(\eta n_{p}+n_{n})=3{,}948$ system qubits. The valid grid subspace excludes the signed-magnitude negative zero $|1,0\cdots 0\rangle$ from every coordinate, leaving integer momenta in $G=[-31,31]^{3}$ for each electron ($63^{3}$ plane waves, covering the $53^{3}$ classical time-dependent density-functional grid of Table 1 in ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\]) and $\tilde{G}=[-127,127]^{3}$ for the projectile, at wavevectors $k_{\nu}=2\pi\nu/\Omega^{1/3}$. The projectile’s momenta are taken relative to its initial mean momentum $k_{\mathrm{proj}}$, with $k_{\mathrm{proj}}\Omega^{1/3}/(2\pi)\in\mathbb{Z}^{3}$ for compatibility with the cell’s periodicity and $\left\lVert k_{\mathrm{proj}}\right\rVert_{2}\leq 29{,}376$ a.u. ($v_{\alpha}\approx 4$ a.u.).

On valid grid states, the discretized Hamiltonian in atomic units is

$$
\displaystyle H
$$

$$
\displaystyle=\sum_{i=1}^{\eta}\sum_{p\in G}\frac{\left\lVert k_{p}\right\rVert_{2}^{2}}{2}|p\rangle\!\langle p|_{i}+\sum_{p\in\tilde{G}}\frac{\left\lVert k_{p}-k_{\mathrm{proj}}\right\rVert_{2}^{2}}{2M_{\mathrm{proj}}}|p\rangle\!\langle p|_{\mathrm{proj}}+\sum_{a}\sum_{\begin{subarray}{c}p,q\in G_{a}\\ p\neq q\end{subarray}}\zeta_{a}S(p-q)K(p-q)|p\rangle\!\langle q|_{a}\tag{11}
$$

$$
\displaystyle+\frac{1}{2}\sum_{a\neq b}\sum_{\nu\neq 0}\sum_{\begin{subarray}{c}p\in G_{a},\,q\in G_{b}\\ p+\nu\in G_{a},\,q-\nu\in G_{b}\end{subarray}}\zeta_{a}\zeta_{b}K(\nu)|p+\nu\rangle\!\langle p|_{a}|q-\nu\rangle\!\langle q|_{b},
$$

<a id="block-A7.SS1-block-4"></a>

and acts as zero outside the valid grid subspace. Here $a$ and $b$ range over the $\eta$ electrons ($G_{a}=G$, $\zeta_{a}=-1$) and the projectile ($G_{\mathrm{proj}}=\tilde{G}$, $\zeta_{\mathrm{proj}}=+2$), $K(\nu)=4\pi/(\Omega\left\lVert k_{\nu}\right\rVert_{2}^{2})$, and $S(\nu)=\sum_{\ell=1}^{216}e^{-ik_{\nu}\cdot R_{\ell}}$.

<a id="block-A7.SS1-block-5"></a>

For every proton configuration $\{R_{\ell}\}$, initial projectile momentum $k_{\mathrm{proj}}$, evolution time $t\in\{1,\dots,10\}$ a.u., and partition of the $218$ electron registers into spin-up and spin-down subsets, a candidate circuit over Clifford+$T$ and mid-circuit measurement using $m$ ancilla qubits must realize a single unitary $W$ that matches $e^{-iHt}$ up to a global phase $\varphi$, satisfying

$$
\left\lVert W\bigl(|\psi\rangle\otimes|0\rangle^{\otimes m}\bigr)-e^{i\varphi}\bigl(e^{-iHt}|\psi\rangle\bigr)\otimes|0\rangle^{\otimes m}\right\rVert_{2}\;\leq\;\varepsilon\tag{12}
$$

<a id="block-A7.SS1-block-7"></a>

at $\varepsilon=10^{-2}$ for every normalized grid state $|\psi\rangle$ antisymmetric under exchange of same-spin electrons. All ancillas begin in $|0\rangle^{\otimes m}$ in each run, rather than carrying pre-prepared resource states (such as phase-gradient states) across runs. Every circuit is compiled into Clifford+$T$ gates, mid-circuit measurements and classical feed-forward, and checked at that gate level by the correctness proof. Where later gates are conditioned on measurement outcomes, we count the $T$ gates of the most expensive outcome branch.

<a id="block-A7.SS1-block-8"></a>

To extract the stopping power from the projectile’s rate of energy loss, the protocol repeats time evolution $50$ times at each of $t=1,\dots,10$ a.u. ($500$ runs) to estimate the mean projectile kinetic energy, omitting state preparation and readout as their cost is negligible. In this work, our Lean specification asks for the algorithm to prove correctness and cost for all $500$ circuits. However, in Sec. [2.3](<https://arxiv.org/html/2611.09822v3#S2.SS3>) and Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>) we report the average $T$ count over the circuits, since this more accurately reflects the size of circuit a fault-tolerant quantum computer would need to coherently execute. We apply this to both the baseline and our solution, so the factor of improvement reported is equal regardless. However, the baseline costing convention \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\] (total over all circuits) can be obtained by simply multiplying our arithmetic mean by 500.

<a id="A7.SS2"></a>

### G.2 Baseline

<a id="block-A7.SS2-block-1"></a>

Table 2 of ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\] gives a momentum-space LCU 1-norm of $\lambda=1{,}744{,}784.42$ Ha, a block-encoding cost of $C_{\mathrm{BE}}=2.498\times 10^{4}$ Toffolis per walk step, and $Q_{\mathrm{base}}=5{,}650$ logical qubits ($3{,}948$ system and $1{,}702$ ancilla qubits). Each electron–proton or electron–electron pair contributes $\sum_{\nu\in[-62,62]^{3}\setminus\{0\}}(\pi\Omega^{1/3}\left\lVert\nu\right\rVert_{2}^{2})^{-1}=22.53$ Ha to $\lambda$, giving $1.06\times 10^{6}$ Ha from electron–proton attraction and $5.33\times 10^{5}$ Ha from electron–electron repulsion ($91.4\%$ of $\lambda$).

<a id="block-A7.SS2-block-2"></a>

Generalized QSP \[[291](<https://arxiv.org/html/2611.09822v3#biba.bibx140>)\] implements $e^{-iHt}$ as a polynomial in a qubitized walk operator \[[176](<https://arxiv.org/html/2611.09822v3#biba.bibx25>)\] that block-encodes $H/\lambda$, with one walk step per query. Evaluating the query count \[[292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\] in Eq. (12) of ref. \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\],

$$
N_{\mathrm{steps}}(t)=\lambda t+\frac{3^{2/3}}{2}(\lambda t)^{1/3}\log_{2}^{2/3}(1/\varepsilon),\tag{13}
$$

at $\varepsilon=10^{-2}$ and summing over the $50$ runs at each of $t=1,\dots,10$ a.u. gives $4.80\times 10^{9}$ walk steps, or $1.20\times 10^{14}$ Toffolis over all $500$ runs. This is an average of $9.60\times 10^{6}$ walk steps and $N_{\mathrm{Toff}}^{\mathrm{base}}=2.40\times 10^{11}$ Toffolis per run, so $\mathcal{T}_{\mathrm{base}}=4N_{\mathrm{Toff}}^{\mathrm{base}}=9.59\times 10^{11}$ $T$ gates per run and $Q_{\mathrm{base}}\cdot\mathcal{T}_{\mathrm{base}}=5.42\times 10^{15}$ per run ($2.71\times 10^{18}$ over $500$ runs), the number presented in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)a. The same study \[[199](<https://arxiv.org/html/2611.09822v3#biba.bibx48>)\] also quotes an eighth-order product-formula estimate ($1.40\times 10^{15}$ Toffolis on $6{,}170$ qubits over $500$ runs), which we do not use as a baseline since it needs $11.7\times$ more Toffolis than the QSP estimate above.

<a id="A7.SS3"></a>

### G.3 Main improvements

Section [2.3](<https://arxiv.org/html/2611.09822v3#S2.SS3>) summarizes the two changes that account for most of the reduction (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)b,c). Here we describe each one alongside the baseline construction it replaces, and Appendix [G.4](<https://arxiv.org/html/2611.09822v3#A7.SS4>) gives the resulting resource counts.

<a id="block-A7.SS3-block-2"></a>

The baseline applies the electron–proton and electron–electron terms in momentum space, where each pair contributes $22.53$ Ha to $\lambda$ (Appendix [G.2](<https://arxiv.org/html/2611.09822v3#A7.SS2>)). Our solution instead Fourier transforms all electrons to a real-space grid each step to apply the electron–proton, electron–projectile and electron–electron interactions, while the kinetic and projectile–proton terms stay in momentum space. This basis change alone halves the contribution of each pair to $\lambda$, to $11.3$ Ha, but that reduction is canceled out by the extra cost of applying the walk step in real space. However, a further reduction follows by being in the position basis, where the solution can exploit Pauli exclusion. A subroutine checks every electron against each grid point near a given electron or proton, and each electron found there kicks back a phase of $i$ in one LCU branch and $-i$ in the other. Averaging the two branches gives $\cos(\pi n/2)$ for $n$ electrons on the point, which equals $1-n$ for $n\leq 2$ and has magnitude at most one for any $n$. The Lean solution also proves that states antisymmetric under exchange of same-spin electrons have at most two electrons on any grid point, allowing it to satisfy the specification while not faithfully applying the $n>2$ interaction terms. Therefore, the circuit reproduces the interaction up to a constant, while each such term adds its potential to $\lambda$ once rather than once for every electron that could occupy the point. At separations beyond $\approx 0.6\;a_{0}$, where the potential is below $1.4$ Ha, the interaction is too weak for the savings to outweigh the cost of the subroutine. The pair potential is therefore range-separated at $1.4$ Ha, with the subroutine applied only to the short-range part and the long-range part summed over all pairs, each contributing $0.74$ Ha (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)b).

<a id="block-A7.SS3-block-3"></a>

The second most significant improvement found, in terms of cost reduction, relates to the electron–proton interaction. Protons do not sit on grid points, so to apply this term the circuit shifts all electrons by $-R_{\ell}$ to put each proton on a grid point, and then shifts them back. In the plane-wave basis this shift is a phase set by the total electron momentum $P$. Earlier real-space solutions computed and uncomputed $P$ around each shift, summing all $218$ electron momenta four times per walk step, which made up about a fifth of the $T$ gates per step. Only the protons and the projectile change $P$, and both act in the real-space step, so the final circuit keeps $P$ in a $42$-qubit register between walk steps, clearing it before the real-space step and rebuilding it after. This halves the sums and cuts the $T$ gates per step by $10\%$ (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)c).

<a id="A7.SS4"></a>

### G.4 Resource counts

<a id="block-A7.SS4-block-1"></a>

Our solution uses $Q=4{,}338$ logical qubits: $3{,}948$ system qubits and $390$ clean ancillas, against the baseline’s $1{,}702$. The ancillas are a $42$-qubit register that keeps the total electron momentum between walk steps, a $48$-qubit phase-gradient register prepared in each run, $87$ control and data qubits for the block encoding, and $213$ workspace qubits that every subroutine borrows and returns to $|0\rangle$. The improvements above lower $\lambda$ to $1.356\times 10^{5}$ Ha. Each run of length $t$ is split into $t$ segments of $1$ a.u., each implemented by generalized QSP \[[291](<https://arxiv.org/html/2611.09822v3#biba.bibx140>), [292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\] of degree $135{,}867$, giving an average of $7.47\times 10^{5}$ walk steps per run.

<a id="block-A7.SS4-block-2"></a>

Each walk step uses roughly $141{,}500$ $T$ gates. One-time initialization adds $59{,}600$ $T$ gates per run. Averaged over $t=1,\dots,10$ a.u., this gives $1.06\times 10^{11}$ $T$ gates and $Q\cdot\mathcal{T}=4.59\times 10^{14}$ per run, or $229{,}357{,}900{,}876{,}653{,}900$ over all $500$ runs. Compared with the baseline, this is $12.8\times$ fewer walk steps and $1.30\times$ fewer qubits at $1.42\times$ the $T$ gates per step, an $11.8\times$ lower cost (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)a).

<a id="A8"></a>

## Appendix H Non-Born–Oppenheimer Dynamics of C₂₃H₂₀N₃O

<a id="A8.SS1"></a>

### H.1 Hamiltonian and specification

<a id="block-A8.SS1-block-1"></a>

Following Reaction 5 in Eqs. (2)–(10) and (23)–(25) and Tables I and IV of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], the system consists of $\eta=234$ particles of composition $\mathrm{C_{23}H_{20}N_{3}O}$: $47$ nuclei ($23\;{}^{12}\mathrm{C}$, $20\;{}^{1}\mathrm{H}$, $3\;{}^{14}\mathrm{N}$, and $1\;{}^{16}\mathrm{O}$, with charges $\zeta_{i}=Z_{i}\in\{6,1,7,8\}$) followed by $187$ electrons ($\zeta_{i}=-1$). Each Cartesian coordinate is stored as a signed $n_{g}=8$-bit integer $q_{i,w}\in[-128,127]$ on $Q_{\mathrm{sys}}=3\eta n_{g}=5{,}616$ system qubits, representing position $r_{i,w}=q_{i,w}\Delta$ in a cubic box of width $L=44$ Å ($83.15\;a_{0}$) with grid spacing $\Delta=L/(2^{n_{g}}-1)\approx 0.326\;a_{0}$. Electron masses are $m_{i}=1$, and nuclear masses $m_{i}$ (not stated in the baseline \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]) are set in electron-mass units from the ${}^{1}\mathrm{H}$, ${}^{12}\mathrm{C}$, ${}^{14}\mathrm{N}$, and ${}^{16}\mathrm{O}$ isotopic atomic masses minus $Z_{i}m_{e}$.

<a id="block-A8.SS1-block-2"></a>

The discretized non-Born–Oppenheimer Hamiltonian is $H=T+V$, with

$$
T=\frac{2\pi^{2}}{L^{2}}\sum_{i=1}^{\eta}\frac{1}{m_{i}}\,\mathrm{QFT}_{i}^{\dagger}\Biggl(\sum_{k\in G}\left\lVert k\right\rVert_{2}^{2}\,|k\rangle\!\langle k|_{i}\Biggr)\mathrm{QFT}_{i},\qquad V=\frac{1}{2}\sum_{i\neq j}\frac{\zeta_{i}\zeta_{j}}{\Delta\max\!\bigl(\left\lVert q_{i}-q_{j}\right\rVert_{2},\tilde{\Gamma}_{ij}\bigr)},\tag{14}
$$

<a id="block-A8.SS1-block-4"></a>

where $G=[-128,127]^{3}$, $\mathrm{QFT}_{i}$ is the quantum Fourier transform on the three coordinates of particle $i$, and the squared Coulomb saturation distance is $\tilde{\Gamma}_{ij}^{2}=8$ when both $i$ and $j$ are nuclei ($n_{\Gamma}=3$ in Table IV of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]) and $\tilde{\Gamma}_{ij}^{2}=1$ otherwise, capping electron interactions at $1/\Delta$ and nuclear repulsion at $1/(\sqrt{8}\Delta)$.

<a id="block-A8.SS1-block-5"></a>

A candidate circuit over Clifford+$T$ and mid-circuit measurement must realize a single clean-ancilla unitary $W$ satisfying Eq. ([12](<https://arxiv.org/html/2611.09822v3#A7.E12>)) at $\varepsilon=10^{-2}$ for $t=1$ fs on every state of the system register. Matching the baseline \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], initial-state preparation and observable readout are not costed, since in end-to-end fault-tolerant simulations of photochemical dynamics, real-time Hamiltonian evolution dominates initial-state preparation by orders of magnitude \[[293](<https://arxiv.org/html/2611.09822v3#biba.bibx142>)\]. All ancillas begin in $|0\rangle^{\otimes m}$, so resource states such as phase-gradient states must be prepared within the circuit. Every Toffoli is compiled into Clifford+$T$ gates and checked at that gate level by the correctness proof, and where later gates are conditioned on measurement outcomes we count the $T$ gates of the most expensive branch.

<a id="block-A8.SS1-block-6"></a>

The baseline instead bounds only the block-encoding error $\left\lVert A-e^{i\varphi}e^{-iHt}\right\rVert_{\mathrm{op}}\leq\epsilon_{\mathrm{BE}}$ (Appendix C of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]), where $A=(I\otimes\langle 0^{m}|)\,W\,(I\otimes|0^{m}\rangle)$ is the part of the circuit that starts and ends with the ancillas in $|0^{m}\rangle$. This leaves out the ancilla error, the part $|\psi_{\perp}\rangle$ of the output in which the ancillas are not returned to $|0^{m}\rangle$. The two parts are orthogonal, so the error in Eq. ([12](<https://arxiv.org/html/2611.09822v3#A7.E12>)) splits as

$$
\left\lVert W(|\psi\rangle\otimes|0^{m}\rangle)-e^{i\varphi}(e^{-iHt}|\psi\rangle)\otimes|0^{m}\rangle\right\rVert_{2}^{2}=\left\lVert(A-e^{i\varphi}e^{-iHt})|\psi\rangle\right\rVert_{2}^{2}+\left\lVert|\psi_{\perp}\rangle\right\rVert_{2}^{2},\tag{15}
$$

and any circuit meeting Eq. ([12](<https://arxiv.org/html/2611.09822v3#A7.E12>)) at $\varepsilon$ also meets the block-encoding criterion at $\epsilon_{\mathrm{BE}}=\varepsilon$. For the baseline QSP circuit, the polynomial approximation error bounds the ancilla error \[[176](<https://arxiv.org/html/2611.09822v3#biba.bibx25>), [291](<https://arxiv.org/html/2611.09822v3#biba.bibx140>), [292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\] by $\left\lVert|\psi_{\perp}\rangle\right\rVert_{2}^{2}\leq 2\epsilon_{\mathrm{exp}}$, so with the error split in Table IV of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\] ($\epsilon_{\mathrm{exp}}=\epsilon_{\mathrm{BE}}/12.95$) it is only guaranteed to meet Eq. ([12](<https://arxiv.org/html/2611.09822v3#A7.E12>)) at $\sqrt{\epsilon_{\mathrm{BE}}^{2}+2\epsilon_{\mathrm{exp}}}\approx 0.041$, four times our target.

<a id="A8.SS2"></a>

### H.2 Baseline

Table I of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\] reports $N_{\mathrm{Toff}}^{\mathrm{pub}}=2.73\times 10^{11}$ Toffolis per femtosecond on $Q_{\mathrm{pub}}=6{,}198$ qubits at $\epsilon_{\mathrm{BE}}=10^{-2}$, a spacetime cost of $6.77\times 10^{15}$. Each walk step uses about $9.0\times 10^{4}$ $T$ gates, of which $52\%$ go to the swap network, $25\%$ to preparing the LCU weights and $22\%$ to evaluating $1/r$ (Fig. 5a of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]). These give the baseline values of $46.8\text{k}$, $22.5\text{k}$ and $19.8\text{k}$ $T$ gates per step in Sec. [2.4](<https://arxiv.org/html/2611.09822v3#S2.SS4>) and Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e–g.

The baseline costs the time evolution as the number of walk steps times the cost of one step, $N_{\mathrm{Toff}}=D_{\mathrm{old}}(\tau,\epsilon_{\mathrm{exp}})\cdot\mathcal{T}_{H}$ (Eqs. (C1) and (C4)–(C5) of ref. \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]), where the number of steps is the degree of the generalized QSP polynomial \[[291](<https://arxiv.org/html/2611.09822v3#biba.bibx140>), [292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\]. Two of the same authors tighten this degree bound, removing the factor $e/2\approx 1.36$ in front of $\tau$ (Theorem 1 of ref. \[[210](<https://arxiv.org/html/2611.09822v3#biba.bibx59>)\], via Kapteyn’s inequality),

$$
\displaystyle D_{\mathrm{old}}(\tau,\epsilon_{\mathrm{exp}})
$$

$$
\displaystyle=\left\lceil\frac{e}{2}\,\tau+\ln\frac{2c}{\epsilon_{\mathrm{exp}}}\right\rceil,
$$

$$
\displaystyle d_{\mathrm{Thm\,1}}(\tau,\epsilon_{\mathrm{exp}})
$$

$$
\displaystyle=\left\lceil\tau\cosh\!\left(\left[\frac{3}{\tau}\ln\frac{2}{\epsilon_{\mathrm{exp}}(1-e^{-\theta_{0}})}\right]^{1/3}\right)\right\rceil,\tag{16}
$$

where $\tau:=\alpha_{H}t$, $c=4(\sqrt{2\pi}\,e^{1/13})^{-1}\approx 1.4776$ and $\theta_{0}=\bigl[\frac{3}{\tau}\ln(2/\epsilon_{\mathrm{exp}})\bigr]^{1/3}$. Theorem 2 there further tightens the subleading term via Watson’s inequality. That work \[[210](<https://arxiv.org/html/2611.09822v3#biba.bibx59>)\] does not apply this bound to the system studied here, but it improves the same QSP construction, so we include it so that our solutions are compared against the strongest available baseline.

<a id="block-A8.SS2-block-5"></a>

The tighter bound only reduces the number of walk steps. The error split $t\epsilon_{H}+\epsilon_{\mathrm{exp}}\leq\epsilon_{\mathrm{BE}}$ fixes $\epsilon_{H}$ independently of the polynomial degree, so the $T$-gate count $\mathcal{T}_{H}$ per step and the qubit count $Q_{\mathrm{pub}}=6{,}198$ are unchanged. At the reported $\alpha_{H}=2.16\times 10^{5}$ Ha ($\tau\approx 8.93\times 10^{6}$ at $t=41.34$ a.u.) and $\epsilon_{\mathrm{exp}}=\epsilon_{\mathrm{BE}}/12.95$, Theorem 2 lowers the number of walk steps from $D_{\mathrm{old}}=12{,}136{,}779$ to $d_{\mathrm{Thm\,2}}=8{,}930{,}416$ ($8{,}930{,}877$ with Theorem 1). Rescaling the published Toffoli count by this ratio gives our baseline,

$$
\displaystyle N_{\mathrm{Toff}}^{\mathrm{base}}
$$

$$
\displaystyle=N_{\mathrm{Toff}}^{\mathrm{pub}}\,\frac{d_{\mathrm{Thm\,2}}}{D_{\mathrm{old}}}\approx 2.01\times 10^{11},
$$

$$
\displaystyle\mathcal{T}_{\mathrm{base}}
$$

$$
\displaystyle=4N_{\mathrm{Toff}}^{\mathrm{base}}\approx 8.04\times 10^{11},
$$

$$
\displaystyle Q_{\mathrm{pub}}\cdot\mathcal{T}_{\mathrm{base}}
$$

$$
\displaystyle\approx 4.98\times 10^{15},\tag{17}
$$

the number presented in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)a. At this large $\tau$ the subleading terms barely matter: using Theorem 1 instead, or simply dividing the published Toffoli count by $e/2$, gives the same cost to three significant figures.

<a id="A8.SS3"></a>

### H.3 Main improvements

Section [2.4](<https://arxiv.org/html/2611.09822v3#S2.SS4>) summarizes three changes to the walk step that account for almost all of the reduction in $T$ gates per step relative to the baseline (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e–g). Here we describe each one alongside the baseline construction it replaces, and Appendix [H.4](<https://arxiv.org/html/2611.09822v3#A8.SS4>) gives the resulting $T$ counts.

<a id="block-A8.SS3-block-2"></a>

First, to apply a two-body interaction, the baseline swaps the coordinates of the selected pair into the two particle registers on which its interaction circuit acts, applies the interaction there, and swaps them back afterward \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]. Instead, our solution copies the selected coordinates into an ancilla register, leaving the particle register untouched. Because the ancilla holds only a copy, it can be cleared using mid-circuit Pauli-$X$ measurements and classically controlled $CZ$ corrections \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>), [268](<https://arxiv.org/html/2611.09822v3#biba.bibx117>)\], as done for momentum bits copied in plane-wave kinetic terms \[[178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>)\] (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)e).

<a id="block-A8.SS3-block-3"></a>

Second, the potential $V$ in Eq. ([14](<https://arxiv.org/html/2611.09822v3#A8.E14>)) requires computing $1/r=(r^{2})^{-1/2}$ for $r=\left\lVert q_{i}-q_{j}\right\rVert_{2}$. Because the coordinates are stored as integers, $r^{2}=\sum_{w}(q_{i,w}-q_{j,w})^{2}$ can be obtained cheaply using integer subtraction and squaring. To get to $1/r$ without a square root, the baseline prepares an ancilla register in uniform superposition over integers $m<M$, assigning $+1$ to branches with $m^{2}r^{2}<M^{2}$ and an alternating sign $(-1)^{m}$ to the rest. The alternating terms cancel, so the average over branches approximates $1/r$, but the test requires multiplying $m^{2}$ by $r^{2}$, which dominates its cost \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\]. In this work, the range of $r^{2}$ is split into coarse intervals with rescaled position $\tilde{r}^{2}\in[0,1)$, and $1/r$ on each interval is approximated by a cubic Bernstein polynomial $\sum_{k=0}^{3}\binom{3}{k}(\tilde{r}^{2})^{k}(1-\tilde{r}^{2})^{3-k}w_{k}$ ($512$ precomputed coefficients $w_{k}$ in total). Rather than multiplying powers of $\tilde{r}^{2}$, the circuit samples this polynomial directly \[[294](<https://arxiv.org/html/2611.09822v3#biba.bibx143>), [218](<https://arxiv.org/html/2611.09822v3#biba.bibx67>)\]. It compares $\tilde{r}^{2}$ against three ancilla registers in uniform superposition and counts how many are smaller, which gives $k\in\{0,1,2,3\}$ with exactly the binomial weights above. Looking up $w_{k}$ then gives the polynomial in expectation (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)f).

<a id="block-A8.SS3-block-4"></a>

Finally, in the electron–nucleus terms of $V$, each nucleus $i$ is weighted by its integer charge $Z_{i}$. Rather than preparing these weights via coherent alias sampling \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>)\] with amplitude amplification \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>)\], a uniform superposition of basis states is prepared and a reversible classical circuit assigns $Z_{i}$ states to each nucleus $i$, as proposed for fixed nuclei \[[178](<https://arxiv.org/html/2611.09822v3#biba.bibx27>)\] and for quantum nuclei \[[293](<https://arxiv.org/html/2611.09822v3#biba.bibx142>)\]. Our solution applies this to every weight of the linear combination (Fig. [4](<https://arxiv.org/html/2611.09822v3#S2.F4>)g).

<a id="A8.SS4"></a>

### H.4 Resource counts

<a id="block-A8.SS4-block-1"></a>

The verified circuit found in this work uses $Q=6{,}033$ logical qubits, consisting of $5{,}616$ system qubits and $417$ clean ancillas. Evaluating the $1$-norm at $L=44$ Å together with potential shifting gives block-encoding scale $\alpha=8.045\times 10^{4}$ Ha and generalized QSP degree $d=3{,}326{,}847$.

<a id="block-A8.SS4-block-2"></a>

Each uncontrolled walk step uses $30{,}116$ $T$ gates ($30{,}132\;T$ on the two boundary controlled steps): $1{,}256\;T$ for reversible nuclear-charge and pair-weight preparation, $24{,}194\;T$ to copy selected particle coordinates into ancillas and $908\;T$ for $X$-basis measurement uncomputation ($25{,}102\;T$ total routing, against $46.8\text{k}\;T$ for the baseline swap network), $3{,}060\;T$ for the $512$-entry Bernstein $1/r$ evaluation, $446\;T$ for the QFT kinetic term, and $252\;T$ for the LCU reflection, plus $76\;T$ per step for QSP rotations and $245\;T$ of one-time overhead. The Lean solution fixes both the $3{,}326{,}848$ generalized QSP rotations \[[291](<https://arxiv.org/html/2611.09822v3#biba.bibx140>), [292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\] and the Clifford+$T$ words that approximate them by existence proofs, the words through a derandomized form of unitary mixing over a finite table \[[295](<https://arxiv.org/html/2611.09822v3#biba.bibx144>), [296](<https://arxiv.org/html/2611.09822v3#biba.bibx145>)\], so it certifies their $T$ count and error without listing them. The rotations are computable in time polynomial in $d$ \[[297](<https://arxiv.org/html/2611.09822v3#biba.bibx146>)\] but have not been computed at this degree. The same holds for the baseline \[[209](<https://arxiv.org/html/2611.09822v3#biba.bibx58>), [210](<https://arxiv.org/html/2611.09822v3#biba.bibx59>)\], which uses the same doubled construction \[[292](<https://arxiv.org/html/2611.09822v3#biba.bibx141>)\] and a larger degree polynomial which would require greater classical computation. This totals $\mathcal{T}=3{,}326{,}847\times(30{,}116+76)+2\times 30{,}132+245=100{,}444{,}225{,}133\approx 1.00\times 10^{11}$ $T$ gates and $Q\cdot\mathcal{T}=605{,}980{,}010{,}227{,}389\approx 6.06\times 10^{14}$ ($8.22\times$ below baseline).

<a id="A9"></a>

## Appendix I Cytochrome P450 Compound I

<a id="A9.SS1"></a>

### I.1 Hamiltonian and specification

<a id="block-A9.SS1-block-1"></a>

The system is active space X of Compound I, with $\eta=63$ electrons in $N=58$ spatial orbitals \[[239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>)\]. Under the Jordan–Wigner transformation each spin orbital $(p,\sigma)$ is stored on qubit $2p+\sigma$, giving $Q_{\mathrm{sys}}=2N=116$ system qubits.

<a id="block-A9.SS1-block-2"></a>

GPU-accelerated density matrix renormalization group (DMRG) calculations now converge this $58$-orbital active space classically \[[298](<https://arxiv.org/html/2611.09822v3#biba.bibx147>)\], yet leave the physical spin-state ordering unresolved because dynamic correlation from omitted orbitals exceeds the sub-millihartree doublet–quartet gap \[[239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>), [298](<https://arxiv.org/html/2611.09822v3#biba.bibx147>)\]. Active space X nonetheless serves as the standard benchmark across fault-tolerant resource estimates \[[239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>), [240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>), [211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], and circuit improvements to its DFTHC walk structure \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\] carry over to the larger active spaces needed to capture dynamic correlation and resolve the spin ordering \[[298](<https://arxiv.org/html/2611.09822v3#biba.bibx147>)\].

The Hamiltonian is the $(R,B,C)=(9,29,14)$ double-factorized tensor-hypercontraction (DFTHC) factorization of Table V in ref. \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], with the released tensors \[[299](<https://arxiv.org/html/2611.09822v3#biba.bibx148>)\] rounded to $(b_{\mathrm{coeff}},b_{\mathrm{rot}})=(10,15)$ bits:

$$
H_{\mathrm{DFTHC}}=\sum_{\sigma,p,q}h^{\prime}_{pq}\,a_{p\sigma}^{\dagger}a_{q\sigma}+\frac{1}{2}\sum_{r=0}^{R-1}\sum_{c=0}^{C-1}\Biggl(W^{(rc)}I+\sum_{b=0}^{B-1}w_{b}^{(rc)}n_{u_{b}^{(r)}}\Biggr)^{2},\tag{18}
$$

where $n_{u}=\sum_{\sigma}(\sum_{p}u_{p}a_{p\sigma})^{\dagger}(\sum_{q}u_{q}a_{q\sigma})$ for unit orbital vectors $u_{b}^{(r)}\in\mathbb{R}^{58}$ ($M=RB=261$) and $W^{(rc)}=w_{B}^{(rc)}-\sum_{b<B}w_{b}^{(rc)}$, as follows from expanding $O_{\mathrm{SF},rc}$ in the DFTHC construction \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]. As in the released dataset \[[299](<https://arxiv.org/html/2611.09822v3#biba.bibx148>)\], Eq. ([18](<https://arxiv.org/html/2611.09822v3#A9.E18>)) omits the scalar $-\frac{1}{2}\sum_{r,c}(W^{(rc)})^{2}$, and adding the classical Hartree–Fock shift $E_{\mathrm{HF}}-E_{\mathrm{HF}}^{\mathrm{DFTHC}}$ recovers the active-space total energy (Eqs. 42–43 of ref. \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]). We define the problem to not allow for improvement in the DFTHC factors \[[299](<https://arxiv.org/html/2611.09822v3#biba.bibx148>)\], which reproduce the active-space coupled-cluster correlation energy to $0.28$ mHa, to separate quantum circuit optimization from classical tensor fitting.

<a id="block-A9.SS1-block-6"></a>

We cost one run of phase estimation on the $116$ system qubits, started in a $63$-electron eigenstate $|\psi\rangle$ of $H_{\mathrm{DFTHC}}$ with energy $E$. Assuming an eigenstate as input loses no generality for resource estimation: phase estimation on any state $|\phi\rangle$ gives, with probability $|\langle\psi_{j}|\phi\rangle|^{2}$, the same outcomes \[[300](<https://arxiv.org/html/2611.09822v3#biba.bibx149>)\] as on the eigenstate $|\psi_{j}\rangle$. In practice $|\phi\rangle$ only approximates the ground state $|\psi_{0}\rangle$, so finding $E_{0}$ takes on average $1/|\langle\psi_{0}|\phi\rangle|^{2}$ runs, each also paying for trial-state preparation \[[301](<https://arxiv.org/html/2611.09822v3#biba.bibx150>)\]. Like prior resource estimates \[[239](<https://arxiv.org/html/2611.09822v3#biba.bibx88>), [240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>), [211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], we do not count this overhead. The circuit uses Clifford+$T$ gates and mid-circuit measurements on the system and $m$ ancillas that start in $|0\rangle$. The specification applies to this gate-level circuit, so its error bound includes rotation synthesis and approximate state preparation as well as phase estimation. At the end, a $b$-qubit phase register among the ancillas is measured, and its outcome $y\in\{0,\dots,2^{b}-1\}$ is converted into the energy estimate

$$
\hat{E}(y)=E_{\mathrm{off}}+s\,\lvert\cos(\pi y/2^{b})\rvert,\tag{19}
$$

<a id="block-A9.SS1-block-8"></a>

where $b$, $E_{\mathrm{off}}$ and $s$ are fixed numbers chosen with the circuit. This form covers both standard qubitization and sum-of-squares spectral amplification. For a walk eigenphase $\varphi$, the energy is $E=\lambda\cos\varphi$ in the first \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>), [176](<https://arxiv.org/html/2611.09822v3#biba.bibx25>), [155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>), [240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>)\] and $E=E_{\mathrm{SOS}}+\Lambda(1+\cos\varphi)$ in the second \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>), [302](<https://arxiv.org/html/2611.09822v3#biba.bibx151>)\]. Since $\cos\varphi\leq 0$ at the energies measured here, both read $E=E_{\mathrm{off}}+s\,\lvert\cos\varphi\rvert$, with $(E_{\mathrm{off}},s)=(0,-\lambda)$ and $(E_{\mathrm{SOS}}+\Lambda,-\Lambda)$ respectively. When phase estimation applies the walk forward or backward depending on the phase register, $2\pi y/2^{b}$ estimates $\pm 2\varphi$, so Eq. ([19](<https://arxiv.org/html/2611.09822v3#A9.E19>)) estimates $E$.

<a id="block-A9.SS1-block-9"></a>

If the specification only covered the ground state, a circuit with no gates and $s=0$ would pass by setting $E_{\mathrm{off}}$ within $\varepsilon$ of the ground-state energy $E_{0}$. The specification therefore requires the same circuit and decoder to work for every eigenstate up to $E_{\mathrm{top}}=E_{0}+\Delta$, with $\Delta=0.1$ Ha and $\varepsilon=10^{-3}$ Ha. For each $63$-electron eigenstate $|\psi\rangle$ with energy $E$, the outcome distribution $p(y\mid\psi)$ must satisfy

$$
\sum_{y}p(y\mid\psi)\,\bigl(\min(\hat{E}(y),E_{\mathrm{top}})-\min(E,E_{\mathrm{top}})\bigr)^{2}\;\leq\;\varepsilon^{2}.\tag{20}
$$

<a id="block-A9.SS1-block-11"></a>

This is the root-mean-square error behind the phase-estimation step counts of Eqs. (21)–(23) in ref. \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>)\]. For an eigenstate inside the window, it bounds the root-mean-square error of the estimate by $\varepsilon$, with estimates above $E_{\mathrm{top}}$ counted as $E_{\mathrm{top}}$. For an eigenstate above the window, it only requires that estimates do not fall more than $\varepsilon$ below $E_{\mathrm{top}}$. A circuit that ignores $|\psi\rangle$ gives the same estimates for every eigenstate, and in root mean square these would have to lie within $\varepsilon$ of $E_{0}$ and at most $\varepsilon$ below $E_{0}+\Delta$ at once. This is possible only if $\Delta\leq 2\varepsilon=2$ mHa, far below $\Delta=0.1$ Ha. The window also spans the gap of about $75$ mHa between the quartet and sextet states found by DMRG (Fig. 4 of ref. \[[298](<https://arxiv.org/html/2611.09822v3#biba.bibx147>)\]). The tolerance $\varepsilon=1$ mHa matches prior resource estimates on this active space, although separating the doublet and quartet states would require tighter tolerances.

<a id="block-A9.SS1-block-12"></a>

All ancillas begin in $|0\rangle^{\otimes m}$, so resource states such as phase-gradient states must be prepared within the circuit. Every Toffoli is compiled into Clifford+$T$ gates and checked at that gate level by the correctness proof, and where later gates are conditioned on measurement outcomes we count the $T$ gates of the most expensive branch.

<a id="A9.SS2"></a>

### I.2 Baseline

<a id="block-A9.SS2-block-1"></a>

Our baseline starts from the sum-of-squares spectral amplification estimate in Table V of ref. \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\] ($51{,}510$ walk steps at $9{,}535$ Toffolis/step on $1{,}150$ qubits, or a spacetime cost of $2.26\times 10^{12}$), where $H_{\mathrm{DFTHC}}-E_{\mathrm{SOS}}=H_{\mathrm{sqrt}}^{\dagger}H_{\mathrm{sqrt}}$ is block-encoded with norm $\Lambda$ and energy-window gap $E_{\mathrm{gap}}=E_{\mathrm{ub}}+\Delta-E_{\mathrm{SOS}}$ using the phase-estimation step count \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>), [211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]

$$
\lambda_{\mathrm{eff}}=\sqrt{E_{\mathrm{gap}}(2\Lambda-E_{\mathrm{gap}})},\qquad N_{\mathrm{steps}}=\left\lceil\frac{\pi\lambda_{\mathrm{eff}}}{2\varepsilon}\right\rceil.\tag{21}
$$

Adding $\Delta$ to $E_{\mathrm{gap}}$ in that estimate \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\] raises its step count from $51{,}510$ to $51{,}948$ and its cost to $2.28\times 10^{12}$ ($+0.85\%$). The published construction \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\] forms the one-body term $h^{\prime}$ from the exact two-electron tensor $g$, while the squares in Eq. ([18](<https://arxiv.org/html/2611.09822v3#A9.E18>)) use the factorized tensor $\tilde{g}$. The Hamiltonian it block-encodes therefore differs from the $(h,\tilde{g})$ Hamiltonian by a one-body term that lowers the low-lying energies by about $0.6$ Ha. Its $E_{\mathrm{gap}}$ subtracts the sum-of-squares bound of the block-encoded Hamiltonian from the sextet Hartree–Fock energy of the $(h,\tilde{g})$ Hamiltonian \[[299](<https://arxiv.org/html/2611.09822v3#biba.bibx148>)\], so it is about $0.6$ Ha larger than when both energies come from one Hamiltonian, which overestimates the cost. We form $h^{\prime}$ from $\tilde{g}$, so that Eq. ([18](<https://arxiv.org/html/2611.09822v3#A9.E18>)) is the $(h,\tilde{g})$ Hamiltonian up to a constant, whose CCSD(T) correlation energy is within $0.28$ mHa of that of $(h,g)$. This lowers $\Lambda$ from $97.4395$ to $97.3864$ Ha ($E_{\mathrm{SOS}}=-134.8874$ Ha), and with both energies evaluated on this Hamiltonian $E_{\mathrm{gap}}=5.189$ Ha including $\Delta$ ($49{,}269$ steps). Bounding $E_{0}\leq E_{\mathrm{ub}}=-129.8443$ Ha with the quartet ($S=3/2$) ROHF determinant instead lowers $E_{\mathrm{gap}}$ to $5.143$ Ha, giving $\lambda_{\mathrm{eff}}=31.23$ Ha and $N_{\mathrm{steps}}=49{,}056$.

Adding a coherent $16$-qubit phase-estimation register and storing each of the $57$ Givens angles in $13$ rather than $15$ bits gives $1{,}052$ qubits and a cost of $1.97\times 10^{12}$ before space–time tradeoffs. Thirteen bits suffice because the angles $\theta_{p}=2\pi k_{p}/2^{15}$ enter the orbital vectors \[[155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\] as $\cos 2\theta_{p}$ and $\sin 2\theta_{p}$, and the overall sign of each vector does not affect $n_{u}$, so fixing that sign puts every angle index of $H_{\mathrm{DFTHC}}$ in $0\leq k_{p}<2^{13}$. As suggested in prior work \[[240](<https://arxiv.org/html/2611.09822v3#biba.bibx89>)\], we use both these observations and integrate them into our baseline. We then apply recent compilation options \[[212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\], recomputing the $(G,r,c,\sigma,b=B)$ index registers from an $8$-bit outer index $x_{o}$ with minimum-Toffoli comparators \[[260](<https://arxiv.org/html/2611.09822v3#biba.bibx109>)\] and loading the $57$ Givens angles in three batches of $19$ ($5$ QROM lookups per select) while reusing idle angle wires as clean-QROAM \[[268](<https://arxiv.org/html/2611.09822v3#biba.bibx117>)\] workspace. These options come from later work than the spectral-amplification study \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], but we include them so that our solutions are compared against the strongest available baseline. On our $13$-bit instance we also pad $C$ rather than $R$ in $x_{o}$, skip the two always-zero addend bits in the $15$-bit phase-gradient adders \[[174](<https://arxiv.org/html/2611.09822v3#biba.bibx23>)\], and include $32$ Toffolis/step to control the walk reflections from the phase-estimation register, omitting approximate state preparation and rotation synthesis so $H_{\mathrm{DFTHC}}$ remains exact. Minimizing $Q\cdot\mathcal{T}$ over QROAM block sizes and angle batch sizes gives $Q_{\mathrm{base}}=481$ logical qubits and $C_{\mathrm{BE}}=11{,}517$ Toffolis/step ($5.65\times 10^{8}$ Toffolis, $\mathcal{T}_{\mathrm{base}}=4C_{\mathrm{BE}}N_{\mathrm{steps}}=2.26\times 10^{9}$ $T$ gates), for a baseline cost of

$$
Q_{\mathrm{base}}\cdot\mathcal{T}_{\mathrm{base}}=1.087\times 10^{12}\approx 1.09\times 10^{12},\tag{22}
$$

the number presented in Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)a. At a fixed number of walk steps, the $13$-bit angles and these compilation options \[[212](<https://arxiv.org/html/2611.09822v3#biba.bibx61>)\] together roughly halve the published cost \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], from $1{,}150$ qubits and $9{,}535$ Toffolis per step to $481$ qubits and $11{,}517$, including the phase-estimation register. Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)b shows the published estimate \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\], extended to the energy window, in gray and this baseline in red.

<a id="A9.SS3"></a>

### I.3 Main improvements

<a id="block-A9.SS3-block-1"></a>

Section [2.5](<https://arxiv.org/html/2611.09822v3#S2.SS5>) summarizes the main change in our solution, which replaces the angle lookups of the baseline with a one-hot register for the chosen orbital vector, and uses the same trick in the inner state preparation. Here we describe both alongside the baseline construction they replace, together with a smaller change to the spin swaps that the main text leaves out. Appendix [I.4](<https://arxiv.org/html/2611.09822v3#A9.SS4>) gives the resulting $T$ counts.

Each walk step block-encodes Eq. ([18](<https://arxiv.org/html/2611.09822v3#A9.E18>)) with a state preparation and two select calls \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]. The outer stage of the state preparation picks a square $(r,c)$ or a one-body term, and the inner stage picks $b$, which fixes the orbital vector $u_{b}^{(r)}$. select rotates this vector into a single orbital with $57$ Givens rotations, acts on that orbital and rotates back \[[155](<https://arxiv.org/html/2611.09822v3#biba.bibx4>)\].

<a id="block-A9.SS3-block-3"></a>

In the baseline, each select call loads the $13$-bit Givens angles of the chosen vector into a $247$-qubit register, $19$ at a time with $5$ QROM lookups per call, and each rotation adds its angle into the phase-gradient register (Appendix [I.2](<https://arxiv.org/html/2611.09822v3#A9.SS2>)). Our solution instead builds a $145$-qubit one-hot register in each select call, for $296$ $T$. Each of its qubits stands for two orbital vectors, so the register covers $290$ of them: the $261$ vectors $u_{b}^{(r)}$ and $29$ of the $58$ eigenvectors of $h^{\prime}$. The other $29$ eigenvectors are handled by the second call of the step. A further qubit $s$ records which vector of the pair was chosen. Each angle bit then enters the phase-gradient adder of its rotation as

$$
(\alpha\oplus M_{1})(\beta\oplus M_{0})\oplus M_{01},\qquad\beta=q_{c}s,\quad\alpha=q_{c}\oplus\beta,\tag{23}
$$

<a id="block-A9.SS3-block-5"></a>

where $q_{c}$ is the control qubit of the rotation and $M_{0}$, $M_{1}$ and $M_{01}$ are CNOT parities of the one-hot qubits whose first vector, second vector or both vectors have that bit set. At most one one-hot qubit is set, so $M_{0}M_{1}=M_{01}$, and Eq. ([23](<https://arxiv.org/html/2611.09822v3#A9.E23>)) is $0$ for $q_{c}=0$ and the bit of the chosen vector for $q_{c}=1$. The baseline already uses one AND gate per angle bit to control the rotation. Eq. ([23](<https://arxiv.org/html/2611.09822v3#A9.E23>)) also needs one AND gate per bit, plus one per rotation for $\beta$. With the one-hot register, the rotations and their angles cost $11{,}818$ $T$ per call rather than $18{,}844$ $T$, and the angle register is no longer needed.

<a id="block-A9.SS3-block-6"></a>

The inner stage uses the same idea. It keeps a $126$-qubit one-hot register for $(r,c)$ and a $5$-bit binary register for $b$, so each alias-sampling lookup \[[175](<https://arxiv.org/html/2611.09822v3#biba.bibx24>)\] costs $390$ $T$, against $1{,}968$ $T$ for the QROAM of the baseline. Together with the one-hot select, this accounts for $96\%$ of the $T$ gates saved per walk step (Table [S3](<https://arxiv.org/html/2611.09822v3#A9.T3>)).

<a id="block-A9.SS3-block-7"></a>

Our solution also includes a second, smaller improvement, which halves the cost of the spin swaps. Rather than performing the basis rotations once for each spin, the baseline applies them to the spin-up qubits only and, controlled by a qubit in superposition, swaps the spin-down qubits into their place before and back after, with four blocks of $58$ controlled swaps per step \[[211](<https://arxiv.org/html/2611.09822v3#biba.bibx60>)\]. Since swapping two qubits only flips the sign of their antisymmetric state $(|01\rangle-|10\rangle)/\sqrt{2}$, each block can instead be implemented as a single controlled sign flip, applied when an odd number of the $58$ orbitals are in that state. After a Clifford change of basis to Bell pairs, the circuit computes this parity with $58$ Toffolis, or $232$ $T$, as many as one block of swaps, and erases it with $X$-basis measurements for free. Since the system register is untouched between consecutive select calls, one parity serves two swap blocks.

<a id="A9.SS4"></a>

### I.4 Resource counts

<a id="block-A9.SS4-block-1"></a>

The best verified circuit uses $Q=333$ logical qubits and $\mathcal{T}=1{,}310{,}839{,}337\approx 1.31\times 10^{9}$ $T$ gates, so $Q\cdot\mathcal{T}=436{,}509{,}499{,}221\approx 4.37\times 10^{11}$, $2.49\times$ below the baseline (Fig. [3](<https://arxiv.org/html/2611.09822v3#S2.F3>)a,b). This comes from $1.67\times$ fewer $T$ gates per walk step (Appendix [I.3](<https://arxiv.org/html/2611.09822v3#A9.SS3>)), $1.44\times$ fewer qubits and $3\%$ fewer walk steps. The qubits are the $116$ system qubits, a $16$-qubit phase-estimation register, an $11$-qubit phase-gradient register, $17$ and $24$ qubits for the outer and inner state-preparation registers, and $149$ qubits of workspace shared by the subroutines. Most of the saving against the $481$ qubits of the baseline comes from dropping its $247$-qubit angle register.

<a id="block-A9.SS4-block-2"></a>

The circuit runs $M=47{,}487$ walk steps. We bound $E_{0}\leq E_{\mathrm{ub}}=-130.1526$ Ha with a $3{,}000$-determinant quartet wavefunction, whose energy is checked in Lean. This is $0.31$ Ha below the quartet ROHF bound of the baseline and gives $E_{\mathrm{gap}}=4.835$ Ha and $\lambda_{\mathrm{eff}}=30.30$ Ha, $3\%$ below the $31.23$ Ha of the baseline. A slightly tighter error bound for phase estimation than Eq. ([21](<https://arxiv.org/html/2611.09822v3#A9.E21>)) saves another $0.2\%$. The state preparation is approximate, so the block-encoded Hamiltonian differs from $H_{\mathrm{DFTHC}}$ by at most $4.0\times 10^{-7}$ Ha on the $63$-electron sector. This comes from the synthesized rotations in the state preparation, and the correctness proof adds it to the phase-estimation error to show that the total stays within $\varepsilon$.

<table>
<tr><th>Part of a walk step</th><th>Baseline</th><th>This work</th></tr>
<tr><th>Rotations and their angles</th><td>$37{,}688$</td><td>$23{,}636$</td></tr>
<tr><th>Index decoding</th><td>$264$</td><td>$440$</td></tr>
<tr><th>Spin swaps</th><td>$928$</td><td>$464$</td></tr>
<tr><th>Outer state preparation</th><td>$1{,}032$</td><td>$598$</td></tr>
<tr><th>Inner state preparation</th><td>$5{,}888$</td><td>$2{,}264$</td></tr>
<tr><th>Total</th><td>$45{,}800$</td><td>$27{,}402$</td></tr>
</table>

Table S3: $T$ gates per walk step for the baseline and for a step inside the first eight blocks ($45{,}440$ steps) of the best verified circuit. Reflections and phase-estimation control are counted separately in the text.

The walk steps run in $16$ blocks totaling $47{,}360$ steps, followed by $127$ single steps. As qubits of the phase-estimation register are prepared stage by stage, fewer remain free as extra workspace for select: $8$ blocks ($45{,}440$ steps in total) borrow $11$ unprepared qubits for $160$ workspace qubits at the $27{,}402$ $T$ per step of Table [S3](<https://arxiv.org/html/2611.09822v3#A9.T3>), $1$ block of $1{,}024$ steps borrows $10$ qubits ($28{,}298$ $T$ per step), and $7$ blocks of $128$ steps borrow $7$ qubits ($31{,}010$ $T$ per step). On top of Table [S3](<https://arxiv.org/html/2611.09822v3#A9.T3>), the baseline spends $268$ $T$ per step on reflections and phase-estimation control, for $46{,}068$ $T$ in total. Each of our blocks uses $84$ $T$ for each reflection between its steps and $232$ $T$ for an ordinary first swap block. The $127$ single steps cost $37{,}642$ $T$ each (including $418$ $T$ per inner lookup), because all phase-estimation qubits are then in use and select has to fit in $149$ qubits of workspace. The reflections between blocks and between single steps, together with phase-estimation control, take $13{,}316$ $T$, with $31$ reflections controlled by the phase-estimation register. Preparing the initial state of the phase-estimation register takes $142{,}248$ $T$, the inverse QFT $12{,}603$ $T$ and the phase-gradient state $1{,}036$ $T$. Adding these up gives the $\mathcal{T}=1{,}310{,}839{,}337$ quoted above.

<a id="biba"></a>

## Appendix References

<a id="biba.bibx1"></a>

\[152\] Michael. Beverland et al. “Assessing requirements to scale to practical quantum advantage”, 2022 DOI: [10.48550/arXiv.2211.07629](<https://dx.doi.org/10.48550/arXiv.2211.07629>)

<a id="biba.bibx2"></a>

\[153\] John Preskill “Beyond NISQ: The Megaquop Machine” In ACM Transactions on Quantum Computing 6.3, 2025, pp. 1–7 DOI: [10.1145/3723153](<https://dx.doi.org/10.1145/3723153>)

<a id="biba.bibx3"></a>

\[154\] Markus Reiher, Nathan Wiebe, Krysta. Svore, Dave Wecker and Matthias Troyer “Elucidating reaction mechanisms on quantum computers” In Proceedings of the National Academy of Sciences 114.29, 2017, pp. 7555–7560 DOI: [10.1073/pnas.1619152114](<https://dx.doi.org/10.1073/pnas.1619152114>)

<a id="biba.bibx4"></a>

\[155\] Joonho Lee et al. “Even More Efficient Quantum Computations of Chemistry Through Tensor Hypercontraction” In PRX Quantum 2, 2021, pp. 030305 DOI: [10.1103/PRXQuantum.2.030305](<https://dx.doi.org/10.1103/PRXQuantum.2.030305>)

<a id="biba.bibx5"></a>

\[156\] Alexander Novikov et al. “AlphaEvolve: A coding agent for scientific and algorithmic discovery”, 2025 arXiv:[2506.13131 \[cs.AI\]](<https://arxiv.org/abs/2506.13131>)

<a id="biba.bibx6"></a>

\[157\] Thomas Hubert et al. “Olympiad-level formal mathematical reasoning with reinforcement learning” In Nature 651.8106, 2026, pp. 607–613 DOI: [10.1038/s41586-025-09833-y](<https://dx.doi.org/10.1038/s41586-025-09833-y>)

<a id="biba.bibx7"></a>

\[158\] Ryan Babbush et al. “Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations” In PRX Quantum 7, 2026, pp. 031001 DOI: [10.1103/j3xf-bw18](<https://dx.doi.org/10.1103/j3xf-bw18>)

<a id="biba.bibx8"></a>

\[159\] Marcos Crichigno and Steve Flammia “Automating quantum circuit optimization with AI agents”, 2026 arXiv:[2610.31352 \[quant-ph\]](<https://arxiv.org/abs/2610.31352>)

<a id="biba.bibx9"></a>

\[160\] Lov. Grover “A fast quantum mechanical algorithm for database search” In Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing, 1996, pp. 212–219 DOI: [10.1145/237814.237866](<https://dx.doi.org/10.1145/237814.237866>)

<a id="biba.bibx10"></a>

\[161\] Thomas Häner, Martin Roetteler and Krysta. Svore “Optimizing Quantum Circuits for Arithmetic”, 2018 arXiv:[1805.12445 \[quant-ph\]](<https://arxiv.org/abs/1805.12445>)

<a id="biba.bibx11"></a>

\[162\] Peter. Shor “Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer” In SIAM Journal on Computing 26.5, 1997, pp. 1484–1509 DOI: [10.1137/S0097539795293172](<https://dx.doi.org/10.1137/S0097539795293172>)

<a id="biba.bibx12"></a>

\[163\] Stephen. Jordan et al. “Optimization by decoded quantum interferometry” In Nature 646.8086, 2025, pp. 831–836 DOI: [10.1038/s41586-025-09527-5](<https://dx.doi.org/10.1038/s41586-025-09527-5>)

<a id="biba.bibx13"></a>

\[164\] Alán Aspuru-Guzik, Anthony. Dutoi, Peter. Love and Martin Head-Gordon “Simulated Quantum Computation of Molecular Energies” In Science 309.5741, 2005, pp. 1704–1707 DOI: [10.1126/science.1113479](<https://dx.doi.org/10.1126/science.1113479>)

<a id="biba.bibx14"></a>

\[165\] Ivan Kassal, Stephen. Jordan, Peter. Love, Masoud Mohseni and Alán Aspuru-Guzik “Polynomial-time quantum algorithm for the simulation of chemical dynamics” In Proceedings of the National Academy of Sciences 105.48, 2008, pp. 18681–18686 DOI: [10.1073/pnas.0808245105](<https://dx.doi.org/10.1073/pnas.0808245105>)

<a id="biba.bibx15"></a>

\[166\] Raffaele Santagati et al. “Drug design on quantum computers” In Nature Physics 20.4, 2024, pp. 549–557 DOI: [10.1038/s41567-024-02411-5](<https://dx.doi.org/10.1038/s41567-024-02411-5>)

<a id="biba.bibx16"></a>

\[167\] Bela Bauer, Sergey Bravyi, Mario Motta and Garnet-Lic Chan “Quantum Algorithms for Quantum Chemistry and Quantum Materials Science” In Chemical Reviews 120.22, 2020, pp. 12685–12717 DOI: [10.1021/acs.chemrev.9b00829](<https://dx.doi.org/10.1021/acs.chemrev.9b00829>)

<a id="biba.bibx17"></a>

\[168\] Alain Delgado et al. “Simulating key properties of lithium-ion batteries with a fault-tolerant quantum computer” In Physical Review A 106.3, 2022, pp. 032428 DOI: [10.1103/PhysRevA.106.032428](<https://dx.doi.org/10.1103/PhysRevA.106.032428>)

<a id="biba.bibx18"></a>

\[169\] Stephen. Jordan, Keith.. Lee and John Preskill “Quantum Algorithms for Quantum Field Theories” In Science 336.6085, 2012, pp. 1130–1133 DOI: [10.1126/science.1217069](<https://dx.doi.org/10.1126/science.1217069>)

<a id="biba.bibx19"></a>

\[170\] Christian. Bauer et al. “Quantum Simulation for High-Energy Physics” In PRX Quantum 4.2, 2023, pp. 027001 DOI: [10.1103/PRXQuantum.4.027001](<https://dx.doi.org/10.1103/PRXQuantum.4.027001>)

<a id="biba.bibx20"></a>

\[171\] I. Joseph et al. “Quantum computing for fusion energy science applications” In Physics of Plasmas 30.1, 2023, pp. 010501 DOI: [10.1063/5.0123765](<https://dx.doi.org/10.1063/5.0123765>)

<a id="biba.bibx21"></a>

\[172\] Alexander. Dalzell et al. “Quantum Algorithms: A Survey of Applications and End-to-end Complexities” Cambridge University Press, 2025 DOI: [10.1017/9781009639651](<https://dx.doi.org/10.1017/9781009639651>)

<a id="biba.bibx22"></a>

\[173\] Rajeev Acharya et al. “Quantum error correction below the surface code threshold” In Nature 638.8052, 2025, pp. 920–926 DOI: [10.1038/s41586-024-08449-y](<https://dx.doi.org/10.1038/s41586-024-08449-y>)

<a id="biba.bibx23"></a>

\[174\] Craig Gidney “Halving the cost of quantum addition” In Quantum 2, 2018, pp. 74 DOI: [10.22331/q-2018-06-18-74](<https://dx.doi.org/10.22331/q-2018-06-18-74>)

<a id="biba.bibx24"></a>

\[175\] Ryan Babbush et al. “Encoding Electronic Spectra in Quantum Circuits with Linear T Complexity” In Physical Review X 8, 2018, pp. 041015 DOI: [10.1103/PhysRevX.8.041015](<https://dx.doi.org/10.1103/PhysRevX.8.041015>)

<a id="biba.bibx25"></a>

\[176\] Guang Low and Isaac. Chuang “Hamiltonian Simulation by Qubitization” In Quantum 3, 2019, pp. 163 DOI: [10.22331/q-2019-07-12-163](<https://dx.doi.org/10.22331/q-2019-07-12-163>)

<a id="biba.bibx26"></a>

\[177\] András Gilyén, Yuan Su, Guang Low and Nathan Wiebe “Quantum singular value transformation and beyond: exponential improvements for quantum matrix arithmetics” In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, 2019, pp. 193–204 DOI: [10.1145/3313276.3316366](<https://dx.doi.org/10.1145/3313276.3316366>)

<a id="biba.bibx27"></a>

\[178\] Yuan Su, Dominic. Berry, Nathan Wiebe, Nicholas Rubin and Ryan Babbush “Fault-Tolerant Quantum Simulations of Chemistry in First Quantization” In PRX Quantum 2, 2021, pp. 040332 DOI: [10.1103/PRXQuantum.2.040332](<https://dx.doi.org/10.1103/PRXQuantum.2.040332>)

<a id="biba.bibx28"></a>

\[179\] Thomas Fösel, Petru Tighineanu, Talitha Weiss and Florian Marquardt “Reinforcement Learning with Neural Networks for Quantum Feedback” In Physical Review X 8.3, 2018, pp. 031084 DOI: [10.1103/PhysRevX.8.031084](<https://dx.doi.org/10.1103/PhysRevX.8.031084>)

<a id="biba.bibx29"></a>

\[180\] V.. Sivak et al. “Real-time quantum error correction beyond break-even” In Nature 616.7955, 2023, pp. 50–55 DOI: [10.1038/s41586-023-05782-6](<https://dx.doi.org/10.1038/s41586-023-05782-6>)

<a id="biba.bibx30"></a>

\[181\] Mario Krenn, Jonas Landgraf, Thomas Foesel and Florian Marquardt “Artificial intelligence and machine learning for quantum technologies” In Physical Review A 107.1, 2023, pp. 010101 DOI: [10.1103/PhysRevA.107.010101](<https://dx.doi.org/10.1103/PhysRevA.107.010101>)

<a id="biba.bibx31"></a>

\[182\] Johannes Bausch et al. “Learning high-accuracy error decoding for quantum processors” In Nature 635.8040, 2024, pp. 834–840 DOI: [10.1038/s41586-024-08148-8](<https://dx.doi.org/10.1038/s41586-024-08148-8>)

<a id="biba.bibx32"></a>

\[183\] Francisco.. Ruiz et al. “Quantum circuit optimization with AlphaTensor” In Nature Machine Intelligence 7.3, 2025, pp. 374–385 DOI: [10.1038/s42256-025-01001-1](<https://dx.doi.org/10.1038/s42256-025-01001-1>)

<a id="biba.bibx33"></a>

\[184\] Alhussein Fawzi et al. “Discovering faster matrix multiplication algorithms with reinforcement learning” In Nature 610.7930, 2022, pp. 47–53 DOI: [10.1038/s41586-022-05172-4](<https://dx.doi.org/10.1038/s41586-022-05172-4>)

<a id="biba.bibx34"></a>

\[185\] Daniel. Mankowitz et al. “Faster sorting algorithms discovered using deep reinforcement learning” In Nature 618.7964, 2023, pp. 257–263 DOI: [10.1038/s41586-023-06004-9](<https://dx.doi.org/10.1038/s41586-023-06004-9>)

<a id="biba.bibx35"></a>

\[186\] Bernardino Romera-Paredes et al. “Mathematical discoveries from program search with large language models” In Nature 625, 2024, pp. 468–475 DOI: [10.1038/s41586-023-06924-6](<https://dx.doi.org/10.1038/s41586-023-06924-6>)

<a id="biba.bibx36"></a>

\[187\] Robert Lange, Yuki Imajuku and Edoardo Cetin “ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution” In International Conference on Learning Representations (ICLR), 2026 arXiv:[2509.19349 \[cs.CL\]](<https://arxiv.org/abs/2509.19349>)

<a id="biba.bibx37"></a>

\[188\] Josh Alman and Virginia Vassilevska “Truly Subquadratic 3SUM and Truly Subcubic APSP via Triangles in Sparse Lopsided Graphs”, 2026 arXiv: [https://arxiv.org/abs/2610.06783](<https://arxiv.org/abs/2610.06783>)

<a id="biba.bibx38"></a>

\[189\] OpenAI “The Exponential Time Hypothesis is False” Preprint, dated October 25, 2026; AI-generated, not peer-reviewed, [https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026](<https://github.com/openai/math/tree/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026>), 2026

<a id="biba.bibx39"></a>

\[190\] Anthropic and Claude “A $2^{o(n)}$ Time Algorithm for 3-SAT” Paper and Lean 4 formalization (Lean v4.33.1, Mathlib v4.33.1); AI-generated, not peer-reviewed, [https://github.com/anthropics/formal-math/tree/main/eth](<https://github.com/anthropics/formal-math/tree/main/eth>), 2026

<a id="biba.bibx40"></a>

\[191\] Tudor Achim et al. “Aristotle: IMO-level Automated Theorem Proving”, 2025 arXiv:[2510.01346 \[cs.AI\]](<https://arxiv.org/abs/2510.01346>)

<a id="biba.bibx41"></a>

\[192\] Leonardo de Moura and Sebastian Ullrich “The Lean 4 Theorem Prover and Programming Language” In Automated Deduction – CADE 28 12699, Lecture Notes in Computer Science Springer, 2021, pp. 625–635 DOI: [10.1007/978-3-030-79876-5\_37](<https://dx.doi.org/10.1007/978-3-030-79876-5_37>)

<a id="biba.bibx42"></a>

\[193\] Yuan Feng and Mingsheng Ying “Quantum Hoare Logic with Classical Variables” In ACM Transactions on Quantum Computing 2.4, 2021, pp. 1–43 DOI: [10.1145/3456877](<https://dx.doi.org/10.1145/3456877>)

<a id="biba.bibx43"></a>

\[194\] Daniel Litinski “A Game of Surface Codes: Large-Scale Quantum Computing with Lattice Surgery” In Quantum 3, 2019, pp. 128 DOI: [10.22331/q-2019-03-05-128](<https://dx.doi.org/10.22331/q-2019-03-05-128>)

<a id="biba.bibx44"></a>

\[195\] Google DeepMind “Formal quantum computation in Lean 4”, [https://github.com/google-deepmind/formal-quantum-computation](<https://github.com/google-deepmind/formal-quantum-computation>), 2026

<a id="biba.bibx45"></a>

\[196\] The mathlib Community “The Lean mathematical library” In Proceedings of the 9th ACM SIGPLAN International Conference on Certified Programs and Proofs, 2020, pp. 367–381 DOI: [10.1145/3372885.3373824](<https://dx.doi.org/10.1145/3372885.3373824>)

<a id="biba.bibx46"></a>

\[197\] The Physlib Community “Physlib: The Lean Physics Library”, [https://github.com/leanprover-community/physlib](<https://github.com/leanprover-community/physlib>), 2024

<a id="biba.bibx47"></a>

\[198\] Alex Meiburg “Quantum Information in Lean” In GitHub repository GitHub, [https://github.com/Timeroot/Lean-QuantumInfo](<https://github.com/Timeroot/Lean-QuantumInfo>), 2024

<a id="biba.bibx48"></a>

\[199\] Nicholas. Rubin et al. “Quantum computation of stopping power for inertial fusion target design” In Proceedings of the National Academy of Sciences 121.23, 2024, pp. e2317772121 DOI: [10.1073/pnas.2317772121](<https://dx.doi.org/10.1073/pnas.2317772121>)

<a id="biba.bibx49"></a>

\[200\] Kyle Swanson, Wesley Wu, Nash. Bulaong, John. Pak and James Zou “The Virtual Lab of AI agents designs new SARS-CoV-2 nanobodies” In Nature 646.8085, 2025, pp. 716–723 DOI: [10.1038/s41586-025-09442-9](<https://dx.doi.org/10.1038/s41586-025-09442-9>)

<a id="biba.bibx50"></a>

\[201\] Juraj Gottweis, Wei-Hung Weng and Alexander Daryin “Accelerating scientific discovery with Co-Scientist” In Nature 655.8122, 2026, pp. 487–496 DOI: [10.1038/s41586-026-10644-y](<https://dx.doi.org/10.1038/s41586-026-10644-y>)

<a id="biba.bibx51"></a>

\[202\] Chris Lu et al. “Towards end-to-end automation of AI research” In Nature 651.8107, 2026, pp. 914–919 DOI: [10.1038/s41586-026-10265-5](<https://dx.doi.org/10.1038/s41586-026-10265-5>)

<a id="biba.bibx52"></a>

\[203\] Ali. Ghareeb et al. “A multi-agent system for automating scientific discovery” In Nature 655, 2026, pp. 497–505 DOI: [10.1038/s41586-026-10652-y](<https://dx.doi.org/10.1038/s41586-026-10652-y>)

<a id="biba.bibx53"></a>

\[204\] Mert Yuksekgonul et al. “Learning to Discover at Test Time” In Proceedings of the 43rd International Conference on Machine Learning (ICML), 2026 arXiv:[2601.16175 \[cs.LG\]](<https://arxiv.org/abs/2601.16175>)

<a id="biba.bibx54"></a>

\[205\] George Tsoukalas et al. “Advancing mathematics research with AI-driven formal proof search” In Science 394.6820, 2026, pp. 234–239 DOI: [10.1126/science.aej2213](<https://dx.doi.org/10.1126/science.aej2213>)

<a id="biba.bibx55"></a>

\[206\] Ao Qu et al. “CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery” In Proceedings of the Conference on Language Modeling (COLM), 2026 arXiv:[2604.01658 \[cs.AI\]](<https://arxiv.org/abs/2604.01658>)

<a id="biba.bibx56"></a>

\[207\] Ziqian Zhong, Aditi Raghunathan and Nicholas Carlini “ImpossibleBench: Measuring LLMs’ Propensity of Exploiting Test Cases”, 2025 arXiv:[2510.20270](<https://arxiv.org/abs/2510.20270>)

<a id="biba.bibx57"></a>

\[208\] Lean FRO “comparator: A trustworthy judge for Lean proofs from untrusted sources” Accessed Nov. 2026, [https://github.com/leanprover/comparator](<https://github.com/leanprover/comparator>), 2025

<a id="biba.bibx58"></a>

\[209\] Matthew Pocrnic, Ignacio Loaiza, Juan Arrazola, Nathan Wiebe and Danial Motlagh “Efficient Simulation of Pre-Born-Oppenheimer Dynamics on a Quantum Computer”, 2026 arXiv:[2602.11272 \[quant-ph\]](<https://arxiv.org/abs/2602.11272>)

<a id="biba.bibx59"></a>

\[210\] Matthew Pocrnic and Danial Motlagh “Improved constant factors for qubitized Hamiltonian simulation”, 2026 arXiv:[2608.02734 \[quant-ph\]](<https://arxiv.org/abs/2608.02734>)

<a id="biba.bibx60"></a>

\[211\] Guang Low et al. “Fast Quantum Simulation of Electronic Structure by Spectral Amplification” In Physical Review X 15.4, 2025, pp. 041016 DOI: [10.1103/pb2g-j9cw](<https://dx.doi.org/10.1103/pb2g-j9cw>)

<a id="biba.bibx61"></a>

\[212\] Guang Low et al. “A denser planar surface code”, 2026 DOI: [10.48550/arXiv.2605.30455](<https://dx.doi.org/10.48550/arXiv.2605.30455>)

<a id="biba.bibx62"></a>

\[213\] Michel Boyer, Gilles Brassard, Peter Høyer and Alain Tapp “Tight Bounds on Quantum Searching” In Fortschritte der Physik 46.4–5, 1998, pp. 493–505 DOI: [10.1002/(SICI)1521-3978(199806)46:4/5&lt;493::AID-PROP493&gt;3.0.CO;2-P](<https://dx.doi.org/10.1002/(SICI)1521-3978(199806)46:4/5<493::AID-PROP493%3E3.0.CO;2-P>)

<a id="biba.bibx63"></a>

\[214\] Christof Zalka “Grover’s quantum searching algorithm is optimal” In Physical Review A 60.4, 1999, pp. 2746–2751 DOI: [10.1103/PhysRevA.60.2746](<https://dx.doi.org/10.1103/PhysRevA.60.2746>)

<a id="biba.bibx64"></a>

\[215\] Robert. Gingrich, Colin. Williams and Nicolas. Cerf “Generalized quantum search with parallelism” In Physical Review A 61.5, 2000, pp. 052313 DOI: [10.1103/PhysRevA.61.052313](<https://dx.doi.org/10.1103/PhysRevA.61.052313>)

<a id="biba.bibx65"></a>

\[216\] Lov. Grover and Jaikumar Radhakrishnan “Quantum search for multiple items using parallel queries”, 2004 DOI: [10.48550/arXiv.quant-ph/0407217](<https://dx.doi.org/10.48550/arXiv.quant-ph/0407217>)

<a id="biba.bibx66"></a>

\[217\] Wang Fang and Chris Heunen “Weakly Measured Loops for Quantum Amplitude Amplification: Oracle Savings and Adaptive Search with Unknown Target Probability”, 2026 DOI: [10.48550/arXiv.2609.39621](<https://dx.doi.org/10.48550/arXiv.2609.39621>)

<a id="biba.bibx67"></a>

\[218\] Vineet Goyal and Karl Sigman “On simulating a class of Bernstein polynomials” In ACM Transactions on Modeling and Computer Simulation 22.2, 2012, pp. 1–5 DOI: [10.1145/2133390.2133396](<https://dx.doi.org/10.1145/2133390.2133396>)

<a id="biba.bibx68"></a>

\[219\] Thomas. Hentschel et al. “Improving dynamic collision frequencies: Impacts on dynamic structure factors and stopping powers in warm dense matter” In Physics of Plasmas 30.6, 2023, pp. 062703 DOI: [10.1063/5.0143738](<https://dx.doi.org/10.1063/5.0143738>)

<a id="biba.bibx69"></a>

\[220\] O.. Hurricane et al. “Physics principles of inertial confinement fusion and U.S. program overview” In Reviews of Modern Physics 95.2, 2023, pp. 025005 DOI: [10.1103/RevModPhys.95.025005](<https://dx.doi.org/10.1103/RevModPhys.95.025005>)

<a id="biba.bibx70"></a>

\[221\] Paul. Grabowski, Michael. Surh, David. Richards, Frank. Graziani and Michael. Murillo “Molecular Dynamics Simulations of Classical Stopping Power” In Physical Review Letters 111.21, 2013, pp. 215002 DOI: [10.1103/PhysRevLett.111.215002](<https://dx.doi.org/10.1103/PhysRevLett.111.215002>)

<a id="biba.bibx71"></a>

\[222\] Alfredo. Correa “Calculating electronic stopping power in materials from first principles” In Computational Materials Science 150, 2018, pp. 291–303 DOI: [10.1016/j.commatsci.2018.03.064](<https://dx.doi.org/10.1016/j.commatsci.2018.03.064>)

<a id="biba.bibx72"></a>

\[223\] Y.. Ding, A.. White, S.. Hu, O. Certik and L.. Collins “Ab Initio Studies on the Stopping Power of Warm Dense Matter with Time-Dependent Orbital-Free Density Functional Theory” In Physical Review Letters 121.14, 2018, pp. 145001 DOI: [10.1103/PhysRevLett.121.145001](<https://dx.doi.org/10.1103/PhysRevLett.121.145001>)

<a id="biba.bibx73"></a>

\[224\] P.. Grabowski et al. “Review of the first charged-particle transport coefficient comparison workshop” In High Energy Density Physics 37, 2020, pp. 100905 DOI: [10.1016/j.hedp.2020.100905](<https://dx.doi.org/10.1016/j.hedp.2020.100905>)

<a id="biba.bibx74"></a>

\[225\] Gregory. Scholes, Graham. Fleming, Alexandra Olaya-Castro and Rienk van Grondelle “Lessons from nature about solar light harvesting” In Nature Chemistry 3.10, 2011, pp. 763–774 DOI: [10.1038/nchem.1145](<https://dx.doi.org/10.1038/nchem.1145>)

<a id="biba.bibx75"></a>

\[226\] J. Lennox, Daniel. Kurtz, Tao Huang and Jillian. Dempsey “Excited-State Proton-Coupled Electron Transfer: Different Avenues for Promoting Proton/Electron Movement with Solar Photons” In ACS Energy Letters 2.5, 2017, pp. 1246–1256 DOI: [10.1021/acsenergylett.7b00063](<https://dx.doi.org/10.1021/acsenergylett.7b00063>)

<a id="biba.bibx76"></a>

\[227\] Emily. Gentry and Robert. Knowles “Synthetic Applications of Proton-Coupled Electron Transfer” In Accounts of Chemical Research 49.8, 2016, pp. 1546–1556 DOI: [10.1021/acs.accounts.6b00272](<https://dx.doi.org/10.1021/acs.accounts.6b00272>)

<a id="biba.bibx77"></a>

\[228\] Dario Polli et al. “Conical intersection dynamics of the primary photoisomerization event in vision” In Nature 467.7314, 2010, pp. 440–443 DOI: [10.1038/nature09346](<https://dx.doi.org/10.1038/nature09346>)

<a id="biba.bibx78"></a>

\[229\] Graham. Worth and Lorenz. Cederbaum “Beyond Born–Oppenheimer: Molecular Dynamics Through a Conical Intersection” In Annual Review of Physical Chemistry 55.1, 2004, pp. 127–158 DOI: [10.1146/annurev.physchem.55.091602.094335](<https://dx.doi.org/10.1146/annurev.physchem.55.091602.094335>)

<a id="biba.bibx79"></a>

\[230\] Sebastian Mai and Leticia González “Molecular Photochemistry: Recent Developments in Theory” In Angewandte Chemie International Edition 59.39, 2020, pp. 16832–16846 DOI: [10.1002/anie.201916381](<https://dx.doi.org/10.1002/anie.201916381>)

<a id="biba.bibx80"></a>

\[231\] Sharon Hammes-Schiffer and Alexei. Stuchebrukhov “Theory of Coupled Electron and Proton Transfer Reactions” In Chemical Reviews 110.12, 2010, pp. 6939–6960 DOI: [10.1021/cr1001436](<https://dx.doi.org/10.1021/cr1001436>)

<a id="biba.bibx81"></a>

\[232\] Joseph. Subotnik et al. “Understanding the Surface Hopping View of Electronic Transitions and Decoherence” In Annual Review of Physical Chemistry 67.1, 2016, pp. 387–417 DOI: [10.1146/annurev-physchem-040215-112245](<https://dx.doi.org/10.1146/annurev-physchem-040215-112245>)

<a id="biba.bibx82"></a>

\[233\] Rachel Crespo-Otero and Mario Barbatti “Recent Advances and Perspectives on Nonadiabatic Mixed Quantum–Classical Dynamics” In Chemical Reviews 118.15, 2018, pp. 7026–7068 DOI: [10.1021/acs.chemrev.7b00577](<https://dx.doi.org/10.1021/acs.chemrev.7b00577>)

<a id="biba.bibx83"></a>

\[234\] Guanghua Ren, Qingchi Meng, Jinfeng Zhao and Tianshu Chu “Molecular Design for Electron-Driven Double-Proton Transfer: A New Scenario for Excited-State Proton-Coupled Electron Transfer” In The Journal of Physical Chemistry A 122.47, 2018, pp. 9191–9198 DOI: [10.1021/acs.jpca.8b09264](<https://dx.doi.org/10.1021/acs.jpca.8b09264>)

<a id="biba.bibx84"></a>

\[235\] Ilia. Denisov, Thomas. Makris, Stephen. Sligar and Ilme Schlichting “Structure and Chemistry of Cytochrome P450” In Chemical Reviews 105.6, 2005, pp. 2253–2278 DOI: [10.1021/cr0307143](<https://dx.doi.org/10.1021/cr0307143>)

<a id="biba.bibx85"></a>

\[236\] F. Guengerich “Cytochrome P450 and Chemical Toxicology” In Chemical Research in Toxicology 21.1, 2008, pp. 70–83 DOI: [10.1021/tx700079z](<https://dx.doi.org/10.1021/tx700079z>)

<a id="biba.bibx86"></a>

\[237\] Jonathan Rittle and Michael. Green “Cytochrome P450 Compound I: Capture, Characterization, and C–H Bond Activation Kinetics” In Science 330.6006, 2010, pp. 933–937 DOI: [10.1126/science.1193478](<https://dx.doi.org/10.1126/science.1193478>)

<a id="biba.bibx87"></a>

\[238\] Sason Shaik et al. “P450 Enzymes: Their Structure, Reactivity, and Selectivity—Modeled by QM/MM Calculations” In Chemical Reviews 110.2, 2010, pp. 949–1017 DOI: [10.1021/cr900121s](<https://dx.doi.org/10.1021/cr900121s>)

<a id="biba.bibx88"></a>

\[239\] Joshua. Goings et al. “Reliably assessing the electronic structure of cytochrome P450 on today’s classical computers and tomorrow’s quantum computers” In Proceedings of the National Academy of Sciences 119.38, 2022, pp. e2203533119 DOI: [10.1073/pnas.2203533119](<https://dx.doi.org/10.1073/pnas.2203533119>)

<a id="biba.bibx89"></a>

\[240\] Athena Caesura et al. “Faster Quantum Chemistry Simulations on a Quantum Computer with Improved Tensor Factorization and Active Volume Compilation” In PRX Quantum 6.3, 2025, pp. 030337 DOI: [10.1103/yngp-5fpm](<https://dx.doi.org/10.1103/yngp-5fpm>)

<a id="biba.bibx90"></a>

\[241\] Craig Gidney “How to factor 2048 bit RSA integers with less than a million noisy qubits”, 2025 arXiv:[2505.15917 \[quant-ph\]](<https://arxiv.org/abs/2505.15917>)

<a id="biba.bibx91"></a>

\[242\] Kesha Hietala, Robert Rand, Shih-Han Hung, Xiaodi Wu and Michael Hicks “A verified optimizer for quantum circuits” In Proceedings of the ACM on Programming Languages 5.POPL, 2021, pp. 1–29 DOI: [10.1145/3434318](<https://dx.doi.org/10.1145/3434318>)

<a id="biba.bibx92"></a>

\[243\] Li Zhou, Gilles Barthe, Pierre-Yves Strub, Junyi Liu and Mingsheng Ying “CoqQ: Foundational Verification of Quantum Programs” In Proceedings of the ACM on Programming Languages 7.POPL, 2023, pp. 833–865 DOI: [10.1145/3571222](<https://dx.doi.org/10.1145/3571222>)

<a id="biba.bibx93"></a>

\[244\] Mingsheng Ying “Floyd–Hoare logic for quantum programs” In ACM Transactions on Programming Languages and Systems 33.6, 2011, pp. 1–49 DOI: [10.1145/2049706.2049708](<https://dx.doi.org/10.1145/2049706.2049708>)

<a id="biba.bibx94"></a>

\[245\] Junyi Liu et al. “Formal Verification of Quantum Algorithms Using Quantum Hoare Logic” In Computer Aided Verification – CAV 2019 11562, Lecture Notes in Computer Science Springer, 2019, pp. 187–207 DOI: [10.1007/978-3-030-25543-5\_12](<https://dx.doi.org/10.1007/978-3-030-25543-5_12>)

<a id="biba.bibx95"></a>

\[246\] Lei Zhang, Mingrui Jing, Yusheng Zhao, Jiahong Liu and Xin Wang “Lean-QuantumAlg: A Framework for AI Agents to Produce Quantum Algorithms that Humans Can Trust”, 2026 arXiv:[2610.30216 \[quant-ph\]](<https://arxiv.org/abs/2610.30216>)

<a id="biba.bibx96"></a>

\[247\] Yuanjie Ren et al. “QEDIA: Quantum Program Verification in Lean”, 2026 arXiv:[2610.17708 \[quant-ph\]](<https://arxiv.org/abs/2610.17708>)

<a id="biba.bibx97"></a>

\[248\] Mingsheng Ying “A practical quantum Hoare logic with classical variables, I” In Information and Computation 309, 2026, pp. 105417 DOI: [https://doi.org/10.1016/j.ic.2026.105417](<https://dx.doi.org/https://doi.org/10.1016/j.ic.2026.105417>)

<a id="biba.bibx98"></a>

\[249\] Katsuhiro Endo “Reducing Trust Cost in Quantum Application Development Using AI”, 2026 arXiv:[2610.14665 \[quant-ph\]](<https://arxiv.org/abs/2610.14665>)

<a id="biba.bibx99"></a>

\[250\] Carroll Morgan, Annabelle McIver and Karen Seidel “Probabilistic Predicate Transformers” In ACM Transactions on Programming Languages and Systems 18.3, 1996, pp. 325–353 DOI: [10.1145/229542.229547](<https://dx.doi.org/10.1145/229542.229547>)

<a id="biba.bibx100"></a>

\[251\] The Lean Developers “The Lean Language Reference (Lean v4.35.0), Chapter 17: The vcgen Tactic” Lean FRO. Accessed: 2026-11-04, [https://lean-lang.org/doc/reference/4.35.0/The--vcgen--tactic/](<https://lean-lang.org/doc/reference/4.35.0/The--vcgen--tactic/>), 2026

<a id="biba.bibx101"></a>

\[252\] Vladimir Gladshtein, George Pîrlea, Qiyuan Zhao, Vitaly Kurin and Ilya Sergey “Foundational Multi-Modal Program Verifiers” In Proceedings of the ACM on Programming Languages 10.POPL, 2026, pp. 2233–2264 DOI: [10.1145/3776719](<https://dx.doi.org/10.1145/3776719>)

<a id="biba.bibx102"></a>

\[253\] VERSE Lab “Loom: A Framework for Foundational Multi-Modal Program Verifiers in Lean” GitHub repository. Accessed: 2026-11-04, [https://github.com/verse-lab/loom](<https://github.com/verse-lab/loom>), 2026

<a id="biba.bibx103"></a>

\[254\] Stanley. Gudder and Richard Greechie “Effect Algebra Counterexamples” In Mathematica Slovaca 46.4, 1996, pp. 317–325 URL: [http://eudml.org/doc/31741](<http://eudml.org/doc/31741>)

<a id="biba.bibx104"></a>

\[255\] Bowen Baker et al. “Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation”, 2025 arXiv:[2503.11926 \[cs.AI\]](<https://arxiv.org/abs/2503.11926>)

<a id="biba.bibx105"></a>

\[256\] Samuel Schmidgall and Michael Moor “AgentRxiv: Towards Collaborative Autonomous Research”, 2025 arXiv:[2503.18102](<https://arxiv.org/abs/2503.18102>)

<a id="biba.bibx106"></a>

\[257\] Yukun Jiang, Yage Zhang, Xinyue Shen, Michael Backes and Yang Zhang ““Humans welcome to observe”: A First Look at the Agent Social Network Moltbook”, 2026 arXiv:[2602.10127](<https://arxiv.org/abs/2602.10127>)

<a id="biba.bibx107"></a>

\[258\] Yongqiang Chen, Gang Niu, James Cheng, Bo Han and Masashi Sugiyama “When and Why Does Multi-Agent Debate Fail and Does It Really Underperform?” In Proceedings of the 43rd International Conference on Machine Learning (ICML), 2026 arXiv:[2510.20963 \[cs.LG\]](<https://arxiv.org/abs/2510.20963>)

<a id="biba.bibx108"></a>

\[259\] Cody Jones “Low-overhead constructions for the fault-tolerant Toffoli gate” In Physical Review A 87, 2013, pp. 022328 DOI: [10.1103/PhysRevA.87.022328](<https://dx.doi.org/10.1103/PhysRevA.87.022328>)

<a id="biba.bibx109"></a>

\[260\] Tanuj Khattar and Craig Gidney “Rise of conditionally clean ancillae for efficient quantum circuit constructions” In Quantum 9, 2025, pp. 1752 DOI: [10.22331/q-2025-05-21-1752](<https://dx.doi.org/10.22331/q-2025-05-21-1752>)

<a id="biba.bibx110"></a>

\[261\] Austin. Fowler, Matteo Mariantoni, John. Martinis and Andrew. Cleland “Surface codes: Towards practical large-scale quantum computation” In Physical Review A 86.3, 2012, pp. 032324 DOI: [10.1103/PhysRevA.86.032324](<https://dx.doi.org/10.1103/PhysRevA.86.032324>)

<a id="biba.bibx111"></a>

\[262\] Dominic Horsman, Austin. Fowler, Simon Devitt and Rodney Van “Surface code quantum computing by lattice surgery” In New Journal of Physics 14.12, 2012, pp. 123011 DOI: [10.1088/1367-2630/14/12/123011](<https://dx.doi.org/10.1088/1367-2630/14/12/123011>)

<a id="biba.bibx112"></a>

\[263\] Sergey Bravyi and Alexei Kitaev “Universal quantum computation with ideal Clifford gates and noisy ancillas” In Physical Review A 71.2, 2005, pp. 022316 DOI: [10.1103/PhysRevA.71.022316](<https://dx.doi.org/10.1103/PhysRevA.71.022316>)

<a id="biba.bibx113"></a>

\[264\] Craig Gidney and Austin. Fowler “Efficient magic state factories with a catalyzed $|{CCZ}\rangle$ to $2|{T}\rangle$ transformation” In Quantum 3, 2019, pp. 135 DOI: [10.22331/q-2019-04-30-135](<https://dx.doi.org/10.22331/q-2019-04-30-135>)

<a id="biba.bibx114"></a>

\[265\] Craig Gidney, Noah Shutty and Cody Jones “Magic state cultivation: growing T states as cheap as CNOT gates”, 2024 DOI: [10.48550/arXiv.2409.17595](<https://dx.doi.org/10.48550/arXiv.2409.17595>)

<a id="biba.bibx115"></a>

\[266\] Craig Gidney, Michael Newman, Austin Fowler and Michael Broughton “A Fault-Tolerant Honeycomb Memory” In Quantum 5, 2021, pp. 605 DOI: [10.22331/q-2021-12-20-605](<https://dx.doi.org/10.22331/q-2021-12-20-605>)

<a id="biba.bibx116"></a>

\[267\] Isaac. Kim et al. “Fault-tolerant resource estimate for quantum chemical simulations: Case study on Li-ion battery electrolyte molecules” In Physical Review Research 4.2, 2022, pp. 023019 DOI: [10.1103/PhysRevResearch.4.023019](<https://dx.doi.org/10.1103/PhysRevResearch.4.023019>)

<a id="biba.bibx117"></a>

\[268\] Dominic. Berry, Craig Gidney, Mario Motta, Jarrod. McClean and Ryan Babbush “Qubitization of Arbitrary Basis Quantum Chemistry Leveraging Sparsity and Low Rank Factorization” In Quantum 3, 2019, pp. 208 DOI: [10.22331/q-2019-12-02-208](<https://dx.doi.org/10.22331/q-2019-12-02-208>)

<a id="biba.bibx118"></a>

\[269\] Andi Gu, Alek. Kemeny, Susanne. Yelin and Mikhail. Lukin “Discovering state-of-the-art quantum circuits with large language models”, 2026 arXiv:[2610.22367 \[quant-ph\]](<https://arxiv.org/abs/2610.22367>)

<a id="biba.bibx119"></a>

\[270\] Vera von Burg et al. “Quantum computing enhanced computational catalysis” In Physical Review Research 3.3, 2021, pp. 033055 DOI: [10.1103/PhysRevResearch.3.033055](<https://dx.doi.org/10.1103/PhysRevResearch.3.033055>)

<a id="biba.bibx120"></a>

\[271\] Nicholas. Rubin et al. “Fault-Tolerant Quantum Simulation of Materials Using Bloch Orbitals” In PRX Quantum 4.4, 2023, pp. 040303 DOI: [10.1103/PRXQuantum.4.040303](<https://dx.doi.org/10.1103/PRXQuantum.4.040303>)

<a id="biba.bibx121"></a>

\[272\] Daniel Litinski and Naomi Nickerson “Active volume: An architecture for efficient fault-tolerant quantum computers with limited non-local connections”, 2022 arXiv:[2211.15465 \[quant-ph\]](<https://arxiv.org/abs/2211.15465>)

<a id="biba.bibx122"></a>

\[273\] Sergey Bravyi et al. “High-threshold and low-overhead fault-tolerant quantum memory” In Nature 627.8005, 2024, pp. 778–782 DOI: [10.1038/s41586-024-07107-7](<https://dx.doi.org/10.1038/s41586-024-07107-7>)

<a id="biba.bibx123"></a>

\[274\] Craig Gidney and Martin Ekerå “How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits” In Quantum 5, 2021, pp. 433 DOI: [10.22331/q-2021-04-15-433](<https://dx.doi.org/10.22331/q-2021-04-15-433>)

<a id="biba.bibx124"></a>

\[275\] Stacey Jeffery, Frederic Magniez and Ronald de Wolf “Optimal Parallel Quantum Query Algorithms” In Algorithmica 79.2 Springer ScienceBusiness Media LLC, 2016, pp. 509–529 DOI: [10.1007/s00453-016-0206-z](<https://dx.doi.org/10.1007/s00453-016-0206-z>)

<a id="biba.bibx125"></a>

\[276\] Charles. Bennett, Ethan Bernstein, Gilles Brassard and Umesh Vazirani “Strengths and Weaknesses of Quantum Computing” In SIAM Journal on Computing 26.5, 1997, pp. 1510–1523 DOI: [10.1137/S0097539796300933](<https://dx.doi.org/10.1137/S0097539796300933>)

<a id="biba.bibx126"></a>

\[277\] Peter Høyer “Arbitrary phases in quantum amplitude amplification” In Physical Review A 62.5, 2000, pp. 052304 DOI: [10.1103/PhysRevA.62.052304](<https://dx.doi.org/10.1103/PhysRevA.62.052304>)

<a id="biba.bibx127"></a>

\[278\] G.. Long “Grover algorithm with zero theoretical failure rate” In Physical Review A 64.2, 2001, pp. 022307 DOI: [10.1103/PhysRevA.64.022307](<https://dx.doi.org/10.1103/PhysRevA.64.022307>)

<a id="biba.bibx128"></a>

\[279\] Gilles Brassard, Peter Høyer, Michele Mosca and Alain Tapp “Quantum amplitude amplification and estimation” In Quantum Computation and Information 305, Contemporary Mathematics American Mathematical Society, 2002, pp. 53–74 DOI: [10.1090/conm/305/05215](<https://dx.doi.org/10.1090/conm/305/05215>)

<a id="biba.bibx129"></a>

\[280\] Theodore. Yoder, Guang Low and Isaac. Chuang “Fixed-Point Quantum Search with an Optimal Number of Queries” In Physical Review Letters 113.21, 2014, pp. 210501 DOI: [10.1103/PhysRevLett.113.210501](<https://dx.doi.org/10.1103/PhysRevLett.113.210501>)

<a id="biba.bibx130"></a>

\[281\] David Aldenbro and Alexander Skalski “Comparing Grover’s algorithm to linear search when finding multiple queried elements”, 2024

<a id="biba.bibx131"></a>

\[282\] Ari Mizel “Critically Damped Quantum Search” In Physical Review Letters 102.15, 2009, pp. 150501 DOI: [10.1103/PhysRevLett.102.150501](<https://dx.doi.org/10.1103/PhysRevLett.102.150501>)

<a id="biba.bibx132"></a>

\[283\] Pablo Andrés-Martínez and Chris Heunen “Weakly measured while loops: peeking at quantum states” In Quantum Science and Technology 7.2, 2022, pp. 025007 DOI: [10.1088/2058-9565/ac47f1](<https://dx.doi.org/10.1088/2058-9565/ac47f1>)

<a id="biba.bibx133"></a>

\[284\] Lov Grover and Terry Rudolph “Creating superpositions that correspond to efficiently integrable probability distributions”, 2002 arXiv:[quant-ph/0208112](<https://arxiv.org/abs/quant-ph/0208112>)

<a id="biba.bibx134"></a>

\[285\] Aram. Harrow, Avinatan Hassidim and Seth Lloyd “Quantum Algorithm for Linear Systems of Equations” In Physical Review Letters 103.15, 2009, pp. 150502 DOI: [10.1103/PhysRevLett.103.150502](<https://dx.doi.org/10.1103/PhysRevLett.103.150502>)

<a id="biba.bibx135"></a>

\[286\] K. Temme, T.. Osborne, K.. Vollbrecht, D. Poulin and F. Verstraete “Quantum Metropolis sampling” In Nature 471.7336, 2011, pp. 87–90 DOI: [10.1038/nature09770](<https://dx.doi.org/10.1038/nature09770>)

<a id="biba.bibx136"></a>

\[287\] Maris Ozols, Martin Roetteler and Jérémie Roland “Quantum rejection sampling” In ACM Transactions on Computation Theory 5.3, 2013, pp. 1–33 DOI: [10.1145/2493252.2493256](<https://dx.doi.org/10.1145/2493252.2493256>)

<a id="biba.bibx137"></a>

\[288\] Yuval. Sanders, Guang Low, Artur Scherer and Dominic. Berry “Black-Box Quantum State Preparation without Arithmetic” In Physical Review Letters 122.2, 2019, pp. 020502 DOI: [10.1103/PhysRevLett.122.020502](<https://dx.doi.org/10.1103/PhysRevLett.122.020502>)

<a id="biba.bibx138"></a>

\[289\] Iain Burge, Michel Barbeau and Joaquin Garcia-Alfaro “Quantum CORDIC – Arcsine on a Budget”, 2024 arXiv:[2411.14434 \[quant-ph\]](<https://arxiv.org/abs/2411.14434>)

<a id="biba.bibx139"></a>

\[290\] Tanuj Khattar et al. “Leveraging verifiable structure in quantum circuits to find more efficient compilations with agentic AI”, 2026 arXiv: [https://arxiv.org/abs/2610.23832](<https://arxiv.org/abs/2610.23832>)

<a id="biba.bibx140"></a>

\[291\] Danial Motlagh and Nathan Wiebe “Generalized Quantum Signal Processing” In PRX Quantum 5, 2024, pp. 020368 DOI: [10.1103/PRXQuantum.5.020368](<https://dx.doi.org/10.1103/PRXQuantum.5.020368>)

<a id="biba.bibx141"></a>

\[292\] Dominic. Berry, Danial Motlagh, Giacomo Pantaleoni and Nathan Wiebe “Doubling the efficiency of Hamiltonian simulation via generalized quantum signal processing” In Physical Review A 110, 2024, pp. 012612 DOI: [10.1103/PhysRevA.110.012612](<https://dx.doi.org/10.1103/PhysRevA.110.012612>)

<a id="biba.bibx142"></a>

\[293\] Elliot. Eklund et al. “End-to-End Simulation of Chemical Dynamics on a Quantum Computer”, 2026 arXiv:[2603.19007 \[quant-ph\]](<https://arxiv.org/abs/2603.19007>)

<a id="biba.bibx143"></a>

\[294\] Şerban Nacu and Yuval Peres “Fast simulation of new coins from old” In The Annals of Applied Probability 15.1A, 2005, pp. 93–115 DOI: [10.1214/105051604000000549](<https://dx.doi.org/10.1214/105051604000000549>)

<a id="biba.bibx144"></a>

\[295\] Earl Campbell “Shorter gate sequences for quantum computing by mixing unitaries” In Physical Review A 95.4, 2017, pp. 042306 DOI: [10.1103/PhysRevA.95.042306](<https://dx.doi.org/10.1103/PhysRevA.95.042306>)

<a id="biba.bibx145"></a>

\[296\] Matthew. Hastings “Turning gate synthesis errors into incoherent errors” In Quantum Information and Computation 17.5&amp;6, 2017, pp. 488–494 arXiv:[1612.01011](<https://arxiv.org/abs/1612.01011>)

<a id="biba.bibx146"></a>

\[297\] Jeongwan Haah “Product Decomposition of Periodic Functions in Quantum Signal Processing” In Quantum 3, 2019, pp. 190 DOI: [10.22331/q-2019-10-07-190](<https://dx.doi.org/10.22331/q-2019-10-07-190>)

<a id="biba.bibx147"></a>

\[298\] Andor Menczer et al. “Parallel Implementation of the Density Matrix Renormalization Group Method Achieving a Quarter petaFLOPS Performance on a Single DGX-H100 GPU Node” In Journal of Chemical Theory and Computation 20.19, 2024, pp. 8397–8404 DOI: [10.1021/acs.jctc.4c00903](<https://dx.doi.org/10.1021/acs.jctc.4c00903>)

<a id="biba.bibx148"></a>

\[299\] Nicholas Rubin “Fast quantum simulation of electronic structure by spectral amplification”, Zenodo, 2025 DOI: [10.5281/zenodo.17066718](<https://dx.doi.org/10.5281/zenodo.17066718>)

<a id="biba.bibx149"></a>

\[300\] Daniel. Abrams and Seth Lloyd “Quantum Algorithm Providing Exponential Speed Increase for Finding Eigenvalues and Eigenvectors” In Physical Review Letters 83.24, 1999, pp. 5162–5165 DOI: [10.1103/PhysRevLett.83.5162](<https://dx.doi.org/10.1103/PhysRevLett.83.5162>)

<a id="biba.bibx150"></a>

\[301\] Seunghoon Lee et al. “Evaluating the evidence for exponential quantum advantage in ground-state quantum chemistry” In Nature Communications 14, 2023, pp. 1952 DOI: [10.1038/s41467-023-37587-6](<https://dx.doi.org/10.1038/s41467-023-37587-6>)

<a id="biba.bibx151"></a>

\[302\] Robbie King, Guang Low, Ryan Babbush, Rolando. Somma and Nicholas. Rubin “Quantum Simulation with Sum-of-Squares Spectral Amplification” In Physical Review Letters 136.11, 2026, pp. 110601 DOI: [10.1103/m3fj-m4rm](<https://dx.doi.org/10.1103/m3fj-m4rm>)

