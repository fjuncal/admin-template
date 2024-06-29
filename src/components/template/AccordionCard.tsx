import { Accordion, AccordionTab } from "primereact/accordion";

interface AccordionCardProps {
  textoAlmoco: string;
  textoJantar: string;
}

export default function AccordionCard(props: AccordionCardProps) {
  return (
    <div>
      <Accordion multiple activeIndex={[0]}>
        <AccordionTab header="Almoço" className="dark:text-gray-800">
          <p className="dark:text-gray-800">{props.textoAlmoco}</p>
        </AccordionTab>
        <AccordionTab header="Jantar" className="dark:text-gray-800">
          <p className="dark:text-gray-800">{props.textoJantar}</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
