const ErrorModal = ({ onModalConfirmBtnClick }) => {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-6 sm:w-full sm:max-w-lg">
            <div class="flex justify-center mb-6">
              <p class="text-2xl font-semibold  text-gray-500">
                City not found, pls check.
              </p>
            </div>
            <div class="sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                onClick={onModalConfirmBtnClick}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
