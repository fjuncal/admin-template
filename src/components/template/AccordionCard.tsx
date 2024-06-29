import { Accordion, AccordionTab } from "primereact/accordion";

interface AccordionCardProps {
  textoAlmoco: string;
  textoJantar: string;
}

export default function AccordionCard(props: AccordionCardProps) {
  return (
    <div>
      <Accordion multiple activeIndex={[0]}>
        <AccordionTab header="Almoço">
          <p className="m-0">{props.textoAlmoco}</p>
        </AccordionTab>
        <AccordionTab header="Jantar">
          <p className="m-0">{props.textoJantar}</p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}
