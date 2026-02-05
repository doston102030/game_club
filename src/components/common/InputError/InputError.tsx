type  Props = {
    massage: string | undefined
}

function InputError({massage}: Props) {
  return (
    <div className='text-red-600  text-sm'>{massage}</div>
  )
}

export default InputError