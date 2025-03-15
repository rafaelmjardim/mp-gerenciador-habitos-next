import Button from "./components/button/button";

export default function Home() {
  return (
    <div className='w-full h-full m-20 flex flex-col items-center justify-between'>
      <h2 className="text-lg max-w-52 text-center mt-20 font-light">Você não tem hábitos cadastrados</h2>

      <Button>
        Novo hábito
      </Button>
    </div>
  )
}
