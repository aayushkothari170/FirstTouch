import { useEffect, useRef } from "react";

interface ResetDialogProps {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function ResetDialog({ open, onCancel, onConfirm }: ResetDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.activeElement;
    cancelRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    };
  }, [open, onCancel]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-4" onClick={onCancel}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-title"
        className="w-full max-w-md rounded-3xl border border-line bg-card p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="reset-title" className="text-xl font-extrabold">
          Reset progress?
        </h2>
        <p className="mt-2 text-sm leading-6 text-mist">
          This clears your lessons, XP, and badges. Your account stays.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            ref={cancelRef}
            type="button"
            className="min-h-11 rounded-full border border-line px-4 py-2 font-semibold text-ink"
            onClick={onCancel}
          >
            Keep progress
          </button>
          <button
            type="button"
            className="min-h-11 rounded-full bg-lime px-4 py-2 font-extrabold text-navy"
            onClick={onConfirm}
          >
            Reset progress
          </button>
        </div>
      </div>
    </div>
  );
}
