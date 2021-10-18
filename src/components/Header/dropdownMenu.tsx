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

    function pageKeyPress(evt: KeyboardEvent) {
      if(evt?.key == 'Escape') setIsActive(false)
    }

    let doc = document.querySelector('body')

    if (isActive) {
      doc && doc.addEventListener('click', pageClick)
      doc && doc.addEventListener('keydown', pageKeyPress)
    }

    return () => {
      doc && doc.removeEventListener('click', pageClick)
      doc && doc.removeEventListener('keydown', pageKeyPress)
    }

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
          className={isActive ? 'active' : ''}
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