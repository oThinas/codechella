import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Link } from '.';

interface IDropdownMenuProps {
  items: { label: string, href: string }[];
}

export function DropdownMenu(props: IDropdownMenuProps) {
  const itemsElement = props.items.map((item, index) => {
    return (
      <Dropdown.Item key={index} className='px-8 py-4 outline-none'>
        <Link href={item.href} bold className='hover:no-underline'>
          {item.label}
        </Link>
      </Dropdown.Item>
    );
  });

  const itemsElementStyled = [];
  for (let i = 0; i < itemsElement.length; i++) {
    itemsElementStyled.push(itemsElement[i]);
    if (i < itemsElement.length - 1) itemsElementStyled.push(<div key={i + itemsElement.length} className='bg-white h-0.5 w-4/5 rounded'/>);
  }

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild className='outline-none'>
        <button>
          <HamburgerMenuIcon width={32} height={32} color='#FFF'/>
        </button>
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content className='flex flex-col items-center bg-blue dark:bg-blue-dark text-white'>
          {itemsElementStyled}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
}
