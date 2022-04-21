import { images } from "../constants";
import { HeadText, SubHeadText, ParagraphText, BodyText, LessonImage, } from "../components/Content";
import Lesson from "../model/contentModule";

const ELECT_DEVICES_CIR_DATA = [
  new Lesson(
    "LES-01-1",
    "Electronics ",
    (
      <BodyText>
        <HeadText>Electronics</HeadText>
        <ParagraphText>
          This is the branch of engineering which deals with current conduction
          through a vacuum or gas or semiconductor. Electronics essentially
          deals with electronic devices and their utilization. An electronic
          device is that in which current flows through a vacuum or gas or
          semiconductor. Such devices have valuable properties which enable them
          to function and behave as the friend of man today.
        </ParagraphText>

        <SubHeadText>Importance of Electronics</SubHeadText>
        <ParagraphText>
          Electronics has gained much importance due to its numerous
          applications in industry. The electronic devices are capable of
          performing the following functions:{"\n"}
          1. Rectification {"\n"}
          2. Amplification {"\n"}
          3. Control {"\n"}
          4. Generation {"\n"}
          5. Conversion of light into electricity {"\n"}
          6. Conversion of electricity into light
        </ParagraphText>

        <SubHeadText>Semiconductor</SubHeadText>
        <ParagraphText>
          A semiconductor is a substance which has very few free electrons at
          room temperature. Consequently, under the influence of potential
          difference, a semiconductor practically conducts no current.
          Semiconductors (e.g.germanium, silicon etc.) are those substances
          whose electrical conductivity lies in between conductors and
          insulators. In terms of energy band, the valence band is almost filled
          and conduction band is almost empty. Further, the energy gap between
          valence and conduction bands is very small.
        </ParagraphText>

        <SubHeadText>Properties of Semiconductors</SubHeadText>
        <ParagraphText>
          1. The resistivity of a semiconductor is less than an insulator but
          more than a conductor.{"\n"}
          2. Semiconductors have negative temperature co-efficient of
          resistance. {"\n"}
          3. When a suitable metallic impurity (e.g. arsenic, gallium etc.) is
          added to a semiconductor, its current conducting properties change
          appreciably.
        </ParagraphText>
      </BodyText>
    )
  ),

  new Lesson(
    "LES-01-2",
    "Power Supply ",
    (
      <BodyText>
        <HeadText> Types of Rectification</HeadText>
        <ParagraphText>
          There are basically two types of rectifiers{"\n"}
          1. Half-wave rectifier {"\n"}
          2. Full-wave rectifier
        </ParagraphText>

        <SubHeadText>Half-Wave Rectifier</SubHeadText>

        <ParagraphText>
          In half-wave rectification, the rectifier conducts current only during
          the positive half-cycles of input a.c. supply.
        </ParagraphText>

        <LessonImage imgUrl={images.halfWaveRect} />
        <SubHeadText>Disadvantages</SubHeadText>
        <ParagraphText>
          The main disadvantages of a half-wave rectifier are : {"\n"}
          1. The pulsating current in the load contains alternating component
          whose basic frequency is equal to the supply frequency {"\n"}
          2. The a.c.supply delivers power only half the time.
        </ParagraphText>

        <SubHeadText>Full-Wave Rectifier</SubHeadText>
        <ParagraphText>
          In full-wave rectification, current flows through the load in the same
          direction for both half-cycles of input a.c. voltage. This can be
          achieved with two diodes working alternately. The following two
          circuits are commonly used for full-wave rectification.{"\n"}
          1. Center-tap full-wave rectifier {"\n"}
          2. Full-wave bridge rectifier
        </ParagraphText>

        <SubHeadText>Center-Tap Full-Wave Rectifier</SubHeadText>
        <ParagraphText>
          The circuit employs two diodes Dl and D2. A centre tapped secondary
          winding is used with two diodes connected so that each uses one
          half-cycle of input a.c. voltage
        </ParagraphText>

        <LessonImage imgUrl={images.centerTapRect} />

        <SubHeadText>Full-Wave Bridge Rectifier</SubHeadText>
        <ParagraphText>
          The need for a centre tapped power transformer is eliminated in the
          bridge rectifier. It contains four diodes D1 D2, D3 and D4 connected
          to form bridge. The a.c. supply to be rectified is applied to the
          diagonally opposite ends of the bridge through the transformer.
        </ParagraphText>

        <LessonImage imgUrl={images.bridgeRect} />
        <SubHeadText>Advantages</SubHeadText>
        <ParagraphText>
          Some Advantages of full-wave bridge rectifier includes: {"\n"}
          1. The need for centre-tapped transformer is eliminated. {"\n"}
          2. The output is twice that of the centre-tap circuit for the same
          secondary voltage.{"\n"}
          3. The output is twice that of the centre-tap circuit for the same
          secondary voltage. The PIV is one-half that of the centre-tap circuit
          (for same d.c. output).
        </ParagraphText>
        <SubHeadText>Disadvantages</SubHeadText>
        <ParagraphText>
          1. It requires four diodes {"\n"}
          As during each half-cycle of a.c. input two diodes that conduct are in
          series, therefore, voltage drop in the internal resistance of the
          rectifying unit will be twice as great as in the centre tap circuit.
          This is objectionable when secondary voltage is small.
        </ParagraphText>
      </BodyText>
    )
  ),
];

const RADIO_COMM_DATA = [
  new Lesson(
    "LES-02-1",
    "Radio Transmission ",
    (
      <BodyText>
        <HeadText>Definition of Radio Transmission</HeadText>
        <ParagraphText>
          Radio communication means the radiation of radio waves by the
          transmitting station, the propagation of these waves through space and
          their reception by the radio receiver. Electromagnetic waves are
          radiated by electric charges when they are accelerated. At the radio
          receiver, the audio signal is extracted from the modulated wave by the
          process called demodulation. The signal is then amplified and
          reproduced into sound by the loudspeaker. Transmitters are necessary
          component parts of all electronic devices that communicate by radio,
          such as radio and television broadcasting stations, cell phones,
          walkie-talkies, wireless computer network, Bluetooth enabled devices,
          garage door openers, two-way radios in aircraft, ships, spacecraft,
          radar sets and navigational beacons.
        </ParagraphText>
      </BodyText>
    )
  ),
  new Lesson(
    "LES-02-2",
    " Definitions of Radio Communication Terms",
    (
      <BodyText>
        <ParagraphText>
          The following terms are defined and explained as relates to radio
          communication:
        </ParagraphText>
        <SubHeadText>Amplitude:</SubHeadText>
        <ParagraphText>
          A measure of the value of a radio wave, measured in volts.
        </ParagraphText>
        <SubHeadText>Analog:</SubHeadText>
        <ParagraphText>
          Mode of transmission of Analog signal include Amplitude modulation
          (AM) and Frequency modulation (FM)
        </ParagraphText>
        <SubHeadText>Carrier:</SubHeadText>
        <ParagraphText>
          Carrier: Carrier is a radio wave that is used to transmit information.
          Information to be sent is impressed onto the carrier, which then
          carries the signal to its destination. At the receiver the carrier is
          filtered out, allowing the original message to be recovered.
        </ParagraphText>
        <SubHeadText>Digital:</SubHeadText>
        <ParagraphText>
          Digital transmission formats can be used to transmit images and voice
          as well as data. For continuously varying signals such as voice or
          images, an analog/digital converter changes the analog signal into
          discrete numbers (represented in binary form by O’s and 1‘s). These
          binary digits, or bits, can then be sent as a series of “on’’ /’’off’
          pulses or can be modulated onto a carrier wave by varying the phase,
          frequency, or amplitude according to whether the signal is a”1” or a
          “O.” Data is sent in a similar fashion although it does not have to be
          converted into digital form first.
        </ParagraphText>
        <SubHeadText>Frequency:</SubHeadText>
        <ParagraphText>
          The number of cycles a radio wave completes in one second. Frequency
          is measured in hertz (1 cycle per second equal one hertz). Radio
          frequencies are described as multiples of hertz: kHz, kilohertz:
          thousand cycles per second; MHz, megahertz: million cycles per second;
          GHz, gigahertz: billion cycles per second.
        </ParagraphText>
        <SubHeadText>Modulation:</SubHeadText>
        <ParagraphText>
          The process of encoding information onto a radio wave by varying one
          of its basic characteristics-amplitude, frequency, or phase —in
          relation to an input signal such as speech, data, music, or
          television. The input signal, which contains the information to be
          transmitted, is called the modulating or base band signal. The radio
          wave that carries the information is called the carrier wave. The
          radio wave that results from the combination of these two waves is
          called a modulated carrier. Types of modulation include Amplitude
          modulation (AM) and Frequency modulation (FM).
        </ParagraphText>
        <SubHeadText>Period:</SubHeadText>
        <ParagraphText>
          The length of time it takes a radio wave to complete one full cycle.
          The inverse of the period is a radio wave’s frequency.
        </ParagraphText>
        <SubHeadText>Phase:</SubHeadText>
        <ParagraphText>
          Phase is a measure of the shift in position of a radio wave in
          relation to time. Phase is often measured in degrees.
        </ParagraphText>
        <SubHeadText>Spread Spectrum:</SubHeadText>
        <ParagraphText>
          Spread spectrum refers to various coding schemes used to modulate data
          information onto radio waves for transmission.
        </ParagraphText>
        <SubHeadText>Transmitter:</SubHeadText>
        <ParagraphText>
          Its purpose is to produce radio waves for transmission into space. The
          important components of a transmitter are microphone, audio
          amplifiers, oscillator and modulator.
        </ParagraphText>
        <SubHeadText>Uses of the Radio Spectrum</SubHeadText>
        <ParagraphText>
          Broadcast Service, Fixed Service, Mobile Service, Aeronautical Mobile
          Service, Land Mobile Service, Maritime Mobile Service, Cellular
          Telephone and Personal radio communications, Satellite Service,
          Standard Frequency and Time Signal Service, Radio Navigation Service,
          Radio Location Service, Radio Astronomy Service, Amateur Service and
          Industrial, Scientific, and Medical (ISM).
        </ParagraphText>
      </BodyText>
    )
  ),
];

const RADIO_AUDIO_FREQ_DATA = [
  new Lesson(
    "LES-03-1",
    "Practical Amplifier",
    (
      <BodyText>
        <HeadText>Practical Amplifier</HeadText>
        <ParagraphText>
          A practical amplifier always consists of a number of stages that
          amplify a weak signal until sufficient power is available to operate a
          loudspeaker or other output device. The first few stages in this
          multistage amplifier have the function of only voltage amplification.
          However, the last stage is designed to provide maximum power. This
          final stage is known as power stage.{"\n"}
          The term audio means the range of frequencies which our ears can hear.
          The range of human hearing extends from 20 Hz to 20 kHz. Therefore,
          audio amplifiers amplify electrical signals that have a frequency
          range corresponding to the range of human hearing i.e.20 Hz to 20 kHz
        </ParagraphText>
        <LessonImage imgUrl={images.radAndAudFreqAmp} />
        <SubHeadText>Types of Amplifiers</SubHeadText>
        <ParagraphText>
          1. Small-Signal Amplifiers{"\n"}
          Those amplifiers which handle small input a.c. signals (a few juV or a
          few mV) are called small-signal amplifiers. Voltage amplifiers
          generally fall in this class. The small-signal amplifiers are designed
          to operate over the linear portion of the output characteristics.
          {"\n"}
          Therefore, the transistor parameters such as current gain, input
          impedance, output impedance etc. do not change as the amplitude of the
          signal changes. Such amplifiers amplify the signal with little or no
          distortion.{"\n"}
          2. Large-Signal Amplifiers {"\n"}
          Those amplifiers which handle large input a.c. signals (a few volts)
          are called large-signal amplifiers. Power amplifiers fall in this
          class. The large-signal amplifiers are designed to provide a large
          amount of a.c. power output so that they can operate the output device
          e.g. a speaker.
        </ParagraphText>
        <SubHeadText>Stage of A Practical Amplifier</SubHeadText>
        <ParagraphText>
          The function of a practical power amplifier is to amplify a weak
          signal until sufficient power is available to operate a loudspeaker or
          other output device. To achieve this goal, a power amplifier has
          generally three stages viz. voltage amplification stage, driver stage
          and output stage.
        </ParagraphText>
        <LessonImage imgUrl={images.AmpStages} />
        <ParagraphText>
          1. Voltage amplification{"\n"}
          The signals found in practice have extremely low voltage level (&lt;
          10mV). Therefore, the voltage level of the weak signal is raised by
          two or more voltage amplifiers. Generally, RC coupling is employed for
          this purpose.{"\n"}
          2. Driver State{"\n"}
          The output from the last voltage amplification stage is fed to the
          driver stage. It supplies the necessary power to the output stage. The
          driver stage generally employs class A transformer coupled power
          amplifier. Here, concentrated effort is made to obtain maximum power
          gain. {"\n"}
          3. Output State{"\n"}
          The output power from the driver stage is fed to the output stage. It
          is the final stage and feeds power directly to the speaker or other
          output device. The output stage is invariably transformer coupled and
          employs class B amplifiers in push-pull arrangement. Here,
          concentrated effort is made to obtain maximum power output.{"\n"}
        </ParagraphText>
      </BodyText>
    )
  ),
  new Lesson(
    "LES-03-2",
    "Classification of Power Amplifiers",
    (
      <BodyText>
        <HeadText>Classification of Power Amplifiers</HeadText>
        <ParagraphText>
          Transistor power amplifiers handle large signals. Many of them are
          driven so hard by the input large signal that collector current is
          either cut-off or is in the saturation region during a large portion
          of the input cycle. Therefore, such amplifiers are generally
          classified according to their mode of operation i.e. the portion of
          the input cycle during which the collector current is expected to
          flow. On this basis,they are classified as : {"\n"}
          (i). class A power amplifier {"\n"}
          (ii). class B power amplifier {"\n"}
          (iii). class C power amplifier {"\n"}
          (iv). class AB power amplifier
        </ParagraphText>
      </BodyText>
    )
  ),
];

const SAT_TRANS_RECEPT_DATA = [
  new Lesson(
    "LES-04-1",
    "Satellite Transmission",
    (
      <BodyText>
        <HeadText>Satellite Transmission</HeadText>
        <ParagraphText>
          A satellite is basically a self-contained communications system with
          the ability to receive signals from Earth and to retransmit those
          signals back with the use of a transponder—an integrated receiver and
          transmitter of radio signals. Satellite transmission consists of a
          line-of-sight propagation path from a ground station to a
          communications satellite (up link) and back to an earth station (down
          link). The satellite is usually placed in a geosynchronous orbit about
          22,300 miles above the earth so that it appears stationary from any
          point from which it is visible and acts like a repeater in the sky.
          The ground station includes the antennas, buildings, and electronics
          necessary to transmit, receive, multiplex, and demultiplex signals.
          {"\n"}
          The capability of a satellite to act as a repeater for many different
          earth stations is called multiple access (MA). Three main methods are
          currently in use to accomplish this: frequency-division multiple
          access (FDMA), time-division multiple access (TDMA), and code-division
          multiple access (CDMA).
        </ParagraphText>
        <SubHeadText>Components of a Satellite</SubHeadText>
        <ParagraphText>
          The main components of a satellite consist of the communications
          system, which includes {"\n"}
          i. the antennas and transponders that receive and retransmit signals{" "}
          {"\n"}
          ii. the power system, which includes the solar panels that provide
          power {"\n"}
          iii. the propulsion system, which includes the rockets that propel the
          satellite.
        </ParagraphText>
        <SubHeadText>
          Types of communication services that satellites provide:
        </SubHeadText>
        <ParagraphText>
          i. Telecommunications, {"\n"}
          ii. Broadcasting, and {"\n"}
          iii. Data communication
        </ParagraphText>
        <SubHeadText>Types of Satellites</SubHeadText>
        <ParagraphText>
          There are basically three types of satellites according to the
          function it performs. They include {"\n"}
          i. Fixed Service Satellites {"\n"}
          ii.Consumer Satellites and {"\n"}
          iii. Medium Powered Satellite
        </ParagraphText>
      </BodyText>
    )
  ),

  new Lesson(
    "LES 04-02",
    "Satellite Reception",
    (
      <BodyText>
        <HeadText>Satellite Reception</HeadText>
        <ParagraphText>
          Satellite Earth Station antennas, often referred to as satellite
          “dishes,” are used for receiving satellite signals from television
          programming network at cable head ends and other facilities. The
          signals are transmitted from space to earth at different frequencies
          and polarizations between satellite and ground antennas. Television
          signals are usually sent in the Ku (10-18 GHz) or C-band (3-6 GHz) or
          a combination, depending on local and regional environments. The
          separation is performed by an antenna feed, which feeds the signals to
          a Low Noise Block Converter (LNB). The LNB frequency converts the weak
          signals received from satellites and amplifies them for delivery via
          cables to indoor reception and decoding equipment typically racked
          with other electronic networking units. The high-frequency input
          signals received (or downlinked) from the satellite in space are
          typically down converted by the LNB to the L-band (950-2150 MHz) or
          extended L-band (850-2450 MHz) frequency range and transmitted via
          cable, such as coaxial copper cables. Specially shaped antennas
          provide the ability to mount more than one LNB to receive several
          different satellite positions simultaneously. Lightning protection
          devices directly installed on the antenna, or in the downstream signal
          path, can be used in order to protect equipment in the downlink chain
          from over-voltage damage.
        </ParagraphText>
      </BodyText>
    )
  ),
];

const TELEVISION_DATA = [
  new Lesson(
    "LES 05-01",
    "Meaning of Television and Display Technologies",
    (
      <BodyText>
        <HeadText>Meaning of Television and Display Technologies</HeadText>
        <SubHeadText>Television</SubHeadText>
        <ParagraphText>
          Television is a telecommunication medium used for transmitting moving
          images in black-and-white or in color, and in two or three dimensions
          and sound. Television is used in the practical of transmitting scenes
          or reception of video and audio UHF or VHF radio signals. Television
          is the practice of transmitting scenes or views by radio or,
          sometimes, by wire: the television transmitter, by means of a camera
          tube, such as an image orthicon or vidicon, converts light rays into
          electric electric signals for modulation upon a radio carrier wave or
          for transmission over wires; the television receiver reconverts the
          signals into electron beams that are projected against the fluorescent
          screen of the kinescope, or picture tube, reproducing the original
          image
        </ParagraphText>
        <SubHeadText>Display technologies</SubHeadText>
        <ParagraphText>
          Television display technologies have been evolving over the years from
          one generation to another. Some of these display technologies include;
          Disk, Cathode ray tube, Digital Light, Processing (DLP), Plasma
          display, Liquid crystal display and Organic light-emitting diode
          Television
        </ParagraphText>
      </BodyText>
    )
  ),
  new Lesson(
    "LES 05-02",
    "Block Diagram of Television Transmitter and Receiver",
    (
      <BodyText>
        <SubHeadText>
          Block Diagram of Television Transmitter and Receiver
        </SubHeadText>
        <LessonImage imgUrl={images.TvAntenna}/>
        <SubHeadText>
          Block Diagram of Television Receiver
        </SubHeadText>
        <LessonImage imgUrl={images.TvReceiver}/>
        <ParagraphText>

        </ParagraphText>
      </BodyText>
    )
  ),
];

export {
  ELECT_DEVICES_CIR_DATA,
  RADIO_AUDIO_FREQ_DATA,
  RADIO_COMM_DATA,
  SAT_TRANS_RECEPT_DATA,
  TELEVISION_DATA,
};
