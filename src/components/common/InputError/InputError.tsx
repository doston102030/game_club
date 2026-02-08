type Props = {
  massage: string | undefined
}

function InputError({ massage }: Props) {
  return (
    <div className="relative" >
      <p className='text-red-600 absolute  text-sm'>{massage}</p>
    </div>
  )
}

export default InputError