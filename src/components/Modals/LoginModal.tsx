'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/label'
import { useLoginStore } from '@/lib/store/loginStore'
import { useRef } from 'react'
import type { MouseEventHandler } from 'react'

const LoginModal = () => {
    const activeLogin = useLoginStore((state) => state.isOpen)
    const closeLogin = useLoginStore((state) => state.close)

    // const studioRef = useRef(null)

    // const openStudio: MouseEventHandler<HTMLButtonElement> = (e) => {
    //     e.preventDefault()
    //     console.log('click')

    //     // renderStudio({ target: studioRef })
    // }

    if (activeLogin) {
        return (
            <Dialog open={activeLogin} onOpenChange={closeLogin}>
                <DialogContent className="p-7 rounded-lg  max-w-[425px]">
                    <form
                    // action={async (formData) => {
                    //     await signIn('credentials', formData)
                    // }}
                    >
                        <h3 className="text-xl">Вход</h3>
                        <div className="flex flex-col gap-4  my-4">
                            <div className="">
                                <Label className="font-semibold ">Емайл</Label>
                                <Input
                                    type="email"
                                    className="font-semibold mt-2 border-[#b3c1d1] border-2 focus:border-gray"
                                />
                            </div>
                            <div className="">
                                <Label className="font-semibold ">Пароль</Label>
                                <Input
                                    type="password"
                                    className="text-2xl mt-2 border-[#b3c1d1] border-2 focus:border-gray"
                                />
                            </div>
{/*                             <p className="text-red-500 text-min">
                                Lorem ipsum dolor sit amet consectetur !!
                            </p> */}
                        </div>
                        <Button
                            type="submit"
                            className="mx-auto px-12 py-5 flex justify-center"
                            // ref={studioRef}
                            // onClick={openStudio}
                        >
                            Войти
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        )
    }
}

export default LoginModal
