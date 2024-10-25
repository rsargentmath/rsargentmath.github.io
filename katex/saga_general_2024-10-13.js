const macros = {};
katex.renderToString(
	//"% \\RequirePackage[utf8]{inputenc}" + 
	//"\\RequirePackage{graphicx}" + 
	//"\\RequirePackage{amssymb}" + 
	//"\\RequirePackage{amsmath}" + 
	//"\\RequirePackage{setspace}" + 
	"" + 
	//"% improved fraktur font (requires LuaLaTeX and moderne-fraktur.regular.ttf)" + 
	//"\\RequirePackage{fontspec}" + 
	//"\\newfontfamily{\\modfrak}{moderne-fraktur.regular.ttf}" + 
	//"\\newcommand{\\fr}[1]{\\textnormal{\\modfrak#1}}" + 
	"" + 
	//"% blackboard bold sets" + 
	//"\\newcommand{\\N}{\\mathbb{N}}" + 
	//"\\newcommand{\\Z}{\\mathbb{Z}}" + 
	//"\\newcommand{\\Q}{\\mathbb{Q}}" + 
	//"\\newcommand{\\R}{\\mathbb{R}}" + 
	"\\newcommand{\\C}{\\mathbb{C}}" + 
	"\\newcommand{\\F}{\\mathbb{F}}" + 
	"\\newcommand{\\A}{\\mathbb{A}}" + 
	"\\let\\POLD\\P" + 
	"\\renewcommand{\\P}{\\mathbb{P}}" + 
	"" + 
	//"% brackets" + 
	"\\newcommand{\\rou}[1]{( #1 )}" + 
	"\\newcommand{\\bigrou}[1]{\\big( #1 \\big)}" + 
	"\\newcommand{\\Bigrou}[1]{\\Big( #1 \\Big)}" + 
	"\\newcommand{\\Biggrou}[1]{\\Bigg( #1 \\Bigg)}" + 
	"\\newcommand{\\lrrou}[1]{\\left( #1 \\right)}" + 
	"\\newcommand{\\squ}[1]{[ #1 ]}" + 
	"\\newcommand{\\bigsqu}[1]{\\big[ #1 \\big]}" + 
	"\\newcommand{\\Bigsqu}[1]{\\Big[ #1 \\Big]}" + 
	"\\newcommand{\\Biggsqu}[1]{\\Bigg[ #1 \\Bigg]}" + 
	"\\newcommand{\\lrsqu}[1]{\\left[ #1 \\right]}" + 
	"\\newcommand{\\cur}[1]{\\{ #1 \\}}" + 
	"\\newcommand{\\bigcur}[1]{\\big\\{ #1 \\big\\}}" + 
	"\\newcommand{\\Bigcur}[1]{\\Big\\{ #1 \\Big\\}}" + 
	"\\newcommand{\\Biggcur}[1]{\\Bigg\\{ #1 \\Bigg\\}}" + 
	"\\newcommand{\\lrcur}[1]{\\left\\{ #1 \\right\\}}" + 
	"\\newcommand{\\ang}[1]{\\langle #1 \\rangle}" + 
	"\\newcommand{\\bigang}[1]{\\big\\langle #1 \\big\\rangle}" + 
	"\\newcommand{\\Bigang}[1]{\\Big\\langle #1 \\Big\\rangle}" + 
	"\\newcommand{\\Biggang}[1]{\\Bigg\\langle #1 \\Bigg\\rangle}" + 
	"\\newcommand{\\lrang}[1]{\\left\\langle #1 \\right\\rangle}" + 
	"\\newcommand{\\ver}[1]{\\lvert #1 \\rvert}" + 
	"\\newcommand{\\bigver}[1]{\\big\\lvert #1 \\big\\rvert}" + 
	"\\newcommand{\\Bigver}[1]{\\Big\\lvert #1 \\Big\\rvert}" + 
	"\\newcommand{\\Biggver}[1]{\\Bigg\\lvert #1 \\Bigg\\rvert}" + 
	"\\newcommand{\\lrver}[1]{\\left\\lvert #1 \\right\\rvert}" + 
	"\\newcommand{\\Ver}[1]{\\lVert #1 \\rVert}" + 
	"\\newcommand{\\bigVer}[1]{\\big\\lVert #1 \\big\\rVert}" + 
	"\\newcommand{\\BigVer}[1]{\\Big\\lVert #1 \\Big\\rVert}" + 
	"\\newcommand{\\BiggVer}[1]{\\Bigg\\lVert #1 \\Bigg\\rVert}" + 
	"\\newcommand{\\lrVer}[1]{\\left\\lVert #1 \\right\\rVert}" + 
	"" + 
	//"% Greek / Hebrew letters" + 
	"\\newcommand{\\al}{\\alpha}" + 
	"\\newcommand{\\bt}{\\beta}" + 
	"\\newcommand{\\gm}{\\gamma}" + 
	"\\newcommand{\\dl}{\\delta}" + 
	"\\newcommand{\\ep}{\\varepsilon}" + 
	"\\newcommand{\\zt}{\\zeta}" + 
	"\\newcommand{\\et}{\\eta}" + 
	"\\let\\thOLD\\th" + 
	"\\renewcommand{\\th}{\\theta}" + 
	"\\newcommand{\\io}{\\iota}" + 
	"\\newcommand{\\kp}{\\kappa}" + 
	"\\newcommand{\\lm}{\\lambda}" + 
	"\\newcommand{\\oc}{o}" + 
	"\\newcommand{\\rh}{\\rho}" + 
	"\\newcommand{\\sg}{\\sigma}" + 
	"\\newcommand{\\ta}{\\tau}" + 
	"\\newcommand{\\yp}{\\upsilon}" + 
	"\\newcommand{\\ph}{\\varphi}" + 
	"\\renewcommand{\\ch}{\\chi}" + 
	"\\newcommand{\\ps}{\\psi}" + 
	"\\newcommand{\\om}{\\omega}" + 
	"\\newcommand{\\Al}{\\mathrm{A}}" + 
	"\\newcommand{\\Bt}{\\mathrm{B}}" + 
	"\\newcommand{\\Gm}{\\Gamma}" + 
	"\\newcommand{\\Dl}{\\Delta}" + 
	"\\newcommand{\\Ep}{\\mathrm{E}}" + 
	"\\newcommand{\\Zt}{\\mathrm{Z}}" + 
	"\\newcommand{\\Et}{\\mathrm{H}}" + 
	"\\newcommand{\\Th}{\\Theta}" + 
	"\\newcommand{\\Io}{\\mathrm{I}}" + 
	"\\newcommand{\\Kp}{\\mathrm{K}}" + 
	"\\newcommand{\\Lm}{\\Lambda}" + 
	"\\renewcommand{\\Mu}{\\mathrm{M}}" + 
	"\\renewcommand{\\Nu}{\\mathrm{N}}" + 
	"\\newcommand{\\Oc}{\\mathrm{O}}" + 
	"\\newcommand{\\Rh}{\\mathrm{P}}" + 
	"\\newcommand{\\Sg}{\\Sigma}" + 
	"\\newcommand{\\Ta}{\\mathrm{T}}" + 
	"\\newcommand{\\Yp}{\\Upsilon}" + 
	"\\newcommand{\\Ph}{\\Phi}" + 
	"\\newcommand{\\Ch}{\\mathrm{X}}" + 
	"\\newcommand{\\Ps}{\\Psi}" + 
	"\\newcommand{\\Om}{\\Omega}" + 
	"\\newcommand{\\ale}{\\aleph}" + 
	"\\newcommand{\\bet}{\\beth}" + 
	"\\newcommand{\\gim}{\\gimel}" + 
	"\\newcommand{\\dal}{\\daleth}" + 
	"" + 
	//"% typographic" + 
	"\\newcommand{\\ws}{\\newline\\newline\\noindent}" + 
	"\\newcommand{\\tp}{\\text{.}}" + 
	"\\newcommand{\\tc}{\\text{,}}" + 
	"\\newcommand{\\scr}[1]{\\mathcal{#1}}" + 
	"\\newcommand{\\creflastconjunction}{, and\\nobreakspace}" + 
	"" + 
	//"% sets" + 
	"\\newcommand{\\empset}{\\varnothing}" + 
	"\\newcommand{\\sst}{\\subseteq}" + 
	"\\newcommand{\\sstneq}{\\subsetneq}" + 
	"\\newcommand{\\spst}{\\supseteq}" + 
	"\\newcommand{\\spstneq}{\\supsetneq}" + 
	"\\newcommand{\\unarycup}[1]{{\\cup #1}}" + 
	"\\newcommand{\\unarycap}[1]{{\\cap #1}}" + 
	"\\newcommand{\\symdif}{\\mathbin{\\vartriangle}}" + 
	"\\newcommand{\\sm}{\\setminus}" + 
	"" + 
	//"% calculus" + 
	"\\newcommand{\\df}{\\,\\mathrm{d}}" + 
	"\\newcommand{\\dfdf}[2]{\\frac{\\mathrm{d} #1}{\\mathrm{d} #2}}" + 
	"\\newcommand{\\ddfdf}[2]{\\dfrac{\\mathrm{d} #1}{\\mathrm{d} #2}}" + 
	"\\newcommand{\\tdfdf}[2]{\\tfrac{\\mathrm{d} #1}{\\mathrm{d} #2}}" + 
	"\\newcommand{\\pdpd}[2]{\\frac{\\partial #1}{\\partial #2}}" + 
	"\\newcommand{\\dpdpd}[2]{\\dfrac{\\partial #1}{\\partial #2}}" + 
	"\\newcommand{\\tpdpd}[2]{\\tfrac{\\partial #1}{\\partial #2}}" + 
	"\\newcommand{\\ee}{\\mathrm{e}}" + 
	"\\newcommand{\\ii}{\\mathrm{i}}" + 
	"\\newcommand{\\jj}{\\mathrm{j}}" + 
	"\\newcommand{\\kk}{\\mathrm{k}}" + 
	"" + 
	//"% misc" + 
	"\\newcommand{\\nsub}{\\mathrel{\\unlhd}}" + 
	"\\newcommand{\\Gal}{\\operatorname{Gal}}" + 
	"\\newcommand{\\Aut}{\\operatorname{Aut}}" + 
	"\\newcommand{\\tr}{\\operatorname{tr}}" + 
	"\\newcommand{\\trace}{\\operatorname{trace}}" + 
	"\\newcommand{\\tl}[1]{\\widetilde{#1}}" + 
	"\\newcommand{\\ovl}[1]{\\overline{#1}}" + 
	"\\newcommand{\\unl}[1]{\\underline{#1}}" + 
	"\\newcommand{\\spn}{\\operatorname{span}}" + 
	"\\newcommand{\\st}{\\operatorname{st}}" + 
	"\\newcommand{\\hyp}[1]{{^*#1}}" + 
	"\\newcommand{\\hR}{\\hyp{\\R}}" + 
	"\\newcommand{\\floor}[1]{\\lfloor #1 \\rfloor}" + 
	"\\newcommand{\\ceil}[1]{\\lceil #1 \\rceil}" + 
	"\\newcommand{\\prm}{^\\prime}" + 
	"\\newcommand{\\restrict}[1]{{\\upharpoonright}_{#1}}" + 
	"\\newcommand{\\embto}{\\hookrightarrow}" + 
	"\\newcommand{\\surto}{\\twoheadrightarrow}" + 
	"\\newcommand{\\precneq}{\\mathrel{\\text{\\fontspec{Symbola}\\symbol{\"2AB1}}}}" + 
	"\\newcommand{\\succneq}{\\mathrel{\\text{\\fontspec{Symbola}\\symbol{\"2AB2}}}}" + 
	"" + 
	//"% Lie groups / algebras" + 
	"\\newcommand{\\GL}{\\mathsf{GL}}" + 
	"\\newcommand{\\SL}{\\mathsf{SL}}" + 
	"\\newcommand{\\U}{\\mathsf{U}}" + 
	"\\newcommand{\\SU}{\\mathsf{SU}}" + 
	"\\let\\OOLD\\O" + 
	"\\renewcommand{\\O}{\\mathsf{O}}" + 
	"\\newcommand{\\SO}{\\mathsf{SO}}" + 
	"\\newcommand{\\Sp}{\\mathsf{Sp}}" + 
	"\\newcommand{\\gl}{\\mathsf{gl}}" + 
	"\\newcommand{\\sl}{\\mathsf{sl}}" + 
	"\\let\\uOLD\\u" + 
	"\\renewcommand{\\u}{\\mathsf{u}}" + 
	"\\newcommand{\\su}{\\mathsf{su}}" + 
	"\\newcommand{\\so}{\\mathsf{so}}" + 
	"\\newcommand{\\sp}{\\mathsf{sp}}" + 
	"\\newcommand{\\Lie}{\\operatorname{Lie}}" + 
	"\\newcommand{\\Ad}{\\operatorname{Ad}}" + 
	"\\newcommand{\\ad}{\\operatorname{ad}}",
	{macros, globalGroup: true}
);
document.addEventListener("DOMContentLoaded", function() {
	renderMathInElement(document.body, {
	  // customised options
	  // • auto-render specific keys, e.g.:
	  delimiters: [
		  {left: '$$', right: '$$', display: true},
		  {left: '$', right: '$', display: false},
		  {left: '\\(', right: '\\)', display: false},
		  {left: '\\[', right: '\\]', display: true}
	  ],
	  // • rendering keys, e.g.:
	  throwOnError : false,
	  macros
	});
});