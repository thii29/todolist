export default function CheckIcon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      onClick={onClick}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="white"
      className="size-4 invisible peer-checked:visible absolute top-1 left-1"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
