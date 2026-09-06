import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api/notes';

import NotePreview from './NotePreview';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NotePreviewPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
