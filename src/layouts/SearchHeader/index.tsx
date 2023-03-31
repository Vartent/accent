import Filter from "@/ui/Filter"
import SearchBar from "@/ui/Search"
import Sorter from "@/ui/Sorter"
import { Col, Row, Space } from "antd"
import { Props } from "./index.type"
import styles from '@/styles/Home.module.css'


const searchHeaderLayout = ({ children }: Props) => {
    return(
      <main className={styles.main}>

    <Space size={15} direction={"vertical"}>
          <Row justify={'center'} gutter={12}>
            <Col xs={20} sm={14} md={12} span={10}>
                <SearchBar/>
            </Col>
          </Row>
          <Row justify={'center'} gutter={12}>
            <Col xs={10} sm={7} md={6} span={5}>
              <Filter />
            </Col>
            <Col xs={10} sm={7} md={6} span={5}>
              <Sorter/>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col span={18}>
              {children}
            </Col>
          </Row>
        </Space>
        </main>

    )
}

export default searchHeaderLayout