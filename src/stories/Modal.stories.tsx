import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '../components/Modal'
import { StoryContainer } from '../components/StoryContainer'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Example/Modal',
}

export default meta
type Story = StoryObj<typeof Modal>

const blankFunction = () => alert('Modal closed')
export const DefaultModal: Story = {
  render: (args) => (
    <StoryContainer>
      <Modal {...args} heading='Modal heading' isOpen onClose={blankFunction}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi culpa
        doloremque dolorum ipsam tempora! Blanditiis dignissimos distinctio
        dolorum eaque eius in ipsam magnam repellat rerum tenetur. Consectetur
        error iure nam nisi omnis sapiente sit tempore voluptatibus? Commodi
        dolore exercitationem maxime quam qui sed! Beatae debitis esse provident
        quis sequi, vel? Ad commodi dicta eligendi ipsa, labore nemo obcaecati
        odit quia. Adipisci at consequatur cumque dolores impedit ipsum iure
        placeat ratione, veritatis voluptatem. Accusantium, alias, aliquam enim
        iure, labore laudantium magnam modi mollitia nihil numquam optio porro
        reiciendis rerum sapiente similique tempora veniam voluptates
        voluptatibus. A aliquid aperiam, consectetur eius eligendi eveniet
        fugiat fugit id illo illum ipsam iste iure iusto magnam maiores modi
        nam, necessitatibus nihil nisi nostrum numquam perspiciatis porro
        quaerat quasi quia quis quo ratione rerum tenetur vero! Amet aperiam
        dicta distinctio eveniet facere, ipsum laboriosam maiores molestias nemo
        quas quo vel vero voluptas. Alias atque aut culpa cupiditate deserunt
        dolorem esse et exercitationem expedita explicabo facilis fuga fugit
        illum incidunt iste iure iusto mollitia nobis officia pariatur
        perferendis, porro possimus qui quod sapiente sit sunt unde velit
        voluptatibus voluptatum! Culpa delectus, dolores eos laboriosam nemo
        quisquam repudiandae. At consequatur deleniti deserunt dolor ea fugiat
        ipsum iure natus quam tempore! Accusantium, aperiam commodi consequuntur
        dolor expedita illum incidunt nemo velit? Amet aperiam cum delectus
        dolores eos esse excepturi, explicabo fugiat harum illum impedit in
        ipsum laudantium molestiae natus odit perferendis provident quis rerum
        saepe totam ullam veniam voluptas! Animi aperiam atque aut cumque
        delectus deleniti dolore dolorum enim esse ex facilis fugit illum ipsam
        iste laudantium magnam maxime necessitatibus nisi nobis nostrum
        obcaecati odio omnis pariatur perspiciatis placeat praesentium provident
        quaerat ratione rem reprehenderit, rerum soluta suscipit tempora.
        Aliquid commodi cum molestias quibusdam? A accusamus beatae error fuga
        fugiat quasi quo, tempora. Animi aperiam architecto assumenda at aut
        consequuntur culpa delectus dolor dolore ea esse eveniet expedita fuga
        hic ipsa ipsum iure labore libero mollitia nostrum numquam obcaecati
        officia quaerat quis recusandae reiciendis saepe sapiente sint sunt
        temporibus ut velit, veritatis voluptates? Blanditiis dolore natus qui
        quis veritatis. Fugit magnam ratione suscipit? Ab officia, veniam. Ab
        accusamus amet atque autem consectetur distinctio ea earum eligendi
        enim, expedita facilis ipsa iure maxime minima modi necessitatibus
        officiis perferendis perspiciatis provident quae quaerat, quas quidem
        reprehenderit sequi soluta temporibus totam velit vero voluptatem
        voluptates. A accusamus accusantium aliquid, at autem commodi
        consectetur eaque hic id inventore itaque laborum, magnam maiores maxime
        molestias nam neque officiis omnis perferendis placeat quia quod ratione
        reprehenderit sapiente sit temporibus veniam veritatis. Ab blanditiis
        consequuntur cum eos molestiae, necessitatibus neque rerum voluptatibus.
        Ad dolore doloremque esse in laborum molestias quia quod repellat
        repellendus veritatis! Cumque cupiditate dolores et eveniet reiciendis,
        suscipit voluptatum! Dolore impedit ratione repellendus repudiandae.
        Aspernatur corporis deserunt eveniet ex voluptates. Ad aliquid amet
        architecto aspernatur at atque aut autem commodi culpa cumque deleniti
        dignissimos dolor dolorem ducimus eligendi enim eos expedita facere
        facilis ipsa nisi non odit omnis optio possimus, quidem quis sint
        suscipit totam unde ut velit voluptas voluptatem! Maxime officia optio
        provident quidem sint, temporibus tenetur voluptates? Ad alias beatae
        deserunt doloribus eaque, eligendi explicabo fugit id inventore nam
        natus necessitatibus nemo officiis omnis pariatur perspiciatis provident
        quis quo rem sit soluta tempora temporibus vel vitae voluptatem! Atque
        hic necessitatibus nostrum ratione. Atque aut, blanditiis cum ducimus
        eaque error esse explicabo maxime numquam, officia porro provident sunt.
        A ab ad aspernatur at consequuntur cupiditate deserunt dolorem
        doloremque dolores earum eius eligendi eos et eum explicabo, facilis id
        illum impedit ipsum labore maiores, minima molestias natus numquam
        obcaecati possimus quam quas qui quisquam repellendus sequi similique
        sunt temporibus totam veritatis vitae voluptates! Autem dolorum
        excepturi impedit ipsa laborum libero molestias, repudiandae.
        Consequuntur distinctio, maxime. Cumque ipsam, iusto nemo obcaecati
        officia rem velit voluptatum. Ab aperiam cupiditate delectus eius est
        fugit in ipsum labore laboriosam, libero, minima nemo nesciunt numquam
        officiis praesentium provident repellat, sunt? Aliquam culpa fugiat,
        inventore ipsa labore maxime obcaecati repudiandae. Culpa ex laboriosam
        magnam maiores nihil, nobis placeat quibusdam. Accusantium blanditiis
        corporis doloremque eaque earum esse expedita fugiat ipsa itaque labore,
        minima nam neque nesciunt non odio, quas qui quis tempore ut, velit? Ad
        amet aperiam assumenda dolore dolorum, ducimus earum et inventore, magni
        maiores, molestias neque numquam provident quasi quia repellat rerum sed
        soluta totam vel! Alias at cum fugit minus modi natus quisquam quo
        repellat soluta, ut vero voluptate voluptatibus! Ducimus et laboriosam
        nobis pariatur praesentium quidem sit. Ab accusantium beatae corporis
        debitis deleniti deserunt dolorem eum maiores modi odit praesentium
        quae, quas quis quo repellat sapiente, voluptates. Beatae cumque
        dignissimos ipsa ipsam, nesciunt qui repellat reprehenderit. Ad aliquam
        animi asperiores deleniti dignissimos ducimus ea eligendi exercitationem
        expedita harum laboriosam magni minima nesciunt officia pariatur quae
        quaerat quasi, quidem quo, reprehenderit sed ut veniam voluptatibus!
        Accusamus alias atque, corporis cupiditate delectus deleniti dolorem ex
        ipsa iste iusto magnam necessitatibus pariatur perspiciatis praesentium
        quam, quo repellendus sed. Ab accusamus assumenda aut doloremque,
        laborum praesentium reiciendis saepe suscipit voluptas voluptatem.
        Adipisci aperiam autem commodi, cum debitis dolores eligendi fugit in
        incidunt ipsam itaque laudantium libero maxime mollitia non obcaecati
        odio officiis omnis pariatur quo quod rem reprehenderit saepe, sit
        soluta suscipit tempora veritatis. Cumque dolorem fuga iste nihil nobis
        numquam quae quibusdam sint sunt, velit! Aliquid autem consequuntur
        dolor, enim est facilis fugit officia omnis perspiciatis provident quasi
        quisquam rem, sed sint, temporibus. A accusantium deleniti dolor earum
        fugit id ipsam magni minus nobis velit? A accusamus asperiores assumenda
        blanditiis distinctio dolor dolores ea earum eius eum explicabo illum
        inventore ipsa laborum, minima modi nulla placeat quia ratione
        recusandae saepe tempora tempore ut vel voluptatum! Asperiores commodi
        cum dolore dolorem doloribus dolorum hic in ipsum, labore magni minus
        necessitatibus non pariatur quas quis saepe veniam. Ad architecto autem
        debitis enim esse minima natus nulla odit officia praesentium, quas quis
        repellendus repudiandae saepe sint temporibus voluptatem! Animi
        architecto, asperiores autem commodi, consectetur consequatur cumque
        debitis dicta exercitationem explicabo facilis labore nisi nobis,
        numquam obcaecati odit porro possimus quasi quisquam recusandae
        repudiandae sed similique unde voluptatibus voluptatum! Ad magnam neque
        sed.
      </Modal>
    </StoryContainer>
  ),
}
