import { Icon } from '@iconify/react';
const About = () => {
    return (
        <section class="about section" id="About">
            <h2 class="section-title">About Me</h2>

            <div class="about_container bg">
                <div class="about_img">
                    <img src="./assets/img/2.png" alt=""></img>
                </div>

                <div>
                    <p class="about_text">Saya merupakan mahasiswa aktif S1 program studi Pendidikan Ilmu
                        Komputer di Universitas Pendidikan Indonesia tahun angkatan 2022. Selain
                        mengikuti kegiatan yang berada di kampus, saya juga mengikuti
                        pelatihan dan webinar yang diadakan oleh lembaga-lembaga dan perusahaan lainnya
                        yang memberikan pelatihan baik pada bidang website maupun akademik lainnya</p>
                </div>
                <br />
            </div>
            <h2 className="section-title">Skills</h2>
            <div className='about_container bg'>
                <i class="about-icon"><Icon icon="file-icons:c" /></i>
                <i class="about-icon"><Icon icon="akar-icons:html-fill" /></i>
                <i class="about-icon"><Icon icon="devicon-plain:c" /></i>
                <i class="about-icon"><Icon icon="tabler:brand-javascript" /></i>
            </div>

            <h2 class="section-title">Riwayat Pendidikan</h2>
            <div class="pendidikan bg">
                <table class="tabel">
                    <tr>
                        <th>Tingkat</th>
                        <th>Sekolah</th>
                        <th>Keterangan</th>
                    </tr>
                    <tr>
                        <td>SD</td>
                        <td>SDN Rancamanggung</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>SMP</td>
                        <td>SMPN 2 Tanjungsiang</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>SMA</td>
                        <td>SMAN 1 Tanjungsiang</td>
                        <td>LULUS</td>
                    </tr>
                    <tr>
                        <td>Kuliah</td>
                        <td>Universitas Pendidikan Indonesia</td>
                        <td>ON GOING</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}

export default About;