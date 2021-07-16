import { useRef, useState, useEffect } from "react";
import {
  DropdownButton,
  DropdownMenuContainer,
  Dropdown,
  Select,
  Option
} from 'Components/Header/styles';


export function DropdownMenu() {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    function pageClick(evt: MouseEvent) {
      if (
        (dropdownRef.current && !dropdownRef.current!.contains(evt.target as Node)) &&
        (buttonRef.current && !buttonRef.current!.contains(evt.target as Node))
      ) {
        setIsActive(false)
      }
    }

    if (isActive)
      document.querySelector('body')!.addEventListener('click', pageClick)

    return () => { document.querySelector('body')!.addEventListener('click', pageClick) }

  }, [isActive])

  return (
    <>
      <DropdownMenuContainer>
        <DropdownButton
          ref={buttonRef}
          onClick={() => setIsActive(!isActive)}
        >
          English
        </DropdownButton>

        <Dropdown
          ref={dropdownRef}
          className={isActive ? 'active' : 'inactive'}
        >
          <form >
            <Select>
              <Option>Português</Option>
              <Option>Espanhol</Option>
              <Option>Alemão</Option>
            </Select>
          </form>
        </Dropdown>
      </DropdownMenuContainer>

    </>
  )
}