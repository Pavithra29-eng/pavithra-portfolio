import { useState } from 'react';
import { Eye, Download, FileWarning } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface CertificatePreviewModalProps {
  title: string;
  issuer: string;
  /** Path to the certificate file inside /public, e.g. "/certificates/oneture.pdf" */
  filePath: string;
  /** Trigger button style: 'card' for a full-width button, 'icon' for a compact icon button */
  variant?: 'card' | 'icon';
}

const isImage = (path: string) => /\.(png|jpe?g|webp|gif)$/i.test(path);
const isPdf = (path: string) => /\.pdf$/i.test(path);

const CertificatePreviewModal = ({ title, issuer, filePath, variant = 'card' }: CertificatePreviewModalProps) => {
  const [fileMissing, setFileMissing] = useState(false);

  return (
    <Dialog onOpenChange={(open) => open && setFileMissing(false)}>
      <DialogTrigger asChild>
        {variant === 'card' ? (
          <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
            <Eye size={16} />
            <span>Preview Certificate</span>
          </button>
        ) : (
          <button
            className="flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
            aria-label={`Preview ${title} certificate`}
          >
            <Eye size={16} />
            <span>Preview</span>
          </button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-3xl glass-card border-border/50 bg-card">
        <DialogHeader>
          <DialogTitle className="text-foreground">{title}</DialogTitle>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </DialogHeader>

        <div className="mt-2 rounded-xl overflow-hidden bg-secondary/40 min-h-[300px] flex items-center justify-center">
          {fileMissing ? (
            <div className="flex flex-col items-center gap-3 text-center px-6 py-16 text-muted-foreground">
              <FileWarning size={36} className="text-muted-foreground/60" />
              <p className="text-sm">
                Certificate preview coming soon.
                <br />
                This will show up automatically once the certificate file is added.
              </p>
            </div>
          ) : isImage(filePath) ? (
            <img
              src={filePath}
              alt={title}
              className="w-full h-auto max-h-[70vh] object-contain"
              onError={() => setFileMissing(true)}
            />
          ) : isPdf(filePath) ? (
            <iframe
              src={filePath}
              title={title}
              className="w-full h-[70vh]"
              onError={() => setFileMissing(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-center px-6 py-16 text-muted-foreground">
              <FileWarning size={36} className="text-muted-foreground/60" />
              <p className="text-sm">Certificate preview coming soon.</p>
            </div>
          )}
        </div>

        {!fileMissing && (
          <a
            href={filePath}
            download
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors self-start"
          >
            <Download size={16} />
            <span>Download Certificate</span>
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CertificatePreviewModal;
