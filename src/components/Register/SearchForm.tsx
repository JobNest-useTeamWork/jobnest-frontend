import Button from "./Button";
import Input from "./Input";
import SelectBox from "./SelectBox";

const SearchForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className='w-full h-11 flex items-center gap-4'
      onSubmit={handleSubmit}
    >
      <SelectBox></SelectBox>
      <Input type='text' placeholder='주소를 입력해주세요.' />
      <Button className='w-24 rounded-md'>검색</Button>
    </form>
  );
};
export default SearchForm;
