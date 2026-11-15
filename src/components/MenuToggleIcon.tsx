/**
 * Ícone do botão do menu mobile: "Menu" (3 traços) que vira "X" ao abrir (motion 3, menu mobile).
 * Mesma geometria do lucide Menu usado antes (viewBox 24, traços de x 4 a 20 em y 5/12/19, 20 px);
 * aberto, coincide com o lucide X (de 6,6 a 18,18). O estado vem de data-menu-open no <header>.
 */
export function MenuToggleIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative block size-5 menu-icon"
    >
      <path className="menu-icon-line menu-icon-top" d="M4 5h16" />
      <path className="menu-icon-line menu-icon-middle" d="M4 12h16" />
      <path className="menu-icon-line menu-icon-bottom" d="M4 19h16" />
    </svg>
  )
}
