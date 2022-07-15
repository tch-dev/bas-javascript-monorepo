import React from "react";

const Conditions = () => {
  return (
    <div className="condition-content">
      <article>
        <h3 className="jfin-cond">ข้อตกลง JFIN Staking</h3>
        <p>
          ขอให้ผู้ที่สนใจการ Staking โทเคนดิจิทัล JFIN Token
          (ซึ่งต่อไปนี้จะเรียกว่า &quot;Staker&quot;)
          อ่านข้อความดังต่อไปนี้ให้ครบถ้วนก่อนทำการ Stake บนระบบบล็อกเชน JFIN
          Chain ซึ่งให้บริการโดย บริษัท เจดีเอ็น จำกัด (&quot;JDN&quot;) และ
          บริษัท เจ เวนเจอร์ส จำกัด (&quot;JVC&quot;){" "}
        </p>
        <p>
          1. Staker ตกลงและยอมรับรายละเอียดของโครงการ JFIN Token
          รวมถึงข้อกำหนดและเงื่อนไขของโครงการทั้งหมดตามที่ได้ระบุไว้ในเอกสาร
          JFIN Token - Native Token for JFIN Chain Whitepaper version 3.0
          ฉบับมีผลบังคับใช้วันที่ 17 กรกฎาคม 2565 เป็นต้นไป
          (สามารถเข้าถึงได้ที่: [
          <a href="https://www.jfincoin.io/_files/ugd/ff114f_841c4ad8914c46d589b1a3df053bee8b.pdf">
            Whitepaper 3.0
          </a>
          ]) รวมถึงฉบับที่จะได้มีการแก้ไขเปลี่ยนแปลงของเอกสารฉบับดังกล่าวด้วย
          และ Staker ยินยอมปฏิบัติตามข้อกำหนดและเงื่อนไขดังกล่าว
          รวมถึงกฎระเบียบและวิธีการในการ Staking ตามที่ JDN และ/หรือ JVC
          จะกำหนดและแจ้งให้ทราบเป็นครั้งคราวทุกประการ
        </p>
        <p>
          ในกรณีที่ Staker ไม่ยอมรับข้อกำหนดหรือเงื่อนไขใด ๆ Staker
          จะไม่เข้าทำธุรกรรมหรือใช้บริการใด ๆ ที่เกี่ยวข้องกับโครงการ JFIN Token
          หรือในกรณีที่ Staker ได้เข้าทำธุรกรรมหรือใช้บริการใด ๆ
          ที่เกี่ยวข้องกับโครงการ JFIN Token อยู่แล้ว Staker
          จะหยุดการทำธุรกรรมหรือใช้บริการทันที
        </p>
        <p>
          2. Staker รับทราบและยอมรับว่า ในกรณีที่ Validator Node ที่ Staker
          ได้ทำการ Stake JFIN Token
          ด้วยถูกตัดสิทธิในการเข้าร่วมตรวจสอบยืนยันการทำธุรกรรม (Validation)
          ตามข้อกำหนดและเงื่อนไขของโครงการ JFIN Token นั้น Staker
          อาจไม่ได้รับค่าตอบแทน block reward ในช่วงระยะเวลาที่ Validator Node
          ถูกตัดสิทธิดังกล่าว และหากเกิดความเสียหายใด ๆ แก่ Staker JDN และ/หรือ
          JVC จะไม่ต้องรับผิดในความเสียหายดังกล่าวนั้น
        </p>
        <p>
          3. Staker รับทราบและยอมรับว่า ค่าตอบแทน block reward ที่ได้รับจาก JVC
          สำหรับการที่ Staker นำ JFIN Token มาทำการ Stake บนระบบบล็อกเชน JFIN
          Chain ของ JDN อาจอยู่ในบังคับต้องหักภาษี ณ ที่จ่ายตามกฎหมาย ในการนี้
          Staker ตกลงยินยอมให้ JVC ผู้จ่ายเงินได้หักภาษี ณ
          ที่จ่ายไว้ตามอัตราที่กฎหมายกำหนดเพื่อนำส่งให้แก่กรมสรรพากร นอกจากนี้
          Staker รับทราบว่า ในกรณีที่ Staker ไม่ได้ให้ข้อมูลแก่ JVC
          อย่างครบถ้วนเพียงพอ JVC จะไม่สามารถออกหนังสือรับรองการหักภาษี ณ
          ที่จ่ายให้แก่ Staker รายดังกล่าวได้
        </p>
        <p>
          4. Staker รับทราบและยอมรับว่า ในการใช้สิทธิรับค่าตอบแทน block reward
          สำหรับการที่ Staker นำ JFIN Token มาทำการ Stake อาจมีค่าธรรมเนียม (gas
          fee) ตามอัตราและรายละเอียดที่ JDN และ/หรือ JVC
          จะแจ้งให้ทราบเป็นครั้งคราว และ Staker ตกลงยินยอมให้ JDN และ/หรือ JVC
          หักค่าธรรมเนียม (gas fee) ดังกล่าวไว้ได้ตามอัตราที่กำหนดไว้
        </p>
      </article>
    </div>
  );
};
export default Conditions;
