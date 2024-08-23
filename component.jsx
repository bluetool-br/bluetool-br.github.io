/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gXhrfNdXEYk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <BellIcon className="h-6 w-6 text-primary" />
            <span>Bene</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Serviços
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Sobre
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Entrar
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Bem-vindo à Bene, sua plataforma de manutenção de carros confiável
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A Bene oferece uma ampla gama de serviços de manutenção de carros para manter seu veículo funcionando em
                seu melhor. Desde afinações de motor até inspeções de freios, nós temos você coberto.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Começar
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Nossos Serviços de Manutenção de Carros
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A Bene oferece uma ampla gama de serviços de manutenção de carros para manter seu veículo funcionando em
                seu melhor. Escolha em nossa lista abrangente de serviços para encontrar a solução certa para suas
                necessidades.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <FuelIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Motor</span>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <PauseIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Suspensão</span>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <BracketsIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Freios</span>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <LockIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Embreagem</span>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <FuelIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Lubrificantes</span>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                <div className="grid gap-1">
                  <CheckIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Revisão Geral</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Por que escolher a Bene?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A Bene é seu ponto de parada único para todas as suas necessidades de manutenção de carros. Com nossa
                equipe de técnicos experientes e instalações de última geração, garantimos que seu veículo esteja nas
                melhores mãos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <div className="grid gap-1">
                  <WrenchIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Técnicos Especialistas</span>
                </div>
              </div>
              <div className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <div className="grid gap-1">
                  <GaugeIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Atendimento Rápido</span>
                </div>
              </div>
              <div className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <div className="grid gap-1">
                  <WalletIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Preços Acessíveis</span>
                </div>
              </div>
              <div className="group flex h-20 items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                <div className="grid gap-1">
                  <ShieldIcon className="mx-auto h-6 w-6" />
                  <span className="text-sm font-medium">Qualidade Garantida</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Empresa</h3>
            <Link href="#" prefetch={false}>
              Sobre Nós
            </Link>
            <Link href="#" prefetch={false}>
              Nossa Equipe
            </Link>
            <Link href="#" prefetch={false}>
              Carreiras
            </Link>
            <Link href="#" prefetch={false}>
              Notícias
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Serviços</h3>
            <Link href="#" prefetch={false}>
              Motor
            </Link>
            <Link href="#" prefetch={false}>
              Suspensão
            </Link>
            <Link href="#" prefetch={false}>
              Freios
            </Link>
            <Link href="#" prefetch={false}>
              Embreagem
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Recursos</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Suporte
            </Link>
            <Link href="#" prefetch={false}>
              Guias
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Política de Privacidade
            </Link>
            <Link href="#" prefetch={false}>
              Termos de Serviço
            </Link>
            <Link href="#" prefetch={false}>
              Política de Cookies
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contato</h3>
            <Link href="#" prefetch={false}>
              Email
            </Link>
            <Link href="#" prefetch={false}>
              Telefone
            </Link>
            <Link href="#" prefetch={false}>
              Endereço
            </Link>
            <Link href="#" prefetch={false}>
              Redes Sociais
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BracketsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3h3v18h-3" />
      <path d="M8 21H5V3h3" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function FuelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
