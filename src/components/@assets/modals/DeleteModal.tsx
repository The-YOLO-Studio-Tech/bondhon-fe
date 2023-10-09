import { Dialog } from '@mui/material';
import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { enqueueSnackbar } from 'notistack';

const DeleteModal = ({
  handleDelete,
  isLoading,
  btn,
}: {
  handleDelete: any;
  isLoading: boolean;
  btn?: any;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleDataDelete = async () => {
    try {
      await handleDelete();
      setOpen(false);
      enqueueSnackbar('Deleted Successfully', { variant: 'success' });
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Failed to delete', { variant: 'error' });
    }
  };
  return (
    <div>
      <div className="w-fit text-red-600 cursor-pointer" onClick={() => setOpen(true)}>
        {btn ? btn : <RiDeleteBin6Line />}
      </div>

      <Dialog open={open} maxWidth="md" onClose={() => setOpen(false)}>
        <div className="p-10">
          <h2 className="text-2xl font-semibold pb-5">Are you sure to delete?</h2>
          <div className="flex gap-3 items-center">
            <button onClick={() => setOpen(false)} className="px-5 py-3 rounded-lg border">
              Cancel
            </button>
            <button
              onClick={handleDataDelete}
              type="submit"
              disabled={isLoading}
              className="bg-red-600 text-white px-4 rounded-xl py-[10px] capitalize  hover:bg-red-400 transition-all disabled:bg-slate-400 disabled:text-white"
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
