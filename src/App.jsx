import { Logo15D15P } from "./container/Logo15D15P"
import { LogoThomCode } from "./container/LogoThomCode"
import { EyeOfCthulhu } from "./container/OlhodoCthulhu"

export const App = () => {


  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-b to-[#121212] from-[#3e3041]">
      <div className="w-full h-full">
        <div className="container mx-auto md:mt-10 flex flex-col items-center justify-center">
          <Logo15D15P />
          <EyeOfCthulhu/>
          <LogoThomCode />
        </div>
      </div>
    </div>
  )
}


