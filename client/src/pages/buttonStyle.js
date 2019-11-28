/*
 * @Author: Lambda
 * @Begin: 2019-11-28 19:38:03
 * @Update: 2019-11-28 20:02:12
 * @Update log: 更新日志
 */
import styled from 'styled-components'
import { theme } from '../global'

export const Button = styled.div`
  width: 70vw;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  font-size: 0.4rem;
  color: #fff;
  background-color: ${theme};
  margin-top: 0.6rem;
  &.blue {
    background-color: #12c5c5;
  }
`
