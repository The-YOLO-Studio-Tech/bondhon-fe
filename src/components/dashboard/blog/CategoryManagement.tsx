'use client';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';

export const CategoryManagementModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className="cursor-pointer" onClick={() => setOpen(!open)}>
        অ্যাড ক্যাটাগরি
      </p>
      <Dialog open={open} onClose={() => setOpen(!open)} fullWidth maxWidth="sm">
        <DialogTitle>অ্যাড ক্যাটাগরি</DialogTitle>
        <DialogContent>form</DialogContent>
        <DialogActions>
          <LoadingButton
            endIcon={<SendIcon />}
            // loading={isSubmitting}
            loadingPosition="end"
            type="submit"
            className="bg-[#4852AE] text-white px-7 py-[10px] capitalize mt-[50px]  ml-[22px] hover:bg-[#666cb3] disabled:text-white"
          >
            Publish Now
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
