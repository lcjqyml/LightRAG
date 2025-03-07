import { useAuthStore } from '@/stores/state'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog';
import { LogInIcon } from 'lucide-react';
import Button from '@/components/ui/Button';
import LoginForm from './LoginForm'

const GlobalLoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useAuthStore()

  return (
    <Dialog
      open={showLoginModal}
      onOpenChange={(open) => {
        setShowLoginModal(open)
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default" side="bottom" tooltip="Login" size="sm">
          <LogInIcon /> Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl" onCloseAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Please provide your credentials to continue.</DialogDescription>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}

export default GlobalLoginModal