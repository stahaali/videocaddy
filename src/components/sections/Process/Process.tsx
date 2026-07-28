import Image from "next/image";
import Container from "@/components/shared/Container/Container";
import { processSteps } from "@/data/home";

export default function Process() {
  return (
    <section className="process-section spacing-section" aria-labelledby="process-title">
      <Container>
        <h2 id="process-title">HOW DOES THIS WORK?</h2>
        <div className="row">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-9">
              <div className="row">
                {processSteps.map((step, index) => (
                  <div key={step.variant} className="col-md-3">
                    <div className={`process-div ${step.variant}`}>
                      <div className="process-div-no">
                        <p>{step.step}</p>
                        <Image
                          src={step.number}
                          alt={`process${index + 1}`}
                          title={`process${index + 1}`}
                          width={80}
                          height={100}
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                      <div className="process-div-txt">
                        <Image
                          src={step.icon}
                          alt={`process-icon-${index + 1}`}
                          title={`process-icon-${index + 1}`}
                          width={36}
                          height={36}
                          className="zoom-effect"
                          style={{ width: "auto", height: "auto" }}
                        />
                        <p>{step.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
